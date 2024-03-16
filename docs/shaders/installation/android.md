# Installation on Android

## Using Patch App

The **Patch App** is a modified Minecraft app that includes **MaterialBinLoader**, which is a patch to make the game load RenderDragon shader files (material.bin) from resource packs. 

<YTEmbed url="https://www.youtube.com/embed/Q-PuE4peMHc?si=zA74SHAEHFmAMQLQ&start=110" aspect="2.32"/>

### Steps 

::: tip Download Patch App
The Patch App is maintained by YSS Group. You can download the APK file from their official website: [yss.minecraft.pe/MinecraftPatched](https://yss.minecraft.pe/en/MinecraftPatched/)
:::

::: info Note
The Patch App uses a different name "Minecraft (Patch)", so you don't have to uninstall your original Minecraft app. You can keep both apps together.
:::

1. First, download and install the Patch App. You can use [64Bit Checker](https://play.google.com/store/apps/details?id=com.danielpolish.a64bitchecker) to know which version is supported on your device.
2. Download the Android version of the shader pack (`.mcpack`).
3. Using a file manager, open the `.mcpack` with Minecraft (Patch). Use [NMM File Manager](https://play.google.com/store/apps/details?id=in.mfile) if your file manager doesn't let you open files with a different app.
4. After the pack has been successfully imported, activate it in global resources.
5. Finally, restart Minecraft.

## Manual method

::: warning Not recommended
For this method, reinstallation of Minecraft will be necessary, so please make sure to backup your Minecraft worlds before proceeding.
:::

<YTEmbed url="https://www.youtube.com/embed/MYlnjqnFBgw?si=ZPu3BMmGxzHDME25" aspect="2.2"/>

### Get Minecraft APK

An un-split Minecraft APK is required to edit. You can skip the following steps if you already have one.
1. First, install [APKtool](https://maximoff.su/apktool/?lang=en).
2. Open APKtool and go to the Application tab. Then, select Minecraft from the Installed Applications list and choose "Antisplit".
3. Enable "Use aapt2" and select "Don't sign" under "Select a signature file".
4. Now wait for the APK extraction process to complete.
5. After completion, the APK file can be found in `APKtool_M` folder inside your internal storage.

### Replace shader files
Once you have the un-split Minecraft APK, proceed with the following steps to add the shader files:

1. Install [MT Manager](https://mt2.cn/download) by clicking on the blue 本地下载 (Local Download) link on the website.
2. Open MT Manager and open the folder containing the un-split Minecraft APK on one side and the downloaded shader pack on the other side.
3. Press the Minecraft APK and click on "View". On the other side open the shader pack.
4. Inside the APK, navigate to `assets/renderer/materials` to find the vanilla material.bin files.
5. Inside the shader pack, long-press the material.bin file, click on "Add ->", and check the "Auto sign" checkbox before clicking OK.
6. If there are multiple material.bin files, repeat the same process for each of them.
7. Go back to the previous menu, select the APK file again, and go to "Function".
8. Choose APK Sign and click OK.
9. Now, you can install the modified APK, and you will see the shaders applied in-game.

If there are additional files like base.mcpack accompanying the shader file, follow these steps:

10. Select the base.mcpack file and click on TYPE at the bottom left. Choose ALL, then select Minecraft to open it.
11. Once the resource pack is loaded, apply the resource pack, and the process will be complete.
