export const THEMES = ['light', 'dark'] as const;

export type Theme = (typeof THEMES)[number];

export function isTheme(value: string | null | undefined): value is Theme {
  return value != null && (THEMES as readonly string[]).includes(value);
}
