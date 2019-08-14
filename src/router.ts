import Vue from 'vue'
import Router from 'vue-router'
// import VueAnalytics from 'vue-analytics'
/* template */
import Template from '@/components/templates/template.vue'
import TemplateVideoYoutube from '@/components/templates/video/youtube.vue'
import TemplateVideoLive from '@/components/templates/video/live.vue'
import TemplateA7VideoLive from '@/components/templates/video/a7-live.vue'
import a9 from '@/pages/a9/a9.vue'
// import Player from '@/components/templates/video/Player.vue';

Vue.use(Router)

let router: any = {
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // /
    {
      path: '/',
      name: 'CatchPlay',
      component: a9
    },
    // /test
    // /show
    {
      path: '/video',
      name: 'video-play',
      component: Template,
      children: [
        {
          path: 'youtube',
          component: TemplateVideoYoutube
        },
        {
          path: 'live',
          component: TemplateVideoLive
        },
        {
          path: 'a7-live',
          component: TemplateA7VideoLive
        }
      ]
    },
  ]
}
// router.afterEach((to: any, from: any) => {
//   ga('set', 'page', to.path)
//   ga('send', 'pageview')
// })
export default new Router(router)
// export default new Router(router)
// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     // {
//     //   path: "/",
//     //   name: "home",
//     //   component: Home
//     // },
//     // {
//     //   path: "/about",
//     //   name: "about",
//     //   // route level code-splitting
//     //   // this generates a separate chunk (about.[hash].js) for this route
//     //   // which is lazy-loaded when the route is visited.
//     //   component: () =>
//     //     import(/* webpackChunkName: "about" */ "./views/About.vue")
//     // }
//   ]
// });

