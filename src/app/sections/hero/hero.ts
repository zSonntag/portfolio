import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';

const LINKEDIN_URL = 'https://www.linkedin.com/in/conner-klee';
const GITHUB_URL = 'https://www.github.com/zSonntag';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.translations;
  readonly linkedinUrl = LINKEDIN_URL;
  readonly githubUrl = GITHUB_URL;
}
