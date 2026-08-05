import { Injectable, computed, effect, signal } from '@angular/core';

import { Theme, isTheme } from './theme';

const STORAGE_KEY = 'theme';

function resolveSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly manualThemeSignal = signal<Theme | null>(this.resolveStoredTheme());
  private readonly systemThemeSignal = signal<Theme>(resolveSystemTheme());

  readonly theme = computed(() => this.manualThemeSignal() ?? this.systemThemeSignal());

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      this.systemThemeSignal.set(event.matches ? 'dark' : 'light');
    });

    effect(() => {
      const manualTheme = this.manualThemeSignal();

      if (manualTheme) {
        document.documentElement.setAttribute('data-theme', manualTheme);
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    });
  }

  setTheme(theme: Theme): void {
    this.manualThemeSignal.set(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  private resolveStoredTheme(): Theme | null {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  }
}
