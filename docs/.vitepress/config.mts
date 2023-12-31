import { defineConfig } from 'vitepress'
import { enConfig } from './locales/en.ts'
import { koConfig } from './locales/ko.ts'

export default defineConfig({
  base: '/renderdragon-shaders/',
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/renderdragon-logo-small.webp',
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
    ['link', { rel: 'icon', type: 'image/webp', href: `renderdragon-logo-small.webp` }]
  ]
})
