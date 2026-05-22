import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  type Locale,
} from './config';
import { translations, type Translations } from './translations/index';

/** Return the translation object for a given locale. */
export function useTranslations(locale: Locale): Translations {
  return translations[locale];
}

/** Validate and narrow a string to Locale. Returns undefined if invalid. */
export function toLocale(value: string | undefined): Locale | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase().split('-')[0] as Locale;
  return (LOCALES as readonly string[]).includes(normalized)
    ? normalized
    : undefined;
}

/**
 * Resolve the active locale from the server request.
 * Priority:
 *   1) Cookie `baklava_lang` (manual selection, persisted)
 *   2) Accept-Language header (browser/system)
 *   3) DEFAULT_LOCALE fallback
 */
export function getLocaleFromRequest(request: Request): Locale {
  // 1) Cookie
  const cookie = getCookieFromRequest(request, LOCALE_STORAGE_KEY);
  const fromCookie = toLocale(cookie);
  if (fromCookie) return fromCookie;

  // 2) Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language') ?? '';
  const fromHeader = parseAcceptLanguage(acceptLanguage);
  if (fromHeader) return fromHeader;

  // 3) Fallback
  return DEFAULT_LOCALE;
}

/** Extract a specific cookie value from the Cookie header. */
function getCookieFromRequest(request: Request, name: string): string | undefined {
  const header = request.headers.get('cookie') ?? '';
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key?.trim() === name) {
      return decodeURIComponent(rest.join('=').trim()) || undefined;
    }
  }
  return undefined;
}

/** Parse the first matching locale from an Accept-Language header. */
function parseAcceptLanguage(header: string): Locale | undefined {
  if (!header) return undefined;

  // Format: "es-MX,es;q=0.9,en;q=0.8"
  const parts = header.split(',').map((p) => p.trim().split(';')[0]?.trim());

  for (const tag of parts) {
    const locale = toLocale(tag);
    if (locale) return locale;
  }
  return undefined;
}

/** Build the URL for a locale's root page. */
export function localeUrl(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
}

/** Build alternate href links for hreflang SEO tags. */
export function buildHreflangAlternates(
  siteUrl: string,
  currentPath: string,
): { locale: Locale; href: string }[] {
  // For a single-page site the path is always / or /en or /fr
  return LOCALES.map((locale) => ({
    locale,
    href: `${siteUrl}${localeUrl(locale)}`,
  }));
}
