<script setup lang="tsx">
import { onMounted, ref } from 'vue';

// eslint-disable-next-line import/no-unresolved
import Foo from './foo';

const props = defineProps({
  msg: {
    type: String,
    default: 'tse',
  },
});
const count = ref(0);
const abc = <h1>test worc</h1>;
const foo = ref<{ a:number, b:string } | null>(null);
// 指定相关类型
const title = ref<HTMLHeadElement | null>(null);
const emit = defineEmits(['testEmit']);
onMounted(() => {
  console.log(title.value);
  console.log(foo.value);
});
foo.value = {
  a: 1,
  b: '223',
};
</script>

<template>
  <h1>{{ props.msg }}</h1>
  <abc />
  <Foo msg="你好呀" />
  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VS Code</a>
    +
    <a
      href="https://github.cddddom/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>See <code>REAdDME.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_bladddnk"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <button
    type="button"
    @click="emit('testEmit')"
  >
    测试
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
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
