# Utilities

This page will cover a list of utilities relevant to this documentation.


## MaterialBinTool

[MaterialBinTool](https://github.com/ddf8196/MaterialBinTool) is a tool for packing/unpacking material.bin files.
It also lets you compile material.bin files from source and material.json with the help of shaderc.

## RenderDragonSourceCodeInv

[RenderDragonSourceCodeInv](https://github.com/SurvivalApparatusCommunication/RenderDragonSourceCodeInv) is a template repository containing the base source code required to build custom RenderDragon shaders.

## bgfx-mcbe

[bgfx-mcbe](https://github.com/ddf8196/bgfx-mcbe) is a fork of bgfx, with some changes to support building shaders for RenderDragon.
The shaderc used by MaterialBinTool is compiled from this repository.


## mcbe-shader-codebase

[mcbe-shader-codebase](https://github.com/Veka0/mcbe-shader-codebase) is a repository containing the latest auto-generated vanilla inverse source files.
The generated code is usually accurate, but may sometimes require an edit before it can be actually compiled.


## RenderDragonData

[RenderDragonData](https://github.com/ddf8196/RenderDragonData) is a collection of unpacked material.json files used by MaterialBinTool for the compilation of shader files.


## BetterRenderDragon

[BetterRenderDragon](https://github.com/ddf8196/BetterRenderDragon) is an enhancement mod for the RenderDragon engine of Minecraft Bedrock (Windows).
It lets you enable deferred rendering, disable ray tracing, and load RenderDragon shaders from resource packs.


## MaterialBinLoader

[MaterialBinLoader](https://github.com/ddf8196/MaterialBinLoader) is a mod for Minecraft apk that makes the game load material.bin files from the resource pack.
The patched apk includes this mod.


## mcpelauncher-shadersmod

[mcpelauncher-shadersmod](https://github.com/GameParrot/mcpelauncher-shadersmod) is a mod for mcpelauncher-manifest that allows you to easily load shaders from a new shaders directory instead of having to replace core material.bin files inside assets.
