# Building shaders

ddf8196's [MaterialBinTool](https://github.com/ddf8196/MaterialBinTool) along with shaderc are the main utilities that let you create custom shaders for RenderDragon.
This page will show you how to setup, build, and test your custom shader files.
You will be using a template repository with all the necessary scripts and code to get started. 

::: danger Danger

This is an unofficial way to make custom shaders.
There may also be mistakes or incorrect information in this guide.
If you find one, please open an issue [here](https://github.com/devendrn/renderdragon-shaders) or make a PR. 

:::

## Setup workspace

1. Download the unofficial shader template source from this repository:  
   [RenderDragonSourceInv](https://github.com/SurvivalApparatusCommunication/RenderDragonSourceCodeInv)

2. Run `setup_build_environment.bat`.
   This will download MaterialBinTool, shaderc, and material json files necessary for compiling shader files.

## About the source code

The shader source code uses bgfx's cross-platform shader language which is based on GLSL.
Bgfx shader files are compiled using shaderc.
You can learn about it from [here](https://bkaradzic.github.io/bgfx/tools.html#shader-compiler-shaderc).

The source files in this repo are organized in the following manner:
```
materials
├─ RenderChunk
|  ├─ defines.json   <optional>
│  └─ src
│     ├─ RenderChunk.fragment.sc
.     ├─ RenderChunk.vertex.sc
.     └─ RenderChunk.varying.sc
```

The `materials` directory already includes the inverse source code of most shader files that you'd probably need.
You can delete the source files that you don't use.
If you want to get the inverse source code of a material that is not here, you can [check this](https://github.com/Veka0/mcbe-shader-codebase).

`defines.json` is where you can add macro definition rules to flags that have more than just On and Off values.
You can find the available flags and values for material from its corresponding material.json file in the `data` directory.

```json
// defines.json
{
  "flag": {
    "KeyName": {
      "Value1": ["MACRO_DEF_1"],
      "Value2": ["MACRO_DEF_2", "MACRO_DEF_3"],
      "Value3": []
    }
  }
}
```

## Building materials

You can build shader material files using `build.bat`.
The build script accepts the following arguments:

```
-p   Target platforms. The default is to build for all platforms.
-m   Materials to build. The default is to build all materials in src.
-t   Number of threads for compilation. The default is 1.
```

To build all shader materials, run:

```shell
./build.bat
```

To build specific materials only, run:
```shell
./build.bat -m RenderChunk Sky
```

To build files for a specific platform, run:
```shell
./build.bat -m RenderChunk Sky -p Android
```
Supported platforms: `Android Windows iOS`

Optionally if you want to merge multiple platform material files into a single material file, you can take a look at [this](extra#merged-data).

## Installing materials

The installation method depends on your platform.
To save time, you should automate this process using a simple copy-paste script. 

* [See installation guide](../shaders/installation/start)

To see edited changes in the game, you have to leave and rejoin the world.
If you have edited the LegacyCubemap, then you have to reload the entire game, because LegacyCubemap is also being used in the start menu.

## Debugging shader

You can use free graphics debugging tools like Pix, RenderDoc for debugging your shader.

### Using Pix on Windows: 

Here's a link to download PIX, you can figure out the rest yourself.  
[Download PIX](https://devblogs.microsoft.com/pix/download/)


### Using RenderDoc on Linux:

[RenderDoc](https://renderdoc.org/) is a free stand-alone graphics debugger that allows quick and easy single-frame capture and detailed introspection of any application using Vulkan, D3D11, OpenGL & OpenGL ES or D3D12 across Windows, Linux, or Android.

#### Steps:
* File > Launch application
* Add path to your `mcpelauncher-ui-qt` executable
* Enable "Capture Child Processes" in capture options 
* Launch it and enter the game
* File > Attach to running instance
* Select `mcpelauncher-client` instance

In order to debug the shader, you have to capture a frame.
You can press `PrtScrn` or `F12` to start capture.
You can then load the capture to inspect its contents. 