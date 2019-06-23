import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Find from "./views/Find.vue";
import Shop from "./views/Shop.vue";
import Login from "./views/Login.vue";
import ProList from "./components/ProList.vue";
import Search from "./views/Search.vue";
import Detail from "./views/Detail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Detail
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/find",
      name: "find",
      component: Find
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/prolist",
      name: "prolist",
      component: ProList
    }
    // {
    //   path: "/",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ],
  linkActiveClass: "mui-active"
});
