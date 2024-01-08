# 리눅스에서 설치하기

이 가이드는 리눅스에서 비공식 마인크래프트 베드락 런처인 [mcpelauncher-manifest](https://github.com/minecraft-linux/mcpelauncher-manifest)를 위한 것입니다. 이 런처에서는 셰이더의 안드로이드 버전을 사용할 수 있습니다.

## 수동 방법

**셰이더 추가하기:**

1. 셰이더의 안드로이드 버전을 다운로드합니다.
2. 셰이더 mcpack에서 material.bin 파일을 추출합니다. 이 파일들은 `/assets/renderer/materials/` 내부에서 찾을 수 있습니다.
3. 이 파일들을 데이터 루트 내의 materials 디렉토리에 복사합니다.

::: warning 백업 필요
다음 디렉토리의 모든 원본 파일을 먼저 백업해야 합니다. 그렇지 않으면 바닐라 그래픽으로 되돌릴 수 없습니다.
:::

```
mcpelauncher/versions/1.20.x/assets/renderer/materials/
```
런처 설정 > 저장소에서 데이터 루트 위치를 찾을 수 있습니다.

4. 일부 셰이더에는 추가 자산이 포함되어 있습니다. 이 경우, 리소스팩을 가져오거나 리소스팩 디렉토리에 추가해야 합니다.

**셰이더 제거하기:**
바닐라 그래픽으로 되돌리고 싶다면, 백업해둔 오래된 파일들을 데이터 루트의 materials 디렉토리에 복사-붙여넣기 하면 됩니다.