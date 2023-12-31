import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  title: "RenderDragon Shaders",
  description: "Unofficial documentation page for RenderDragon Shaders",
  base: '/renderdragon-shaders/',
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: nav(),

    sidebar: {
      '/shaders/': { base: '/shaders/', items: sidebarShaders() },
      '/docs/': { base: '/docs/', items: sidebarDocs() }
    },

    editLink: {
      pattern: 'https://github.com/devendrn/renderdragon-shaders/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/devendrn/renderdragon-shaders' }
    ],

    footer: {
      message: "This site is not affiliated with Mojang Studios."
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Shaders',
      link: '/shaders/front-page',
      activeMatch: '/shaders/'
    },
    {
      text: 'Docs',
      link: '/docs/getting-started',
      activeMatch: '/docs/'
    }
  ]
}

function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Installation',
          base: '/shaders/installation-',
          link: 'all',
          items: [
            { text: 'Android', link: 'android' },
            { text: 'Windows', link: 'windows' },
            { text: 'iOS', link: 'ios' },
            { text: 'Linux', link: 'linux' }
          ]
        }
      ]
    },
    {
      text: 'Shaders List',
      items: [
        { text: 'Explore', link: 'front-page' },
        {
          text: 'Forward',
          base: '/shaders/list-',
          link: 'rd',
          collapsed: true,
          items: [
            { text: 'YSS Shader', link: 'rd/yss-shader' },
            { text: 'Newb X Legacy', link: 'rd/newb-shader' },
          ]
        },
        {
          text: 'Deferred',
          base: '/shaders/list-',
          link: 'deferred',
          collapsed: true,
          items: [
            
          ]
        },
      ]
    }
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    
  ]
}
