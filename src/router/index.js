import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
//import store from '../store/store';
//import { IS_USER_AUTHENTICATE_GETTER, GET_USER_TOKEN_GETTER } from '../store/storeconstants';
import Dashboard from "../views/Dashboard.vue";
import Announcement from "../views/Announcement.vue";
import Signup from "@/views/Signup.vue";
import MainLayout from "@/views/MainLayout.vue";
//const Dashboard = () => import('../views/Dashboard.vue');
//import MainLayout from "@/views/MainLayout.vue";
import ReportsForm   from "../views/ReportsForm.vue";
import AccountList from "../views/AccountList.vue";
import AddReports from "@/views/reports/AddReports.vue";
import EditReport from "@/views/reports/EditReport.vue";
import ViewReport from "@/views/reports/ViewReport.vue";
import AddAccount from "@/views/UserAccount/AddAccount.vue";


// const userSide = (props) => [
//   {   
//       path: '', 
//       name: props + '.dashboard',
//       meta: {
//           auth: false,
//           user: 'user',
//           userType: 'user'
//       },
//       //component: UserDash,
//   },
//   {
//       path: 'dashboard',
//       name: props + '.dashboard',
//       meta: {
//           auth: false,
//           user: 'user',
//           userType: 'user'
//       },
//       //component: UserDash,
//   },
//   {
//     path: 'reportsform',
//     name: props + '.reportsform',
//     meta: {
//         auth: false,
//         user: 'user',
//         userType: 'user'
//     },
//     //component: UserReportsForm,
// },
//   {
//     path: 'addreports',
//     name: props + '.addreports',
//     meta: {
//         auth: false,
//         user: 'user',
//         userType: 'user'
//     },
//     //component: UserAddReports,
// },
// ]

const adminSide = (props) => [
  {
      path: '',
      name: props + '.dashboard',
      meta: {
          auth: true,
          user: 'admin',
          userType: 'admin'
      },
      component: Dashboard
  },
  {
      path: 'dashboard',
      name: props + '.dashboard',
      meta: {
          auth: true,
          user: 'admin',
          userType: 'admin'
      },
      component: Dashboard
  },
{
    path: 'announcement',
    name: props + '.announcement',
    meta: {
      auth: true,
      user: 'admin',
      userType: 'admin'
    },
    component: Announcement
},
{
  path: 'reportsform',
  name: props + '.reportsform',
  meta: {
    auth: true,
    user: 'admin',
    userType: 'admin'
  },
  component: ReportsForm
},
{
  path: 'accountlist',
  name: props + '.accountlist',
  meta: {
    auth: true,
    user: 'admin',
    userType: 'admin'
  },
  component: AccountList
},
{
  path: 'addreport',
  name: props + '.addreport',
  meta: {
    auth: true,
    user: 'admin',
    userType: 'admin'
  },
  component: AddReports
},
{
  path: 'editreport',
  name: props + '.editreport',
  meta: {
    auth: true,
    user: 'admin',
    userType: 'admin'
  },
  component: EditReport
},
{
  path: 'viewreport',
  name: props + '.viewreport',
  meta: {
    auth: true,
    user: 'admin',
    userType: 'admin'
  },
  component: ViewReport
},
{
  path: 'addaccount',
  name: props + '.addaccount',
  meta: {
    auth: true,
    user: 'admin',
    userType: 'admin'
  },
  component: AddAccount
},

]



const routes = [{
  path: '',
  redirect: '/login'
},
{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
      auth: false,
      user: 'guest'
  }
},
{
  path: '/signup',
  component: Signup,
  meta: {
      auth: false,
      user: 'guest'
  }
},
// {
//   path: '/user',
//   component: MainLayout,
//   redirect:'/user/dashboard/',
//   children: userSide('user')
// },
{
  path: '/admin',
  component: MainLayout,
  redirect: '/admin/dashboard',
  children: adminSide('admin')
},
];



const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
// Middleware
// function userMiddleware(to, from, next) {
//   // Admin user middleware logic
//   // console.log('Applicant user middleware')
//   if (to.meta.user !== 'admin') {
//       next('/admin/dashboard')
//   } else {
//       next()
//   }
// }
// // Middleware for client
// function clientMiddleware(to, from, next) {
//       // Admin user middleware logic
//       // console.log('Applicant user middleware')
//   if (to.meta.user !== 'user') {
//       next('/user/dashboard')
//   } else {
//       next()
//   }
// }
// router.beforeEach((to, from, next) => {

//   Check if the user is Autheticated
//   const isAuth = store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
//   const isToken = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
//   console.log(isToken)
//   console.log(isAuth)
//   if (
//       'auth' in to.meta &&
//       to.meta.auth &&
//       !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
//   ) {
//       next('/login');
//   } else {
//       next();
//   } 
//          if (isAuth) {
//        if (to.meta.user == 'admin')
//        {
//           userMiddleware(to, from, next)
//        }
//    } else {
//        if (to.meta.user !== 'guest') {
//            next('/')
//        } else {
//            next()
//        }
//    }  

//    if (to.meta.auth && !isAuth && !isToken) {
//        Redirect unauthenticated users to the login page
//       next('/login');
//   } else if (to.meta.auth && !isAuth && isToken) {
//        If token is present but not authenticated, attempt to authenticate
//        You may need to dispatch an action to authenticate the user here
//   } else if (to.meta.auth && isAuth) {
//        Authenticated user, allow access to the route
//       next();
//   } else {
//        No authentication required, allow access
//       next();
//   }
//});

export default router;
