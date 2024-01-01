---
layout: home

hero:
  name: "RenderDragon Shaders"
  text: "for MCBE"
  tagline: 렌더드래곤 셰이더에 대한 비공식 선별 목록 및 문서
  actions:
    - theme: brand
      text: 셰이더 살펴보기
      link: ./shaders/start
    - theme: alt
      text: GitHub
      link: https://github.com/devendrn/renderdragon-shaders
  image:
    src: /renderdragon-logo.webp
    alt: RenderDragon Logo

features:
  - icon: 📃
    title: 셰이더
    details: 커뮤니티에서 제공하는 MCPE용 Render Dragon 셰이더 목록
  - icon: 🛠️
    title: 문서
    details: RenderDragon 셰이더 구축에 관한 비공식 문서
  - icon: 📝
    title: 오픈 소스
    details: 커뮤니티 회원의 편집 및 기여
  - icon: 🚀
    title: VitePress 사용됨
    details: 간단하고 강력하며 빠른 최신 SSG 프레임워크
  
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>