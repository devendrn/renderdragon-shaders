# renderdragon-shaders

An unofficial documentation webpage about RenderDragon shaders, built using Vitepress.

This webpage builds upon **[Render-dragon-shader-list](https://github.com/DominoKorean/Render-dragon-shader-list)**, addressing some of its drawbacks in displaying contents efficiently for an average user.
It also extends by providing documentation and resources on making custom shaders for RenderDragon.
 
> [!NOTE]
> You can contribute to this documentation in the following ways:  
> 🡢 Opening an issue  
> 🡢 Forking repository and making a PR
> 
> See [contributing section](#contributing) for more info.

## Progress 

- [x] Home page
- [x] Installation guide (Android/Win/iOS/Linux)
- [ ] Documentation
  - [x] Building (Win/Linux)
  - [x] Utilities
  - [ ] Extras
  - [ ] Code Snippets
- [ ] Shaders List
  - [ ] RD List
  - [x] Deferred List

## Pages structure

```
📂 docs
├─📂 .vitepress
│  └─📂 locales
│     ├─📄 en.ts
│     └─📄 ko.ts     🡠 Korean version of en.ts
├─📂 public          🡠 Images
├─📂 ko              🡠 Korean version of pages
├─📂 docs            🡠 RD docs
├─📂 shaders
│  ├─📂 installation 🡠 Installation guides
│  ├─📂 list
│  │  ├─📂 rd        🡠 RD shaders
│  │  └─📂 deferred  🡠 Deferred RD shaders
│  └─📄 start.md     🡠 Shaders page
└─📄 index.md        🡠 Home page
```

## Setup

You will need [node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Install dependencies
```
npm install
```
Start local server for realtime preview
```
npm run docs:dev
```

## Contributing
You can contribute by either forking this repo and making a PR, or by opening an issue with required details.

### 1. Improve or update content

You can help in improving the documentation by fixing typos, rectifying incorrect information, adding more details, or updating shaders.

### 2. Write docs

You can add new sections in documentation to cover resources that you think might help others.
If you want to create a new page for the same, create a new .md file in `docs/docs/` and link this to the documentation sidebar in `en.ts`

### 3. Add shaders
1. Create a new file, `shader-name.md` inside:  
   * `shaders/list/deferred` for Deferred RenderDragon shader
   * `shaders/list/rd` for RenderDragon shader

2. Add the following details to that file:
   (Refer to existing files to understand better)
   ```
   ---
   name: <Shader name>
   tags: <Supported platforms>
   banner: <Banner image url>
   last_updated: <Latest pack update date, YYYY-M-D format>
   ---

   # <Shader name>
   
   <Gallery
   :images="<Screenshot urls>"
   />

   ### Description

   <Description of the shader>

   * Source code: <Optional>
   * Supported platforms: <Supported platforms>
   * Discord server: <Optional>
   * <More details if required> 

   ### Download
  
   ::: tip <Version code>
    * <Download link>
   :::
   ```
3. Add screenshots inside `public/images/`:
   * **Name**: `shader-name-<number>.jpg`  
    `shader-name-0.jpg` should be used as the banner image
   * **Type**: jpg (under 250kb)
   * **Number**: At least 3 images, maximum allowed is 8

4. Preview and verify the changes before making a pull request


## Note

This webpage/repository has no affiliation with Mojang Studios or Minecraft.
**RenderDragon and its assets are solely owned by Mojang Studios.**
