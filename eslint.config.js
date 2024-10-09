import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {
    ignores: [".nuxt/*", "node_modules/*"]
  },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'below',
      }],
      'no-undef': 'off'
    }
  }
];