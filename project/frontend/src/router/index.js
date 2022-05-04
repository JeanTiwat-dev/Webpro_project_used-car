import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/home.vue")
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/Shop/shop.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/Shop/detail.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Login/register.vue")
  },
  {
    path: "/sell",
    name: "addproduct",
    component: () => import("../views/seller/addproduct.vue")
  },
  {
    path: "/profile/:userId",
    name: "profile",
    component: () => import("../views/Profile/editprofile.vue")
  },
  {
    path: "/editcar/:carId",
    name: "editproduct",
    component: () => import("../views/seller/editproduct.vue")
  },
  {
    path: "/manageseller",
    name: "manageseller",
    component: () => import("../views/seller/manageseller.vue")
  },
  {
    path: "/comparecar",
    name: "comparecar",
    component: () => import("../views/Shop/compare.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;
