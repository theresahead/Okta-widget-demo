import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";
import Home from "@/components/Home";
import LoginComponent from "@/components/Login";
import ProfileComponent from "@/components/Profile";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: LoginComponent,
    },
    {
      path: "/login/callback",
      component: LoginCallback,
    },
    {
      path: "/profile",
      component: ProfileComponent,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(navigationGuard);

export default router;
