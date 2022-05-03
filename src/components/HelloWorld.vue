<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TestComponent from './TestComponent.vue';

const testComponentRef = ref < InstanceType <typeof TestComponent>|null>(null);
onMounted(() => {
  console.log(testComponentRef.value?.tnum);
});
</script>

<template>
  <test-component
    ref="testComponentRef"
    msg="你好"
  />
</template>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
