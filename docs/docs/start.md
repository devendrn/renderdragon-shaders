::: warning Warning

This is an unofficial documentation and it may have mistakes. 
If you find one, please report it [here](https://github.com/devendrn/renderdragon-shaders/issues). 

:::

# What is RenderDragon?

RenderDragon is a new cross-platform rendering engine for Minecraft Bedrock, which was initially announced in 2019. It runs on DirectX (Windows builds), OpenGL ES (Android builds), Metal (iOS, iPadOS and macOS builds) and Vulkan (Nintendo Switch builds), featuring several changes under the hood to improve the performance and graphics capabilities of Minecraft [[1]](https://www.minecraft.net/en-us/article/render-dragon-and-nvidia-ray-tracing). 

### Ray tracing

![Minecraft Ray Tracing](https://www.minecraft.net/content/dam/games/minecraft/screenshots/nvidia-rtx-beta-header4.jpg.transform/minecraft-image-medium/image.jpg)

RenderDragon supports Ray tracing with any DXR 1.1 Compatible Graphics cards such as NVIDIA's RTX Series of GPUs or AMD's RX 6000 Series or above. However, The DXR API is not limited to these GPUs as it's been proven that RenderDragon's Ray tracing can be achieved through DXR Emulation. [[2]](https://minecraft.fandom.com/wiki/RenderDragon)

### Deferred Rendering Pipeline

![Minecraft-Deferred](https://www.minecraft.net/content/dam/games/minecraft/key-art/Render_Dragon_Banner_1170x500.png.transform/minecraft-image-medium/image.png)

Deferred Rendering Pipeline is a new feature of RenderDragon that is currently being worked on by Minecraft.
It is expected to bring a major graphics overhaul with dynamic shadows, PBR materials, bloom, tone mapping, and other features to a wide range of platforms. [[3]](https://www.minecraft.net/en-us/creator/article/new-render-dragon-features-creators)

<br>

_ _ _

# Getting started

As of now, Minecraft Bedrock does not officially support custom shaders.
It was removed with the addition of RenderDragon on Bedrock.

The following guide will cover an unofficial way by which you can build custom shaders for RenderDragon. This was possible thanks to [ddf8196](https://github.com/ddf8196), who managed to create some utilities for building custom RenderDragon shaders.

If you, like us, also want Minecraft Bedrock to support custom shaders officially, then go ahead and upvote this [feedback post](https://feedback.minecraft.net/hc/en-us/community/posts/360077420452-3rd-party-shader-support-for-render-dragon). 


### [🡪 How to build shaders](build)
### [🡪 Utilities](utilities)
