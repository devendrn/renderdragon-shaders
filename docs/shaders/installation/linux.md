# Installation on Linux

This guide is for the unofficial Minecraft Bedrock Launcher on Linux, [mcpelauncher-manifest](https://github.com/minecraft-linux/mcpelauncher-manifest). You can use Android versions of the shader in this launcher.

## Manual method

**Adding shader:**  

1. Download the Android version of the shader
2. Extract material.bin files from shader mcpack. You can find them inside `/assets/renderer/materials/`
3. Copy these files to the materials directory inside the data root:

::: warning Backup required!
Make sure to backup all original files in the following directory first. Otherwise, you will not be able to revert back to vanilla graphics.
:::

```
mcpelauncher/versions/1.20.x/assets/renderer/materials/
```
You can find your data root location from Launcher Settings > Storage.

4. Some shaders include extra assets. In that case, you also have to import the resource pack or add it to your resource pack directory.

**Removing shader:**  
If you want to revert back to vanilla graphics, just copy-paste the old files you backed up, to the materials directory of your data root.
