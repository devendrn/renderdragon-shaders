# Installation on Windows

## Using BetterRenderDragon

BetterRenderDragon is an enhancement mod for the RenderDragon engine of Minecraft Bedrock that lets you enable deferred rendering, disable ray tracing, and load RenderDragon shaders from resource packs.

<YTEmbed url="https://www.youtube.com/embed/MjlobLd4d7s?si=B6qcMExnUtMzREYe" aspect="1.78"/>

### Steps

1. Download [BetterRenderDragon.zip](https://github.com/ddf8196/BetterRenderDragon/releases/latest) and extract it.
2. Download the shader pack and import it into Minecraft.
3. Open Minecraft using `LaunchMinecraft.bat` inside the BetterRenderDragon folder. You have to launch Minecraft this way every time you want to use shaders.
4. Press `F6` to open BetterRenderDragon window and then enable the MaterialBinLoader option.
5. Activate the shader in Global Resource Packs and restart Minecraft.


## Manual Method

1. First, install [Bedrock Launcher](https://bedrocklauncher.github.io/). Bedrock Launcher allows you to change versions of Minecraft and easily access the game files. 
2. Inside Bedrock Launcher, create a new installation by selecting your desired version and then play it. If you haven't changed the file path, the installation would be at `C:\Users\user\AppData\Roaming\.minecraft_bedrock\versions`.
3. Before proceeding, it's recommended to back up the `com.mojang` folder located at `C:\Users\user\AppData\Local\Packages\Microsoft.MinecraftUWP_(varies for each user)\LocalState\games\com.mojang` to prevent data loss.
4. Now, go to the version folder you installed, then navigate to `data\renderer\materials`.

::: warning Back up vanilla materials!
Make sure to back up files inside `materials\` folder before proceeding to the next step. Otherwise, you won't be able to revert your changes.
:::
4. Replace the `material.bin` shader files with your desired shader files. 
5. Launch Minecraft, and you will see the applied shader.

If you want to remove the shader, just replace the material.bin files with the vanilla material.bin files you backed up before.
