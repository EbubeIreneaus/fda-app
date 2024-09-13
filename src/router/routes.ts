import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Buyer/IndexPage.vue') },
      { path: '/about', component: () => import('src/pages/AboutPage.vue') },
      { path: '/contact', component: () => import('src/pages/ContactPages.vue') },
      {path: 'shop', component: ()=> import('pages/Buyer/ShopPage.vue')},
      {path: 'product/:id', component: ()=> import('pages/Buyer/SingleProductPage.vue')},
      {path: 'cart', component: ()=> import('pages/Buyer/CartPage.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
