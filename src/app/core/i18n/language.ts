export const SUPPORTED_LANGUAGES = ['de', 'en'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'de';

export function isLanguage(value: string | null | undefined): value is Language {
  return value != null && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}
