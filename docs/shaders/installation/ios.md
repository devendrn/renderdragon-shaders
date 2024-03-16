# Installation on iOS

## Using Filza

::: warning Jailbreak required
Jailbreak is required to access and modify Minecraft game files. If you don't have a jailbroken device, then follow [modified IPA method](#using-modified-ipa).
:::

<YTEmbed url="https://www.youtube.com/embed/WS_xEI4xOJ4?si=rndA8K0Ss8i2Lg9I&amp;start=150" aspect="1.78"/>

1. First, install [Filza](https://filzadownload.com/). 
2. Go to `var\containers\Bundle\Application\Minecraft\minecraftpe.app\data\renderer\materials`.
3. Back up the `materials` folder. If you don't do this you will be unable to remove the shader after.
4. Select material files of the shader pack, and copy them.
5. Go back to the previous location and replace the material.bin files with the copied shader files.

To remove the shader, just copy and paste the old material.bin files you backed up to that location.

## Using Modified IPA

In this method, you have to first extract the Minecraft IPA and replace its material.bin files with the ones inside the shader pack. Then you need to sideload the modified IPA. 

::: info No online multiplayer
Sideloaded Minecraft IPA does not support online multiplayer. There are workarounds to get it working though, but you have to find those out yourself.  
:::

### Extracting IPA

**1. On Windows, you can use iMazing for IPA extraction. Here's how:**
1. First, install [iMazing](https://imazing.com/?gad=1&gclid=Cj0KCQjwoK2mBhDzARIsADGbjeoNt1rkkKWWJVaawEFnsUmV3QjthBa3UjxAL7h_cefyqWyxDuxRis8aAvGIEALw_wcB).
2. Connect your iPhone to the PC via USB.
3. Once iMazing is installed, click "Continue with the Free Trial" and go to App Management.
4. Right-click on Minecraft and click "Install .IPA".
5. After extracting the IPA, open the file using a program like Bandizip (or any program that can handle compressed files).
6. Navigate to `Payload\minecraft.app\data\renderer\materials`.
7. Replace the existing material.bin shader file with the downloaded material.bin shader file.
8. Finally, sideload Minecraft back onto your device.

**2. On iOS:**
1. Install ES File Explorer from AppStore.
2. Find and download Minecraft IPA online.
3. Use ES File Explorer to change `.ipa` extension to `.zip` extension.
4. Extract the `.zip` file.
5. Download the iOS material.bin files of the shader you wish to install.
6. Copy paste the material.bin files to location `/Payload/minecraft.app/data/renderer/materials` inside the extracted folder.
7. Zip the Payload folder.
8. Rename `Payload.zip` to `Payload.ipa`.
9. Now sideload this modified IPA onto your device.

### Sideloading IPA

**1. Using sideloading tools on PC**  

Users with access to an external PC can use sideloading tools like:
* [AltStore](https://altstore.io)
* [Sideloadly](https://sideloadly.io)

Please refer to the respective instructions provided by each sideloading tool for the installation process.

**2. Using Scarlet on iOS**  

::: danger Not verified
The following method is unverified and may have issues. We suggest you to follow it at your own risk.
:::

1. Go to https://usescarlet.com/
2. Scroll down and then click Install. Make sure to click Direct install!
3. After installing it, go to `Settings General Device and Management`. You’ll find the certificate there. Click on it and then click `Trust certificate`.
4. After trusting the certificate, go to the app, go to the second option on the bottom, and then click the share button on the top right. Find the IPA that you’ve just installed and click it. 
5. It should begin downloading shortly.
6. After it installs you can successfully open Minecraft.

> On iOS 16 or higher you will need to figure out how to trust a profile in a different way.
