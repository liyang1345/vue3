import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  // 配置全局css公共变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  // 代理配置
  server: {
    // 配置局域网ip地址访问
    host: '0.0.0.0',
    // 配置代理
    proxy: {
      // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (requestPath) => requestPath.replace(/^\/api/, ''),
      // },
      '/ai-admin': {
        target: 'http://ai-admin-dev.jryghq.com',
        changeOrigin: true,
      },
    },
  },
});
