import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.translations;
}
