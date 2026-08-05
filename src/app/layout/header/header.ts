import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { Language } from '../../core/i18n/language';
import { ThemeService } from '../../core/theme/theme.service';
import { Theme } from '../../core/theme/theme';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  readonly language = this.languageService.language;
  readonly t = this.languageService.translations;
  readonly theme = this.themeService.theme;

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(nextTheme);
  }
}
