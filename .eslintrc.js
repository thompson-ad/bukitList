const path = require('path');

module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react-hooks',
  ],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  rules: {
    strict: ['error', 'never'],
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: { 'import/resolver': 'node' },
  overrides: [
    {
      files: ['**/src/**'],
      settings: { 'import/resolver': 'webpack' },
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            // it will look and the module directories option
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
    },
  ],
};
