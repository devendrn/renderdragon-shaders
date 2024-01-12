::: warning 주의

본 가이드에는 오류나 잘못된 정보가 있을 수 있습니다.
오류를 발견하셨다면 [이곳](https://github.com/devendrn/renderdragon-shaders)에서  issue를 열거나 PR을 만들어 주세요.

:::

# 렌더드래곤이 뭔가요??

RenderDragon은 마인크래프트 베드락을 위한 새로운 크로스 플랫폼 렌더링 엔진으로, 2019년에 처음 발표되었습니다.
이는 마인크래프트의 성능과 그래픽 능력을 향상시키기 위해 여러 가지 내부 변경을 포함하고 있습니다 [[1]](https://www.minecraft.net/en-us/article/render-dragon-and-nvidia-ray-tracing). 주요 특징 중 하나는 호환 가능한 RTX 그래픽 카드에서 실시간 레이 트레이싱 그래픽을 지원한다는 것입니다.

RenderDragon은 매 업데이트마다 지속적으로 개선되고 있으며, 새로운 개선 사항과 기능을 추가하고 있습니다.
[디퍼드 렌더링 파이프라인](deferred)은 마인크래프트가 현재 작업 중인 RenderDragon의 새로운 기능입니다.
이는 동적 그림자, PBR 소재, 블룸, 톤 매핑 및 기타 기능을 다양한 플랫폼에 제공하는 주요 그래픽 개선을 가져올 것으로 기대됩니다. [[2]](https://www.minecraft.net/en-us/creator/article/new-render-dragon-features-creators)"


<br>

_ _ _

# 시작하기

현재 마인크래프트 베드락은 공식적으로 커스텀 셰이더를 지원하지 않습니다.
베드락에 RenderDragon이 추가되면서 제거되었습니다.

다음 가이드는 RenderDragon을 위한 커스텀 셰이더를 빌드하는 비공식적인 방법을 다룰 것입니다. 이는 ddf8196이 커스텀 RenderDragon 셰이더 빌딩을 위한 몇 가지 유틸리티를 만든 덕분에 가능했습니다.

당신도 우리처럼 마인크래프트 베드락이 공식적으로 커스텀 셰이더를 지원하기를 원한다면, 이 피드백 게시물에 투표해 주세요.

### [🡪 셰이더 빌드하는 법](build)
### [🡪 유틸리티](utilities)
