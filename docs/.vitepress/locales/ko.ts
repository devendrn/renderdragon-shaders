import { defineConfig, type DefaultTheme } from 'vitepress'

export const koConfig = defineConfig({  
  title: "렌더드래곤 셰이더",
  description: "RenderDragon 셰이더에 대한 비공식 문서 페이지",
  themeConfig: {
    nav: [
      {
        text: '셰이더',
        link: '/ko/shaders/start',
        activeMatch: '/shaders/'
      },
      {
        text: '문서',
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
      text: '깃허브에서 이 페이지 편집 하기'
    },
    footer: {
      message: "본 사이트는 Mojang Studios와 제휴되어 있지 않습니다."
    },
    docFooter: {
      prev: "전 페이지",
      next: "다음 페이지"
    },
    sidebarMenuLabel: "메뉴",
    returnToTopLabel: "위로 돌아가기",
    lastUpdated: { text: "마지막으로 업데이트 됨" },
    outline: { label: "이 페이지에서" }
  }
})
  
function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '가이드',
      items: [
        {
          text: '설치법',
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
      text: '셰이더 리스트',
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
      text: '문서',
      items: [
        { text: '시작하기', link: 'start' },
        { text: '셰이더 빌드하기', link: 'build' },
        { text: '기타 리소스', link: 'extra' },
        { text: '유틸리티', link: 'utilities' }
      ]
    }
  ]
}
  