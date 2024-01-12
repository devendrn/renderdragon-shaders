# 기타 리소스

본 페이지에서는 일부 유저들에게 유용할 수 있는 무작위 항목들이 포함될 것입니다.


## material.bin 언팩하기 {#unpack-data}

::: code-group
```sh [Windows]
.\MaterialBinTool.exe --data-only -u "material.bin files to unpack"
```
```sh [Linux]
java -jar ./MaterialBinTool.jar --data-only -u "material.bin files to unpack"
```
:::

`<마인크래프트 데이터 위치>/assets/renderer/materials`에서 material.bin파일을 찾을 수 있습니다.


## 머터리얼 데이터 병합 {#merged-data}

다양한 플랫폼의 머터리얼 데이터를 병합하여 단일 데이터 파일로 만들고, 해당 병합에 포함된 모든 플랫폼에서 작동하는 머터리얼을 컴파일할 수 있습니다.
그러나 최종 material.bin 파일은 상당히 커질것입니다.

MBT를 사용하여 머터리얼 데이터를 병합하려면 다음을 실행하세요:

```sh
# Windows
.\MaterialBinTool.exe --data-only -o "output dir" -m "각 플랫폼의 material.json 파일"

# Linux
java -jar ./MaterialBinTool-all.jar --data-only -o "output dir" -m "각 플랫폼의 material.json 파일"
```

이것은 모든 material.json 파일이 동일한 MC 버전에서 가져온 것인 경우에만 작동합니다.

다음은 여러 파일을 다음 구조로 처리하기 위한 bash 스크립트 예제입니다.
```
Android
└─ RenderChunk
   └─ RenderChunk.json
Windows
└─ RenderChunk
   └─ RenderChunk.json
iOS
└─ RenderChunk
   └─ RenderChunk.json
```
```sh
#!/bin/bash
MBT="java -jar ./MaterialBinTool-0.8.2-all.jar"
MATERIALS="Android/*"
for s in $MATERIALS; do 
  MAT=$(basename ${s})
  echo "Merging $MAT"
  $MBT --data-only -o merged/$MAT/ -m Android/$MAT/$MAT.json Windows/$MAT/$MAT.json iOS/$MAT/$MAT.json 
done
```

이를 사용하려면 `Merged/` 디렉토리를 `data/`로 복사하고 빌드할 때 `-p Merged` 인수를 추가하십시오.
