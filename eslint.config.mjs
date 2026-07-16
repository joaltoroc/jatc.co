import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: ['dist/', '.astro/', 'node_modules/', '.agents/', '.github/', '.husky/'],
  },
  // TypeScript Configuration (applies to .ts, .tsx)
  ...tsEslint.configs.recommended,
  
  // Astro Configuration (includes recommended and accessibility rules)
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

  // Project custom rules
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Prettier configuration to turn off conflicting rules (placed last)
  eslintConfigPrettier,
];
