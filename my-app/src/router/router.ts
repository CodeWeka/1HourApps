import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/apps",
    name: "AppList",
    component: () =>
        import("../views/AppList.vue")
  },
  {
    path: "/apps/countdown",
    name: "CountDown",
    component: () =>
        import("../views/1HourApps/CountDown.vue")
  },
  {
    path: "/apps/drawcanvas",
    name: "DrawCanvas",
    component: () =>
        import("../views/1HourApps/DrawCanvas.vue")
  },
  {
    path: "/euler",
    name: "EulerProject",
    component: () =>
        import("../views/EulerProject.vue")
  },
  {
    path: "/euler/ep1",
    name: "Ep1",
    component: () =>
        import("../views/EulerProject/ep1.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
