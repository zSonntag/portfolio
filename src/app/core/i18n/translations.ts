import { Language } from './language';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    role: string;
    heading: string;
    introduction: string;
    experienceAction: string;
    contactAction: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  about: {
    heading: string;
  };
  experience: {
    heading: string;
  };
  skills: {
    heading: string;
  };
  contact: {
    heading: string;
  };
  languageSwitcher: {
    groupLabel: string;
    german: string;
    english: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      role: 'Junior Software Developer',
      heading: "Hi, I'm Conner Klee.",
      introduction:
        'I build modern web applications with Angular and TypeScript and am currently strengthening my backend skills with Java and Spring Boot.',
      experienceAction: 'View Experience',
      contactAction: 'Contact Me',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    about: {
      heading: 'About',
    },
    experience: {
      heading: 'Experience',
    },
    skills: {
      heading: 'Skills',
    },
    contact: {
      heading: 'Contact',
    },
    languageSwitcher: {
      groupLabel: 'Language selection',
      german: 'Switch to German',
      english: 'Switch to English',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      skills: 'Kenntnisse',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Junior Softwareentwickler',
      heading: 'Hallo, ich bin Conner Klee.',
      introduction:
        'Ich entwickle moderne Webanwendungen mit Angular und TypeScript und erweitere aktuell meine Backend-Kenntnisse mit Java und Spring Boot.',
      experienceAction: 'Berufserfahrung ansehen',
      contactAction: 'Kontakt aufnehmen',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    about: {
      heading: 'Über mich',
    },
    experience: {
      heading: 'Erfahrung',
    },
    skills: {
      heading: 'Kenntnisse',
    },
    contact: {
      heading: 'Kontakt',
    },
    languageSwitcher: {
      groupLabel: 'Sprachauswahl',
      german: 'Auf Deutsch wechseln',
      english: 'Auf Englisch wechseln',
    },
  },
};
