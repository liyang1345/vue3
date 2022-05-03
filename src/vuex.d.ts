/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
// vuex返回的实例类型
import { State } from './store';

declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
