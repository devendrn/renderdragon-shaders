# Installation on Linux

This guide is for the unofficial Minecraft Bedrock Launcher on Linux, [mcpelauncher-manifest](https://github.com/minecraft-linux/mcpelauncher-manifest). You can use Android versions of the shader in this launcher.

## Using MaterialBinLoaderMod (x86_64 only)

1. Create a `mods` directory in the directory of your mcpelauncher profile (e.g. `~/.local/share/mcpelauncher`) if you have not already done so. 
2. Download the [libmaterialbinloader.so](https://github.com/CrackedMatter/mcpelauncher-materialbinloader/releases/latest/) file and move it into the mods directory.
3. Download the shader pack and import it into Minecraft.
4. Activate the shader in Global Resource Packs and restart Minecraft.

## Using ShadersMod

1. Create a `mods` directory in the directory of your mcpelauncher profile (e.g. `~/.local/share/mcpelauncher`) if you have not already done so. 
2. Download [shadersmod](https://github.com/GameParrot/mcpelauncher-shadersmod/releases/latest/) for the platform you use. Extract it and move the `.so` file to `mods` directory.

**Adding shader:**  
1. Create a `shaders` directory in the directory of your mcpelauncher profile (e.g. `~/.local/share/mcpelauncher`). 
2. Extract `material.bin` files from shader mcpack. You can find them inside `/renderer/materials/`
3. Copy the `material.bin` files to the `shaders` directory.
4. Some shaders include extra assets. In that case, you also have to import the resource pack or add it to your resource pack directory.

**Removing shader:**  
- Rename the `shaders` directory to something else.
- Or remove `material.bin` files from `shaders` directory.

## Manual method

**Adding shader:**  

1. Download the Android version of the shader
2. Extract material.bin files from shader mcpack. You can find them inside `/renderer/materials/`
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
