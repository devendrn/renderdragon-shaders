<template>
  <ShaderCard
  v-for="shader in shaders"
  :name="shader.name"
  :banner="shader.banner"
  :href = "shader.href"
  :tags="shader.tags"
  />
</template>

<script>
export default {
    props: {
        shaders: {
            type: Array,
            required: true,
        }
    }
};
</script>

<style>
</style>