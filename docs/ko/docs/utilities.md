# 유틸리티

This page will cover a list of utilities relevant to this documentation.


## MaterialBinTool

[MaterialBinTool](https://github.com/ddf8196/MaterialBinTool)은 material.bin 파일을 패킹/언패킹하는 도구입니다.
또한 shaderc의 도움을 받아 소스와 material.json에서 material.bin 파일을 컴파일할 수 있습니다.


## bgfx-mcbe

[bgfx-mcbe](https://github.com/ddf8196/bgfx-mcbe)는 RenderDragon용 셰이더를 빌드하기 위한 몇 가지 변경 사항을 포함한 bgfx의 포크입니다.
MaterialBinTool에서 사용하는 shaderc는 이 레퍼지토리에서 컴파일됩니다.


## mcbe-shader-codebase

[mcbe-shader-codebase](https://github.com/Veka0/mcbe-shader-codebase)는 최신 자동 생성된 바닐라 역 소스 파일을 포함하는 저장소입니다.
생성된 코드는 일반적으로 정확하지만 때로는 실제로 컴파일되기 전에 편집이 필요할 수 있습니다.


## RenderDragonData

[RenderDragonData](https://github.com/ddf8196/RenderDragonData)는 MaterialBinTool을 사용하여 셰이더 파일을 컴파일하기 위해 사용되는 unpacked material.json 파일의 모음입니다.


## BetterRenderDragon

[BetterRenderDragon](https://github.com/ddf8196/BetterRenderDragon)은 Minecraft Bedrock (Windows)의 RenderDragon 엔진을 개선하는 모드입니다.
이 모드를 사용하면 deferred rendering을 활성화하고 ray tracing을 비활성화하며 리소스 팩에서 RenderDragon 셰이더를 로드할 수 있습니다.


## MaterialBinLoader

[MaterialBinLoader](https://github.com/ddf8196/MaterialBinLoader)는 Minecraft apk를 위한 모드로, 게임이 리소스팩에서 material.bin 파일을 로드하도록 만듭니다.
패치된 apk에는 이 모드가 포함되어 있습니다.


## mcpelauncher-shadersmod

[mcpelauncher-shadersmod](https://github.com/GameParrot/mcpelauncher-shadersmod)는 mcpelauncher-manifest의 모드로, 핵심 material.bin 파일을 폴더 내에서 교체하지 않고 새로운 shaders 디렉토리에서 쉽게 셰이더를 로드할 수 있게 해줍니다.