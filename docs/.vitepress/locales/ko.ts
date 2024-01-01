import { defineConfig, type DefaultTheme } from 'vitepress'

export const koConfig = defineConfig({  
  title: "RenderDragon Shaders",
  description: "Unofficial documentation page for RenderDragon Shaders",
  themeConfig: {
    nav: [
      {
        text: 'Shaders',
        link: '/ko/shaders/start',
        activeMatch: '/shaders/'
      },
      {
        text: 'Docs',
        link: '/ko/docs/start',
        activeMatch: '/docs/'
      }
    ],
    sidebar: {
      '/ko/shaders/': {
        base: '/ko/shaders/',
        items: sidebarShaders() 
       },
      '/ko/docs/': {
        base: '/ko/docs/',
        items: sidebarDocs()
      }
    },
    editLink: {
      pattern: 'https://github.com/devendrn/renderdragon-shaders/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: "This site is not affiliated with Mojang Studios."
    },
    docFooter: {
      prev: "Previous page",
      next: "Next page"
    },
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Return to top",
    lastUpdated: { text: "Last updated" },
    outline: { label: "On this page" }
  }
})
  
function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Installation',
          base: '/ko/shaders/installation/',
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
    
  ]
}
  