// This content is follow the instructions from
// https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

//import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'th-TH',
      title: 'VuePress2 Starter',
      description: 'The Starter website for VuePress2',
    }
  },
  theme: localTheme({
    // default theme options
    logo: 'images/logo.png',
    navbar: false,
  }),
})