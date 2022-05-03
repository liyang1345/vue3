<template>
  <div>首页的文件</div>
  <div>{{ store.state.count }}</div>
</template>

<script setup lang="ts">
// 使用vuex
import { useStore } from '../../store';

const store = useStore();

console.log(store.state.count);

</script>

<style scoped>

</style>
