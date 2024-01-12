# 셰이더 빌드하기

ddf8196의 [MaterialBinTool](https://github.com/ddf8196/MaterialBinTool)과 shaderc는 RenderDragon을 위한 커스텀 셰이더를 만드는 데 필요한 주요 유틸리티입니다.
이 페이지에서는 커스텀 셰이더 파일을 설정, 빌드, 테스트하는 방법을 보여줄 것입니다.
시작하기 위한 모든 필요한 스크립트와 코드가 있는 템플릿 저장소를 이용할 것입니다.

::: danger 위험

이것은 커스텀 셰이더를 만드는 비공식적인 방법입니다.
이 가이드에는 오류나 잘못된 정보가 있을 수 있습니다.
오류를 발견하시면 [이곳](https://github.com/devendrn/renderdragon-shaders)에서 issue를 열어 주세요.

:::

## 필수 요소

* Windows: [Git](https://git-scm.com/download/win)
* Linux: [Git](https://git-scm.com/download/linux), [OpenJDK](https://openjdk.org/) version 8 또는 더 높은 버전 (또는 Java)

## 작업공간 설정

1. 다음 비공식 셰이더 템플릿 소스 복제: [RenderDragonSourceInv](https://github.com/SurvivalApparatusCommunication/RenderDragonSourceCodeInv)

::: code-group
```sh [Windows]
git clone https://github.com/SurvivalApparatusCommunication/RenderDragonSourceCodeInv
```
```sh [Linux]
git clone https://github.com/devendrn/RenderDragonSourceCodeInv
```
:::

2. 설정을 실행하세요. 이것은 MaterialBinTool, shaderc, 그리고 셰이더 파일 컴파일에 필요한 material json 파일들을 다운로드할 것입니다.

::: code-group
```cmd [Windows]
.\setup_build_environment.bat
```
```sh [Linux]
./setup.sh
```
:::


## 소스코드에 대해서

셰이더 소스 코드는 GLSL을 기반으로 하는 bgfx의 크로스 플랫폼 셰이더 언어를 사용합니다.
Bgfx 셰이더 파일은 shaderc를 사용하여 컴파일됩니다.
이곳에서 자세한 내용을 알아볼 수 있습니다.

이 저장소의 소스 파일은 다음과 같은 방식으로 구성되어 있습니다:
```
materials
├─ RenderChunk
|  ├─ defines.json   <optional>
│  └─ src
│     ├─ RenderChunk.fragment.sc
.     ├─ RenderChunk.vertex.sc
.     └─ RenderChunk.varying.sc
```

`materials` 디렉토리에는 이미 대부분의 셰이더 파일의 역 소스 코드가 포함되어 있어, 필요할 수 있는 파일들을 찾을 수 있습니다.
사용하지 않는 소스 파일은 삭제할 수 있습니다.
이곳에 없는 머터리얼의 역 소스 코드를 얻고 싶다면 [이곳](https://github.com/Veka0/mcbe-shader-codebase)을 확인하세요.

`defines.json`은 단순히 On과 Off 값만 있는 것이 아닌 플래그에 대한 매크로 정의 규칙을 추가할 수 있는 곳입니다
materials.json 파일에 해당하는 material의 사용 가능한 플래그와 값은 `data` 디렉토리에서 찾을 수 있습니다.

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

## 머터리얼 빌드하기

빌드 스크립트는 다음과 같은 인수를 받습니다:

```
-p   대상 플랫폼. 기본 설정은 모든 플랫폼을 위해 빌드합니다.
-m   빌드할 재료들. 기본 설정은 src 내의 모든 재료를 빌드합니다.
-t   컴파일에 사용할 스레드 수. 기본값은 1입니다.
```

모든 셰이더 머터리얼을 빌드하려면 다음을 실행하세요:
::: code-group
```sh [Windows]
./build.bat
```
```sh [Linux]
./build.sh
```
:::

특정 플랫폼을 위해 특정 머터리얼을 빌드하려면 다음을 실행하세요:
::: code-group
```sh [Windows]
./build.bat -m RenderChunk Sky -p Android
```
```sh [Linux]
./build.sh -m RenderChunk Sky -p Android
```
:::

::: tip 지원되는 플랫폼
Unpacked 머터리얼 데이터는 `Android`, `Windows`, `iOS`가 포함되어 있습니다.
`Switch`와 같은 다른 플랫폼의 경우, `material.bin` 파일을 수동으로 풀어야 합니다.
이 부분은 [이곳](extra#unpack-data)에서 확인하세요.

`Windows`를 위한 컴파일은 `Windows`에서만 가능합니다.
:::

선택적으로 여러 플랫폼의 머터리얼 파일을 단일 머터리얼 파일로 병합하고 싶다면, [이곳](extra#merged-data)을 살펴보세요.

## 머터리얼 설치

설치 방법은 사용하는 플랫폼에 따라 다릅니다.
시간을 절약하기 위해서, 간단한 복사-붙여넣기 스크립트를 사용하여 이 과정을 자동화하는 것이 좋습니다.

* [설치법 확인](../shaders/installation/start)

게임 내에서 수정된 변경 사항을 보려면 월드를 나갔다 들어와야 합니다.
LegacyCubemap을 편집한 경우에는, LegacyCubemap이 시작 메뉴에서도 사용되기 때문에 게임 전체를 다시 로드해야 합니다.

## 셰이더 디버깅

셰이더 디버깅을 위해 PIX, RenderDoc과 같은 무료 그래픽 디버깅 도구를 사용할 수 있습니다.

### 윈도우에서 PIX 사용하기

PIX 다운로드 링크입니다. 나머지는 직접 알아볼 수 있을 것입니다.
[PIX 다운로드](https://devblogs.microsoft.com/pix/download/)


### Linux에서 RenderDoc사용하기

[RenderDoc](https://renderdoc.org/)는 Windows, Linux 또는 Android에서 Vulkan, D3D11, OpenGL 및 OpenGL ES 또는 D3D12를 사용하는 모든 응용 프로그램의 빠른 및 쉬운 단일 프레임 캡처와 자세한 검사를 허용하는 무료 독립형 그래픽 디버거입니다.

#### 단계:
1. File > Launch application
2. `mcpelauncher-ui-qt` 실행 파일의 경로를 추가하세요.
3. 캡처 옵션에서 "Capture Child Processes"를 활성화하세요.
4. 프로그램을 실행하고 게임에 들어가세요.
5. "File > Attach to running instance"를 선택하세요.
6. `mcpelauncher-client` 인스턴스를 선택하세요.

셰이더를 디버그하기 위해서는 프레임을 캡처해야 합니다.
캡처를 시작하려면 `PrtScrn` 또는 `F12` 키를 누르세요.
그런 다음 캡처를 불러와 내용을 검사할 수 있습니다.