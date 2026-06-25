import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: ['dist/', '.astro/', 'node_modules/', '.agents/', '.github/', '.husky/'],
  },
  // TypeScript Configuration
  ...tsEslint.configs.recommended,
  // Astro Configuration
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  // Prettier configuration to turn off conflicting rules (placed last)
  eslintConfigPrettier,
  // Project custom rules
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
