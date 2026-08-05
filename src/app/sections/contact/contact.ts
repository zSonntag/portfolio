import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { GITHUB_URL, LINKEDIN_URL } from '../../core/links';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.translations;
  readonly githubUrl = GITHUB_URL;
  readonly linkedinUrl = LINKEDIN_URL;
}
