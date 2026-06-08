import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/max-len': ['error', { 'code': 150 }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-multi-spaces': ['error'],
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    },
  },
];
