import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
//import Dashboard from "../views/Dashboard.vue";
import Reports from "../views/ReportsForm.vue";
import AnnouncementPage from "../views/Announcement.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
