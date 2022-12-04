import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../pages/Index.vue"),
  },
  {
    path: "/setting/",
    name: "Setting",
    component: () => import("../pages/Setting.vue"),
  },
  {
    path: "/records/",
    name: "Records",
    component: () => import("../pages/Records.vue"),
  },
  {
    path: "/about/",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: 'smooth',
  //     }
  //   }
  // }
});
