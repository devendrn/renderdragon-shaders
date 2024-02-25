
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ShaderCard from './components/ShaderCard.vue'
import Gallery from './components/Gallery.vue'
import ShaderList from './components/ShaderList.vue'
import YTEmbed from './components/YTEmbed.vue'

import './theme.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShaderCard', ShaderCard),
    app.component('ShaderList', ShaderList),
    app.component('Gallery', Gallery),
    app.component('YTEmbed', YTEmbed)
  }
} satisfies Theme
