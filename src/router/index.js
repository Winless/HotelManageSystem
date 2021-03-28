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

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    meta: { title: '房态中心', icon: 'el-icon-s-home' },
    children: [{
      path: '/dashboard/index',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '房态列表', icon: 'dashboard' }
    }, {
      path: '/dashboard/roomStatusTable',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/roomStatusTable'),
      meta: { title: '房态图', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/book',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Book',
        component: () => import('@/views/book/index'),
        meta: { title: '新增预订', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested',
    }
// =======
//       meta: { title: '房态列表' }
// >>>>>>> 78119021c39dddbe77592ee54d2ec78745fc6183
    },
    // {
    //   path: '/dashboardPic',
    //   name: 'RoomStatusTable',
    //   component: () => import('@/views/dashboard/roomStatusTable'),
    //   meta: { title: '房态图' }
    // }
    // {
    //   path: 'dashboard',
    //   name: 'Home',
    //   component: () => import('@/views/dashboard/roomStatusTable'),
    //   meta: { title: '查房列表' }
    // },
    // {
    //   path: 'dashboard',
    //   name: 'Home',
    //   component: () => import('@/views/dashboard/roomStatusTable'),
    //   meta: { title: '房务列表' }
    // }
    // ]
  // },
  /* 预订接待*/
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '预订接待', icon: 'el-icon-document' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       // component: () => import('@/views/table/index'),
  //       meta: { title: '订单管理' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       // component: () => import('@/views/tree/index'),
  //       meta: { title: '新增预订' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       // component: () => import('@/views/tree/index'),
  //       meta: { title: '直接入住' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  /* 物品管理*/
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: { title: '物品管理', icon: 'el-icon-shopping-bag-2' },
  //   children: [
  //     {
  //       path: 'menu1',
  //       // component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: '遗留物品' }
  //     },
  //     {
  //       path: 'menu1-3',
  //       // component: () => import('@/views/nested/menu1/menu1-3'),
  //       name: 'Menu1-3',
  //       meta: { title: '寄存物品' }
  //     }
  //   ]
  // },
  /* 营业报表*/
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: { title: '营业报表', icon: 'el-icon-s-marketing'},
  // },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: { title: '评价管理', icon: 'el-icon-edit-outline'},
  // },
  /* 用户设置*/
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: { title: '用户管理', icon: 'el-icon-user'},
  //   children: [
  //     {
  //       path: 'menu1',
  //       // component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: '用户名单' }
  //     },
  //     {
  //       path: 'menu1',
  //       // component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: '创建用户' }
  //     }
  //   ]
  // },
  /* 账号设置*/
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: { title: '账号设置', icon: 'el-icon-setting'},
  // },

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
