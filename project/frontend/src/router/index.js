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
    meta: { guess: true },
    component: () => import("../views/Login/login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { guess: true },
    component: () => import("../views/Login/register.vue")
  },
  {
    path: "/sell",
    name: "addproduct",
    meta: { login: true },
    component: () => import("../views/seller/addproduct.vue")
  },
  {
    path: "/profile/:userId",
    name: "profile",
    meta: { login: true },
    component: () => import("../views/Profile/editprofile.vue")
  },
  {
    path: "/mycar/:userId",
    name: "mycar",
    component: () => import("../views/Mycar/mycar.vue")
  },
  {
    path: "/editcar/:carId",
    name: "editproduct",
    meta: { login: true },
    component: () => import("../views/seller/editproduct.vue")
  },
  {
    path: "/manageseller",
    name: "manageseller",
    meta: { admin: true },
    component: () => import("../views/seller/manageseller.vue")
  },
  {
    path: "/comparecar/:car1/:car2",
    name: "comparecar",
    component: () => import("../views/Shop/compare.vue")
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: () => import("../views/Profile/changepassword.vue")
  },

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, _from, next) => {
  const isLoggedIn = !!localStorage.getItem('user_account')

  if (to.meta.login && !isLoggedIn) {
    alert('Please login first!')
    next({ path: '/login' })
  }

  if (to.meta.guess && isLoggedIn) {
    alert("You've already logged in")
    next({ path: '/'})
  }

  next()
})


export default router;
