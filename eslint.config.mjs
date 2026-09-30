import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      '.agents/',
      '.github/',
      '.husky/',
      'coverage/',
      'public/sw.js',
    ],
  },
  // Recommended TypeScript rules
  ...tsEslint.configs.recommended,

  // Recommended Astro & Accessibility rules
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],

  // Parser configuration for Astro files with TypeScript frontmatter
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // Project custom rules for TypeScript & Astro
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
    },
  },

  // Prettier config to disable conflicting formatting rules (must be last)
  eslintConfigPrettier,
];
