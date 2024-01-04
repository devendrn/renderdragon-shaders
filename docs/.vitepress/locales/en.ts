import { defineConfig, type DefaultTheme } from 'vitepress'

export const enConfig = defineConfig({  
  title: "RenderDragon Shaders",
  description: "Unofficial documentation page for RenderDragon Shaders",
  themeConfig: {
    nav: [
      {
        text: 'Shaders',
        link: '/shaders/start',
        activeMatch: '/shaders/'
      },
      {
        text: 'Docs',
        link: '/docs/start',
        activeMatch: '/docs/'
      }
    ],
    sidebar: {
      '/shaders/': {
        base: '/shaders/',
        items: sidebarShaders() 
       },
      '/docs/': {
        base: '/docs/',
        items: sidebarDocs()
      }
    },
    editLink: {
      pattern: 'https://github.com/devendrn/renderdragon-shaders/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: "This site is not affiliated with Mojang Studios."
    }
  }
})
  
function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Installation',
          base: '/shaders/installation/',
          link: 'start',
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
        { text: 'Explore', link: 'start' },
        { text: 'Forward', link: 'list/rd' },
        { text: 'Deferred', link: 'list/deferred' },
      ]
    }
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Documentation',
      items: [
        { text: 'Getting started', link: 'start' },
        { text: 'Building shaders', link: 'build' },
        { text: 'Extra', link: 'extra' },
        { text: 'Utilities', link: 'utilities' }
      ]
    }
  ]
}
  