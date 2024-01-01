# renderdragon-shaders

This is an unofficial static documentation page about RenderDragon shaders, also created as a successor for the original GitHub repo **[Render-dragon-shader-list](https://github.com/DominoKorean/Render-dragon-shader-list)**.

**The documentation is not complete yet! Please don't rely on it's contents**

## Port progress

✅ - Done  
❌ - Incomplete  
✖️ - Not started

| Content | Status |
|-|-|
| Home | ✅ |
| Installation start<br>Android<br>Windows<br>iOS<br>Linux | ✅<br>❌<br>❌<br>❌<br>❌ |
| RD Docs | ✖️ |
| Shaders start<br>RD List<br>Deferred List | ✅<br>❌<br>❌ |

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

Since the page structure is not completely finalized, only the following contributions are welcome:

### 1. Adding shaders
1. Create new file, `shader-name.md` inside:  
   * `shaders/list/deferred` for Deferred RenderDragon shader
   * `shaders/list/rd` for RenderDragon shader

2. Add the following details in that file:
   (Refer existing files to understand better)
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
    `shader-name-0.jpg` should be used as banner image
   * **Type**: jpg (under 250kb)
   * **Number**: At least 3 images, maximum allowed is 8

4. Preview and verify the changes before making a pull request


## Feedbacks

Suggestions are also welcome! 

### 1. Webpage icon
As of now, the webpage icon is a RenderDragon logo with purple background.
If you can make a better icon that represents "RenderDragon Shaders", please reach out to me.

### 2. Layout suggestions
You can suggest on how to improve the layout of displayed contents, like adding certain changes in shader banner cards.

## Note

This webpage/repository has no affiliation with Mojang Studios or Minecraft. **RenderDragon and it's assets are solely owned by Mojang Studios/Minecraft.**