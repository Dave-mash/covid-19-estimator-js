module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "indent": [2, "tab"],
    "no-tabs": 0,
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["error", { "props": false }]
  },
};