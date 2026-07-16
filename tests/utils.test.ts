import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations } from '../src/i18n/utils';

describe('i18n utils', () => {
  describe('getLangFromUrl', () => {
    it('should return default language "es" for root URL', () => {
      const url = new URL('https://jatc.co/');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should return "en" for English URL paths', () => {
      const url = new URL('https://jatc.co/en/about');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('should return default language "es" for invalid language paths', () => {
      const url = new URL('https://jatc.co/fr/contact');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should return default language "es" for standard paths without language prefix', () => {
      const url = new URL('https://jatc.co/about');
      expect(getLangFromUrl(url)).toBe('es');
    });
  });

  describe('useTranslations', () => {
    it('should translate correctly in Spanish', () => {
      const t = useTranslations('es');
      expect(t('nav.about')).toBe('Sobre mí');
      expect(t('contact.title')).toBe('Contacto');
    });

    it('should translate correctly in English', () => {
      const t = useTranslations('en');
      expect(t('nav.about')).toBe('About');
      expect(t('contact.title')).toBe('Contact');
    });

    it('should fallback to default language translation if key is missing in selected language', () => {
      const t = useTranslations('en');
      // @ts-expect-error: test.fallbackOnlyEs is defined in 'es' but not in 'en'
      expect(t('test.fallbackOnlyEs')).toBe('Solo Español');
    });
  });
});
