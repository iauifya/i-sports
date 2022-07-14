import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/list",
    name: "list",
    // redirect: "/list",
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
    path: '/details/:id', // 籍由動態id配合AJAX取得結帳資料
    name: 'details',
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/detailsView/index.vue"),
    // props: route => ({id:parseInt(route.params.id)})
    // props: (route) => route.params.id
    props: true
  }
  
]

const router = new VueRouter({
  routes
})

export default router
