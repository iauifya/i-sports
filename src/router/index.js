import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/indexView/index.vue')
  // },
  {
    path: "/",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/listView/index.vue"),
      children: [
        // {
        //   path: 'details/:id?', // 籍由動態id配合AJAX取得結帳資料
        //   name: 'details',
        //   component: () =>
        //     import(/* webpackChunkName: "product" */ "../views/detailsView/index.vue"),
        //   // props: route => ({id:parseInt(route.params.id)})
        // }
      ]
  },
  {
    path: "/list/:type",
    name: "listaFilter",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/listView/index.vue"),
  },
  {
    path: '/details/:id', // 籍由動態id配合AJAX取得資料
    name: 'details',
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/detailsView/index.vue"),
    // props: route => ({id:parseInt(route.params.id)})
    // props: (route) => route.params.id
    props: true,
  },
  {
    path: '*',
    redirect: '/home'
  }
  
]

const router = new VueRouter({
  routes
})

export default router
