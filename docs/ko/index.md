---
layout: home

hero:
  name: "RenderDragon Shaders"
  text: "for MCBE"
  tagline: An unofficial curated list and documentation about RenderDragon Shaders
  actions:
    - theme: brand
      text: Explore shaders
      link: ko/shaders/index
    - theme: alt
      text: GitHub
      link: https://github.com/devendrn/renderdragon-shaders
  image:
    src: /renderdragon-logo.webp
    alt: RenderDragon Logo

features:
  - icon: 📃
    title: Shaders
    details: Community sourced list of RenderDragon shaders for MCBE
  - icon: 🛠️
    title: Documentation
    details: Unofficial resources for building RenderDragon shaders
  - icon: 📝
    title: Open Source
    details: Edits and contributions made by community members
  - icon: 🚀
    title: Uses VitePress
    details: Simple, powerful, and fast modern SSG framework
  
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
