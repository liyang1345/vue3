module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // 'plugin:vue/essential',
    // 修改以支持vu3的规则
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
