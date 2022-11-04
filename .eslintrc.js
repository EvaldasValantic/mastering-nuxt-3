module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    ignorePatterns: ['.gitignore', '*.d.ts', '.prettierrc'],
    extends: [
      '@nuxtjs/eslint-config-typescript',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:nuxt/recommended',
      'plugin:cypress/recommended',
      'plugin:storybook/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
      camelcase: 'off',
      'no-console': 0,
      'vue/script-setup-uses-vars': 'off',
      'no-prototype-builtins': 'off'
    },
    settings: {
      'import/ignore': ['node_modules', 'node_modules_dev', 'node_modules_prod']
    }
  }
  