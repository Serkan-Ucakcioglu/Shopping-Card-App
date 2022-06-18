import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "HomePage",
      path: "/",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      name: "Detail",
      path: "/detail/:id",
      component: () => import("@/views/DetailProduct.vue"),
      props: true,
    },
    
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  }
});
export default router;