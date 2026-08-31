import { describe, it, expect } from 'vitest';
import { ui, languages, defaultLang } from '../src/i18n/ui';

describe('i18n Dictionary Integrity', () => {
  it('should define languages correctly', () => {
    expect(languages).toHaveProperty('es', 'Español');
    expect(languages).toHaveProperty('en', 'English');
    expect(defaultLang).toBe('es');
  });

  it('should have key parity between Spanish and English dictionaries', () => {
    const esKeys = Object.keys(ui.es)
      .filter((k) => !k.startsWith('test.'))
      .sort();
    const enKeys = Object.keys(ui.en)
      .filter((k) => !k.startsWith('test.'))
      .sort();

    // Check that all Spanish keys exist in English
    const missingInEn = esKeys.filter((key) => !(key in ui.en));
    expect(
      missingInEn,
      `Keys present in 'es' but missing in 'en': ${missingInEn.join(', ')}`
    ).toEqual([]);

    // Check that all English keys exist in Spanish
    const missingInEs = enKeys.filter((key) => !(key in ui.es));
    expect(
      missingInEs,
      `Keys present in 'en' but missing in 'es': ${missingInEs.join(', ')}`
    ).toEqual([]);
  });

  it('should not contain empty translation values', () => {
    Object.entries(ui.es).forEach(([key, val]) => {
      expect(
        val.trim().length,
        `Empty string translation for key '${key}' in 'es'`
      ).toBeGreaterThan(0);
    });

    Object.entries(ui.en).forEach(([key, val]) => {
      expect(
        val.trim().length,
        `Empty string translation for key '${key}' in 'en'`
      ).toBeGreaterThan(0);
    });
  });
});
