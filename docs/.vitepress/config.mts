import { defineConfig } from 'vitepress'
import { enConfig } from './locales/en.ts'
import { koConfig } from './locales/ko.ts'
import { base } from './meta.ts'

export default defineConfig({
  base: base + "/",
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/renderdragon-logo-small.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/devendrn/renderdragon-shaders' }
    ],
    search: { provider: 'local' },
  },
  locales: {
    root: { label: 'English', lang: 'en', ...enConfig },
    ko: { label: '한국어', lang: 'ko', ...koConfig }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `renderdragon-logo-small.png` }]
  ]
})
