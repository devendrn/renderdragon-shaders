<template>
<div :style="'aspect-ratio:' + aspect">
  <iframe style="border-radius:8px" width="100%" height="100%" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    aspect: {
      type: String,
      required: true
    }
  }
};
</script>
