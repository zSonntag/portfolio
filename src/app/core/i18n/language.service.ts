import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { DEFAULT_LANGUAGE, Language, isLanguage } from './language';
import { TRANSLATIONS } from './translations';

const STORAGE_KEY = 'language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  private readonly languageSignal = signal<Language>(DEFAULT_LANGUAGE);

  readonly language = this.languageSignal.asReadonly();
  readonly translations = computed(() => TRANSLATIONS[this.languageSignal()]);

  constructor() {
    this.languageSignal.set(this.resolveInitialLanguage());

    effect(() => {
      document.documentElement.lang = this.languageSignal();
    });
  }

  setLanguage(language: Language): void {
    if (language === this.languageSignal()) {
      return;
    }

    this.languageSignal.set(language);
    localStorage.setItem(STORAGE_KEY, language);

    this.router.navigate([], {
      queryParams: { lang: language },
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true,
    }).catch((error) => {
      console.error('Failed to update URL with new language:', error);
      });
  }

  private resolveInitialLanguage(): Language {
    const queryLang = new URLSearchParams(window.location.search).get('lang');
    if (isLanguage(queryLang)) {
      return queryLang;
    }

    const storedLang = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(storedLang)) {
      return storedLang;
    }

    return navigator.language.startsWith('de') ? 'de' : 'en';
  }
}
