<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
</script>

<template>
  <div class="home">
    <el-switch v-model="value1" />
    <el-switch
      v-model="value2"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
  </div>
</template>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
