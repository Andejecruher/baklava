// ── i18n configuration ────────────────────────────────────────

export const LOCALES = ['es', 'en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

/** BCP 47 language tags for <html lang> */
export const LOCALE_LANG: Record<Locale, string> = {
  es: 'es',
  en: 'en',
  fr: 'fr',
};

/** OG locale codes */
export const LOCALE_OG: Record<Locale, string> = {
  es: 'es_MX',
  en: 'en_US',
  fr: 'fr_FR',
};

/** Human-readable label for the selector */
export const LOCALE_LABEL: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

/** Cookie / localStorage key for persisted language */
export const LOCALE_STORAGE_KEY = 'baklava_lang';

/** URL prefix for non-default locales. Default (es) lives at /. */
export const LOCALE_PATH_PREFIX: Record<Locale, string> = {
  es: '',
  en: '/en',
  fr: '/fr',
};
