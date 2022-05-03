<!--<template>-->
<!--  <div>-->
<!--    我是一个组件-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { defineComponent, ref } from 'vue';-->

<!--export default defineComponent({-->
<!--  setup() {-->
<!--    const tnm = ref(0);-->
<!--    return {-->
<!--      tnm,-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->
<template>
  <div>
    我是一个组件
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    defalute: 'hhh',
    required: true,
  },
});
const tnum = ref(0);
defineExpose({
  msg: props.msg,
  tnum,
});
</script>

<style lang="scss" scoped>

</style>
