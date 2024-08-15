
<template>
  <div class="shader-card" >
    <v-lazy-image :src="banner"/>
    <div class="container">
      <h4>{{ name }}</h4>
      <div class="tags">
        <span v-for="tag in tags">{{ tag }}</span>
      </div>
    </div>
    <a :href="href" class="href-fill"></a>
  </div>
</template>

<script setup>
  import VLazyImage from "v-lazy-image";
</script>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        banner: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
        href: {
            type: String,
            required: true,
        },
    }
};
</script>

<style>
.shader-card {
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  border: 1.5px solid var(--vp-c-gray-3);
  transition: 0.3s;
  overflow: hidden;
  margin-top: 24px;
  position: relative;
}

.shader-card img {
  height: 130px;
  width: 100%;
  object-fit: cover;
}

.shader-card:hover {
  border-color: var(--vp-c-brand-1);
}

.shader-card a.href-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shader-card .container {
  padding: 15px;
} 

.shader-card h4 {
  font-size: 26px;
  margin-bottom: 12px;
}

.shader-card .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.shader-card .tags span {
  font-size: 12px;
  padding: 1px 10px;
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-tip-bg);
  border-radius: 20px;
}

.v-lazy-image {
  background-image: linear-gradient(45deg, #00f0,#00ff,#00f0);
  animation-name: shimmer;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.v-lazy-image-loaded {
  animation-name: unset;
}

@keyframes shimmer {
  from { opacity: 1.0; }
  to { opacity: 0.5; }
}

</style>
