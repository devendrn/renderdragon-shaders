---
editLink: false
---
# Shaders for Deferred Pipeline <Badge type="danger" text="Experimental" />

::: warning Minecraft Preview required
Deferred Technical Preview must be enabled in video settings to use these shaders!
:::

<script setup>
import { data as shaders } from './data/deferred.data.ts'
</script>

<ShaderList :shaders="shaders"/>