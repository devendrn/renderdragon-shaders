# renderdragon-shaders

An unofficial documentation webpage about RenderDragon shaders, built using Vitepress.

This webpage builds upon **[Render-dragon-shader-list](https://github.com/DominoKorean/Render-dragon-shader-list)**, addressing some of its drawbacks in displaying contents efficiently for an average user.
It also extends by providing documentation and resources on making custom shaders for RenderDragon.
**The webpage is however not complete yet.**

## Progress

✅ - Done  
❌ - Incomplete 

| Content | Status |
|-|-|
| Home | ✅ |
| Installation start<br>Android<br>Windows<br>iOS<br>Linux | ✅<br>❌<br>❌<br>❌<br>✅ |
| Docs start<br>Building (Win)<br>Building (Linux)<br> Utilites<br>Extras | ✅<br>✅<br>❌<br>✅<br>❌ |
| Shaders start<br>RD List<br>Deferred List | ✅<br>❌<br>✅ |

## Pages structure

```
docs
├─.vitepress
│  └─ locales
│     ├─ en.ts
│     └─ ko.ts     <- Korean version of en.ts
├─ public          <- Images
├─ ko              <- Korean version of pages
├─ docs            <- RD docs (TODO)
├─ shaders
│  ├─ installation <- Installation guides
│  ├─ list
│  │  ├─ rd        <- RD shaders
│  │  └─ deferred  <- Deferred RD shaders
│  └─ start.md     <- Shaders page
└─ index.md        <- Home page
```

## Setup

You will need 
[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git),
[node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Clone this repository
```
git clone https://github.com/devendrn/renderdragon-shaders
cd renderdragon-shaders
```
Install dependencies
```
npm install
```
Start local server for realtime preview
```
npm run docs:dev
```

## Contribute

### 1. Write docs

You can add new sections in documentation to cover resources that you think might help others.
If you want to create a new page for the same, create a new .md file in `docs/docs/` and link this to the documentation sidebar in `en.ts`

### 3. Improve or update content

You can help in improving the documentation by fixing typos, rectifying incorrect information, adding more details, or updating shaders.

### 4. Add shaders
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


## Feedbacks

Feedbacks and suggestions are also welcome!
You could suggest how to improve the layout of displayed content, like adding certain changes in shader banner cards.
Maybe you have a better logo for this website in hand.
Whatever it may be, we'd love to hear your thoughts and keep improving this webpage.

## Note

This webpage/repository has no affiliation with Mojang Studios or Minecraft.
**RenderDragon and its assets are solely owned by Mojang Studios.**