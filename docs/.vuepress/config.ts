// This content is follow the instructions from
// https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

//import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { localTheme } from './theme'

export default defineUserConfig({
  theme: localTheme({
    // default theme options
  }),
})