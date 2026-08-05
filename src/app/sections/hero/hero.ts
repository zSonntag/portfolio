import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { GITHUB_URL, LINKEDIN_URL } from '../../core/links';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.translations;
  readonly githubUrl = GITHUB_URL;
  readonly linkedinUrl = LINKEDIN_URL;
}
