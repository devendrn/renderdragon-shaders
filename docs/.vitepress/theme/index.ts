
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ShaderCard from './components/ShaderCard.vue'
import Gallery from './components/Gallery.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShaderCard', ShaderCard),
    app.component('Gallery', Gallery)
  }
} satisfies Theme