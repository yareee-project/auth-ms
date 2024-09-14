const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginPromise = require('eslint-plugin-promise');
const eslintPluginSecurity = require('eslint-plugin-security');
const path = require('path');

/** @type {import('eslint').FlatConfigArray} */
const config = [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020, // Supports modern JavaScript features
        sourceType: 'module',
      },
    },
    plugins: {
      import: eslintPluginImport,
      promise: eslintPluginPromise,
      security: eslintPluginSecurity,
    },
    rules: {
      semi: 'error',
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'none', ignoreRestSiblings: false },
      ],
      'no-console': 'warn', // Discourage console.log statements
      curly: 'error', // Enforce consistent brace style for blocks
      eqeqeq: 'error', // Require === and !==
      'import/no-unresolved': 'error', // Ensure imports point to a valid file/module
      'promise/always-return': 'warn', // Ensure promises return a value
      'promise/no-return-wrap': 'error', // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
      'security/detect-object-injection': 'warn', // Detect potentially unsafe object injections
    },
  },
  {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'], // Add file extensions here
          paths: [path.resolve(__dirname, 'src')], // Adjust based on your project structure
        },
      },
    },
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json', // Make sure you have a tsconfig.json file
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: eslintPluginImport,
      promise: eslintPluginPromise,
      security: eslintPluginSecurity,
    },
    rules: {
      semi: 'warn',
      'prefer-const': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'none', ignoreRestSiblings: false },
      ],
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      curly: 'error',
      eqeqeq: 'error',
      'import/no-unresolved': 'error',
      'promise/always-return': 'warn',
      'promise/no-return-wrap': 'error',
      'security/detect-object-injection': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true },
      ], // Encourage explicit return types
      '@typescript-eslint/no-floating-promises': 'error', // Ensure promises are handled appropriately
      '@typescript-eslint/consistent-type-imports': 'warn', // Enforce consistent usage of type imports
    },
  },
];

module.exports = config;
