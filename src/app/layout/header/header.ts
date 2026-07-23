import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { Language } from '../../core/i18n/language';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly languageService = inject(LanguageService);

  readonly language = this.languageService.language;
  readonly t = this.languageService.translations;

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
