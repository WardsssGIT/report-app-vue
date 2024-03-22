import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Reports from "../views/ReportsForm.vue";
import AnnouncementPage from "../views/Announcement.vue";
import Signup from "../views/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Main Layout",
    component: () => import("@/views/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "DashboardDefault",
        component: AnnouncementPage,
        beforeEnter: (to, from, next) => {
          // Check if user is authenticated (example only, implement your actual authentication logic)
          const isAuthenticated = localStorage.getItem("loggedIn") === "true";
          if (isAuthenticated) {
            // Proceed to the dashboard
            next();
          } else {
            // Redirect to login page if not authenticated
            next({ name: "Login" });
          }
        },
      },
      {
        path: "/reports",
        name: "Reports",
        component: Reports,
      },
      {
        path: "/reports/add",
        name: "Add Reports",
        component: () => import("@/views/reports/AddReports.vue"),
      },
      {
        path: "/reports/view/:data",
        name: "View Reports",
        component: () => import("@/views/reports/ViewReport.vue"),
      },
      {
        path: "/reports/edit/:data",
        name: "Edit Reports",
        component: () => import("@/views/reports/EditReport.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
