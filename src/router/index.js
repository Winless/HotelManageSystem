import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  /* 房态中心*/
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/index',
    meta: { title: '房态中心', icon: 'el-icon-s-home' },
    children: [{
      path: '/dashboard/index',
      name: 'Home',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '房态图' }
    }, {
      path: '/dashboard/roomStatusTable',
      name: 'RoomStatusTable',
      component: () => import('@/views/dashboard/roomStatusTable'),
      meta: { title: '房态表' }
    }, {
      path: '/dashboard/repairroom',
      name: 'Repairroom',
      component: () => import('@/views/dashboard/repairroom'),
      meta: { title: '房务列表' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  /* 预定接待*/
  /* 房态中心*/
  {
    path: '/book',
    component: Layout,
    redirect: '/book/index',
    meta: { title: '预定接待', icon: 'el-icon-document' },
    children: [{
      path: '/book/index',
      name: 'Book',
      component: () => import('@/views/book/index'),
      meta: { title: '订单管理' }
    }, {
      path: '/book/booking',
      name: 'Booking',
      component: () => import('@/views/book/booking'),
      meta: { title: '新增预订' }
    }, {
      path: '/book/checkin',
      name: 'Checkin',
      component: () => import('@/views/book/checkin'),
      meta: { title: '直接入住' }
    }, {
      path: '/book/invoice',
      name: 'Invoice',
      component: () => import('@/views/book/invoice'),
      meta: { title: '发票管理' }
    }]
  },
  /* 营业报表*/
  {
    path: '/Statement',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'statement',
        component: () => import('@/views/Statement/index'),
        meta: { title: '营业报表', icon: 'el-icon-data-line' }
      }
    ]
  },
  /* 评价管理*/
  {
    path: '/comment',
    component: Layout,
    children: [
      {
        path: '/comment/index',
        name: 'Comment',
        component: () => import('@/views/comment/index'),
        meta: { title: '评价管理', icon: 'el-icon-edit-outline' }
      }
    ]
  },
  /* 用户设置*/
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    name: 'User',
    meta: { title: '用户管理', icon: 'el-icon-user' },
    children: [{
      path: '/user/index',
      name: 'User',
      component: () => import('@/views/user/index'),
      meta: { title: '用户名单' }
    }, {
      path: '/user/createUser',
      name: 'CreateUser',
      component: () => import('@/views/user/createUser'),
      meta: { title: '创建用户' }
    }, {
      path: '/user/changePassword',
      name: 'ChangePassword',
      component: () => import('@/views/user/changePassword'),
      hidden: true
    }]
  },
  /* 账号设置*/
  {
    path: '/account',
    component: Layout,
    name: 'AccountSetting',
    children: [
      {
        path: 'index',
        name: 'AccountSetting',
        component: () => import('@/views/account/index'),
        meta: { title: '资料设置', icon: 'el-icon-setting' }
      }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
