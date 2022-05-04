<template>
  <div>登录</div>
</template>

<script setup lang="ts">
import { getotherUserInfo } from '@/api/common';
import { onMounted } from 'vue';

onMounted(() => {
  const data = {
    width: 70,
    height: 50,
    origin: 'company',
  };
  getotherUserInfo({ data })
    .then((res) => {
      console.log(res.data.data);
    });
});
</script>

<style scoped>

</style>
