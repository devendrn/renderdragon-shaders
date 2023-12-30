
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ShaderCard from './components/ShaderCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShaderCard', ShaderCard)
  }
} satisfies Theme