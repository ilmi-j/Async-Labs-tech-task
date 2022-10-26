
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Contact/ContactForm') },
      { path: '/blog', name: 'Blog', component: () => import('pages/blog/Blog') },
      { path: '/blog-post', name: 'BlogPost', component: () => import('pages/blog/BlogPost') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
