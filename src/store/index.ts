// as是起别名
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

export interface State{
  count:number;
  foo:string;
}
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store');

// 创建一个新的 store 实例
export const store = createStore<State>({
  state: {
    count: 0,
    foo: 'foo',
  },
  mutations: {
    increment(state) {
      console.log(state);
    },
  },
});
export function useStore() {
  return baseUseStore(key);
}
