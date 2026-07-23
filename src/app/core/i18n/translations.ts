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
