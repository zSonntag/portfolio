import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.translations;
}
