import { createRouter, createWebHistory } from 'vue-router'
import store from "../store";
import Dashboard from "../views/Dashboard";
import Finance from "../views/Finance";
import Profile from "../views/Profile";
import Report from "../views/Report";
import Login from "../views/LogIn";


const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/finance",
    name: "finance",
    component: Finance,
    meta: {
      authRequired: true,
    },

  },
  {
    path: "/reports",
    name: "report",
    component: Report,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/404",
    name: "404",
    component: 404,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.authRequired);
  if (!authRequired) return next();

  if (store.getters["auth/loggedIn"]) {
    // Validate the local user token...
    return store.dispatch("auth/validate").then(validUser => {
      // Then continue if the token still represents a valid user,
      // otherwise redirect to login.
      validUser ? next() : redirectToLogin();
    });
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin();

  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: "login", query: { redirectFrom: to.fullPath } });
  };


});

export default router
