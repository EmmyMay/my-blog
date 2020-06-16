// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import './assets/style/index.scss'
import {
  VLazyImagePlugin
} from 'v-lazy-image';


import DefaultLayout from '~/layouts/blog.vue'

export default function (Vue, {
  router,
  appOptions,
  head,
  isClient
}) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  })

  const opts = {
    icons: {
      iconfont: 'mdi',
    }
  } // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify(opts)
  Vue.use(VLazyImagePlugin)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}