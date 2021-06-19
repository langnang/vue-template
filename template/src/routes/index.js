import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: ()=>import("@/views/home"),
      meta: {
        title: "Home",
      },
    },
    {
      path: "/vue-awesome",
      component: ()=>import("@/views/vue-awesome"),
      meta: {
        title: "VueAwesome",
      },
    },
    {
      path: "/dynamic/:id",
      component: ()=>import("@/views/dynamic"),
      meta: {
        title: "Dynamic",
      },
    },
    {
      path: "*",
      component: ()=>import("@/views/error"),
      meta: {
        title: "Error",
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  to.meta.title += " | {{name}}";
  next();
});

export default router;
