import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: () => import('@/views/HomePage.vue'),
        navbar: NavBar,
        footer: FooterSection,
      },
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      components: {
        default: () => import('@/views/AboutUs.vue'),
        navbar: NavBar,
        footer: FooterSection,
      },
      meta: {
        title: 'About Us',
      },
    },
    {
      path: '/feedback',
      components: {
        default: () => import('@/views/FeedbackPage.vue'),
        navbar: NavBar,
        footer: FooterSection,
      },
      meta: {
        title: 'Feedback',
      },
    },
    {
      path: '/faq',
      components: {
        default: () => import('@/views/FaQPage.vue'),
        navbar: NavBar,
        footer: FooterSection,
      },
      meta: {
        title: 'FAQ',
      },
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/register',
      component: () => import('@/views/RegisterPage.vue'),
      meta: {
        title: 'Register',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - XYZ Railway` : 'XYZ Railway'
  next()
})

export default router
