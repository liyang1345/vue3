module.exports = {
  env: {
    browser: true,
    es6: true,
    'vue/setup-compiler-macros': true,
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
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': ['error', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  // 针对api模块去掉下划线变量名限制，兼容后端返回数据
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off',
      },
    },
  ],
};
