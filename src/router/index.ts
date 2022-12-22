import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index1.vue'
// import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Form1',
      name: 'Form1',
      component: ()=> import("../views/Admin/side-menu-dark-crud-form.vue"),
    },
    {
      path: '/Sale1',
      name: 'Sale1',
      component: ()=> import("../views/Admin/side-menu-dark-point-of-sale.vue"),
    },
    {
      path: '/Post1',
      name: 'Post1',
      component: ()=> import("../views/Admin/side-menu-dark-post.vue"),
    },
    {
      path: '/Blog1',
      name: 'Blog1',
      component: ()=> import("../views/Admin/side-menu-Faq_Layout1.vue"),
    },
    {
      path: '/Calender1',
      name: 'Calender1',
      component: ()=> import("../views/Admin/side-menu-dark-calendar.vue"),
    },
    {
      path: '/Commerçiaux1',
      name: 'Commerçiaux1',
      component: ()=> import("../views/Admin/side-menu-Pricing_Layout2.vue"),
    },
    {
      path: '/Blog1',
      name: 'Blog1',
      component: ()=> import("../views/Admin/side-menu-dark-Vendeurs.vue"),
    },
    {
      path: '/Livreurs1',
      name: 'Livreurs1',
      component: ()=> import("../views/Admin/side-menu-dark-Livraisons.vue"),
    },
    {
      path: '/Table1',
      name: 'Table1',
      component: ()=> import("../views/Admin/side-menu-light-regular-table.vue"),
    },
    {
      path: '/Manager1',
      name: 'Manager1',
      component: ()=> import("../views/Admin/side-menu-light-file-manager.vue"),
    },
    {
      path: '/Chat1',
      name: 'Chat1',
      component: ()=> import("../views/Admin/side-menu-light-chat.vue"),
    },
    {
      path: '/Users1',
      name: 'Users1',
      component: ()=> import("../views/Admin/side-menu-dark-users-layout-1.vue"),
    },
    {
      path: '/Users2',
      name: 'Users2',
      component: ()=> import("../views/Admin/side-menu-dark-users-layout-2.vue"),
    },
    {
      path: '/Tab1',
      name: 'Tab1',
      component: ()=> import("../views/Admin/side-menu-dark-tabulator.vue"),
    },
    {
      path: '/Profile1',
      name: 'Profile1',
      component: ()=> import("../views/Admin/side-menu-dark-profile-overview-1.vue"),
    },
    {
      path: '/Profile2',
      name: 'Profile2',
      component: ()=> import("../views/Admin/side-menu-dark-profile-overview-2.vue"),
    },
    {
      path: '/Tarif1',
      name: 'Tarif1',
      component:()=> import("../views/Admin/side-menu-invoice.vue"),
    },
    {
      path: "/Client1",
      name: "Client1",
      component: ()=> import("../views/Admin/side-menu-clients.vue"),
    },
    {
      path: "/Data1",
      name: "Data1",
      component: ()=> import("../views/Admin/side-menu-dark-crud-data-list.vue"),
    },
    {
      path: "/Profiles1",
      name: "Profiles1",
      component: ()=> import("../views/Admin/side-menu-dark-profile-overview-1.vue"),
    },
  ]
})

export default router
