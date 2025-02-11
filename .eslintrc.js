module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/valid-attribute-name': 'off', // Désactive cette règle s’il persiste un problème
    'vue/multi-word-component-names': 'off'
  }
};
