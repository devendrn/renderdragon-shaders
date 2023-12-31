<template>
  <div class="shader-card" >
    <img loading="lazy" :src="image" :alt="name" style="width:100%">
    <div class="container">
      <h4>{{ name }}</h4>
      <div class="tags">
        <span v-for="tag in tags">{{ tag }}</span>
      </div>
    </div>
    <a :href="href" class="href-fill"></a>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
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
    },
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
  height: 100px;
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
  margin-bottom: 16px;
}

.shader-card .tags {
  display: flex;
  flex-wrap: wrap;
  gap:10px;
}

.shader-card .tags span {
  font-size: 12px;
  padding: 2px 10px;
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-tip-bg);
  border-radius: 20px;
}

</style>