// Import router
import { createRouter, createWebHistory } from 'vue-router';

// Import views
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Models from '../views/Models.vue';
import Orders from '../views/Orders.vue';

// Create router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/models',
      component: Models,
    },
    {
      path: '/orders',
      component: Orders,
    }
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavoir: 'smooth' });
      }, 250);
    });
  }
});

// Export router
export default router;