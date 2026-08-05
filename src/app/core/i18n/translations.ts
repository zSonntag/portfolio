import { Language } from './language';

export interface Translations {
  seo: {
    title: string;
    description: string;
    locale: string;
  };
  accessibility: {
    skipToContent: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  header: {
    navLabel: string;
  };
  hero: {
    role: string;
    headingIntro: string;
    headingName: string;
    introduction: string;
    experienceAction: string;
    contactAction: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  about: {
    heading: string;
    introduction: string;
    experience: string;
    interests: string;
    credentialsLabel: string;
    diploma: string;
    baccalaureate: string;
  };
  experience: {
    heading: string;
    role: string;
    company: string;
    period: string;
    points: string[];
  };
  skills: {
    heading: string;
    practicalHeading: string;
    practicalDescription: string;
    practicalItems: string[];
    infrastructureHeading: string;
    infrastructureDescription: string;
    infrastructureItems: string[];
    learningHeading: string;
    learningDescription: string;
    learningItems: string[];
  };
  contact: {
    heading: string;
    message: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    backToTop: string;
  };
  languageSwitcher: {
    groupLabel: string;
    german: string;
    english: string;
  };
  themeSwitcher: {
    switchToLight: string;
    switchToDark: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    seo: {
      title: 'Conner Klee | Junior Software Developer',
      description:
        'Portfolio of Conner Klee, a junior software developer from Switzerland with practical experience in Angular, TypeScript, Node.js and REST APIs.',
      locale: 'en_US',
    },
    accessibility: {
      skipToContent: 'Skip to main content',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    header: {
      navLabel: 'Main navigation',
    },
    hero: {
      role: 'Junior Software Developer',
      headingIntro: "Hi, I'm",
      headingName: 'Conner Klee.',
      introduction:
        'I build modern web applications with Angular and TypeScript and am currently strengthening my backend skills with Java and Spring Boot.',
      experienceAction: 'View Experience',
      contactAction: 'Contact Me',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    about: {
      heading: 'About',
      introduction:
        'I am a trained application developer from Switzerland. After completing my Swiss Federal VET Diploma in Application Development, I also completed the Federal Vocational Baccalaureate with a technical focus.',
      experience:
        "My practical experience covers both frontend and backend web development, mainly with Angular, TypeScript, JavaScript, Node.js, REST APIs, Firebase and Git. I'm currently deepening my backend skills with Java and Spring Boot.",
      interests:
        "I'm particularly interested in backend development, full-stack systems, software for the financial sector and growing long-term into cybersecurity.",
      credentialsLabel: 'Qualifications',
      diploma: 'Swiss Federal VET Diploma – Application Development',
      baccalaureate: 'Federal Vocational Baccalaureate – Technical Focus',
    },
    experience: {
      heading: 'Experience',
      role: 'Application Development Internship',
      company: 'BMT Consulting AG / Woonig',
      period: 'August 2023 – July 2025',
      points: [
        'Frontend and backend development on existing business applications, mainly with Angular, TypeScript and Node.js.',
        'Developed and integrated REST APIs, including connections to databases.',
        'Wrote automated tests and technical documentation to support long-term maintainability.',
        'Worked within existing application structures and adapted them to new requirements.',
        'Translated business requirements into concrete technical implementations.',
        'Collaborated in an agile, Git-based development process and supported deployments.',
      ],
    },
    skills: {
      heading: 'Skills',
      practicalHeading: 'Practical Experience',
      practicalDescription: "Technologies I've used in real projects.",
      practicalItems: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'REST APIs',
        'Firebase',
        'NoSQL Databases',
        'Git',
        'GitHub',
        'Testing',
        'Agile / Scrum',
      ],
      infrastructureHeading: 'Infrastructure & Deployment',
      infrastructureDescription:
        'Technologies and platforms I use to host and operate my own applications.',
      infrastructureItems: ['Linux', 'Docker', 'VPS Hosting'],
      learningHeading: 'Currently Developing',
      learningDescription: "Technologies I'm actively building hands-on experience with.",
      learningItems: [
        'Java',
        'Spring Boot',
        'SQL',
        'PostgreSQL',
        'CI/CD',
        'Kubernetes Fundamentals',
      ],
    },
    contact: {
      heading: 'Contact',
      message:
        "I'm currently looking for an entry-level opportunity in software development, preferably in a backend or full-stack environment. Regionally, I'm open to positions in Thurgau, St. Gallen, Winterthur and Zurich.",
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      backToTop: 'Back to top',
    },
    languageSwitcher: {
      groupLabel: 'Language selection',
      german: 'Switch to German',
      english: 'Switch to English',
    },
    themeSwitcher: {
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
    },
  },
  de: {
    seo: {
      title: 'Conner Klee | Junior Softwareentwickler',
      description:
        'Portfolio von Conner Klee, Junior Softwareentwickler aus der Schweiz mit praktischer Erfahrung in Angular, TypeScript, Node.js und REST APIs.',
      locale: 'de_CH',
    },
    accessibility: {
      skipToContent: 'Zum Hauptinhalt springen',
    },
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      skills: 'Kenntnisse',
      contact: 'Kontakt',
    },
    header: {
      navLabel: 'Hauptnavigation',
    },
    hero: {
      role: 'Junior Softwareentwickler',
      headingIntro: 'Hallo, ich bin',
      headingName: 'Conner Klee.',
      introduction:
        'Ich entwickle moderne Webanwendungen mit Angular und TypeScript und erweitere aktuell meine Backend-Kenntnisse mit Java und Spring Boot.',
      experienceAction: 'Berufserfahrung ansehen',
      contactAction: 'Kontakt aufnehmen',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    about: {
      heading: 'Über mich',
      introduction:
        'Ich bin ausgebildeter Applikationsentwickler aus der Schweiz. Nach meinem Abschluss als Informatiker EFZ mit Fachrichtung Applikationsentwicklung habe ich zusätzlich die technische Berufsmaturität abgeschlossen.',
      experience:
        'Meine praktische Erfahrung umfasst Frontend- und Backend-Webentwicklung, vor allem mit Angular, TypeScript, JavaScript, Node.js, REST APIs, Firebase und Git. Aktuell erweitere ich meine Backend-Kenntnisse mit Java und Spring Boot.',
      interests:
        'Besonders interessieren mich Backend-Entwicklung, Full-Stack-Systeme, Software im Finanzumfeld sowie eine langfristige Entwicklung in Richtung Cybersecurity.',
      credentialsLabel: 'Qualifikationen',
      diploma: 'Informatiker EFZ – Applikationsentwicklung',
      baccalaureate: 'Berufsmaturität – technische Ausrichtung',
    },
    experience: {
      heading: 'Erfahrung',
      role: 'Praktikum Applikationsentwicklung',
      company: 'BMT Consulting AG / Woonig',
      period: 'August 2023 – Juli 2025',
      points: [
        'Frontend- und Backend-Entwicklung an bestehenden Business-Anwendungen, hauptsächlich mit Angular, TypeScript und Node.js.',
        'Entwicklung und Integration von REST APIs sowie Anbindung an Datenbanken.',
        'Erstellung automatisierter Tests und technischer Dokumentation zur langfristigen Wartbarkeit.',
        'Arbeiten innerhalb bestehender Applikationsstrukturen und deren Anpassung an neue Anforderungen.',
        'Übersetzen fachlicher Anforderungen in konkrete technische Umsetzungen.',
        'Zusammenarbeit in einem agilen, Git-basierten Entwicklungsprozess sowie Unterstützung bei Deployments.',
      ],
    },
    skills: {
      heading: 'Kenntnisse',
      practicalHeading: 'Praktische Erfahrung',
      practicalDescription: 'Technologien, die ich bereits in echten Projekten eingesetzt habe.',
      practicalItems: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'REST APIs',
        'Firebase',
        'NoSQL-Datenbanken',
        'Git',
        'GitHub',
        'Testing',
        'Agile Arbeitsweisen / Scrum',
      ],
      infrastructureHeading: 'Infrastruktur & Deployment',
      infrastructureDescription:
        'Technologien und Plattformen, die ich für das selbstständige Hosting und den Betrieb eigener Anwendungen einsetze.',
      infrastructureItems: ['Linux', 'Docker', 'VPS-Hosting'],
      learningHeading: 'Derzeit in Vertiefung',
      learningDescription: 'Technologien, in denen ich aktuell praktische Erfahrung aufbaue.',
      learningItems: ['Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'CI/CD', 'Kubernetes-Grundlagen'],
    },
    contact: {
      heading: 'Kontakt',
      message:
        'Ich suche aktuell eine Einstiegsmöglichkeit in der Softwareentwicklung, bevorzugt im Backend- oder Full-Stack-Umfeld. Regional bin ich für Stellen im Thurgau, in St. Gallen, Winterthur und Zürich offen.',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      backToTop: 'Nach oben',
    },
    languageSwitcher: {
      groupLabel: 'Sprachauswahl',
      german: 'Auf Deutsch wechseln',
      english: 'Auf Englisch wechseln',
    },
    themeSwitcher: {
      switchToLight: 'Zum hellen Design wechseln',
      switchToDark: 'Zum dunklen Design wechseln',
    },
  },
};
