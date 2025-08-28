// eslint.config.js — CommonJS, рабочий flat config + поддержка jest

const pluginJs = require('@eslint/js')
const eslintConfigPrettier = require('eslint-config-prettier')
const pluginImport = require('eslint-plugin-import')
const pluginN = require('eslint-plugin-n')
const prettierPlugin = require('eslint-plugin-prettier')
const eslintReact = require('eslint-plugin-react')
const pluginReact = require('eslint-plugin-react')
const globals = require('globals')
// const pluginJsxA11y = require('eslint-plugin-jsx-a11y');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'coverage', 'eslint.config.js', '**/dist/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    rules: {
      'n/no-process-env': 'error',
    },
  },
  {
    plugins: {
      react: eslintReact,
      // 'react-hooks': eslintReactHooks,
      // 'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      import: pluginImport,
      n: pluginN,
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': ['error', { allow: ['info', 'error', 'warn'] }],
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'no-new': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
            orderImportKind: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
      'jsx-a11y/anchor-is-valid': 'off',
      curly: ['error', 'all'],
      'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: '[object.type=MetaProperty][property.name=env]',
          message: 'Use instead import { env } from "lib/env"',
        },
      ],
    },
  },
  // Явное применение jest-правил только к тестовым файлам
  {
    files: ['**/*.unit.test.ts', '**/*.unit.test.js', '**/*.test.ts', '**/*.test.js'],
    rules: {
      'jest/no-focused-tests': 'error',
    },
  },
  // Игнорировать все *.config.js файлы во всех подпапках
  {
    ignores: ['**/*.config.js'],
  },
]
