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
      title: 'Conner Klee | Junior Software Engineer',
      description:
        'Portfolio of Conner Klee, a Swiss-trained application developer with experience in Angular, TypeScript, Node.js, REST APIs and business web applications.',
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
      role: 'Junior Software Engineer · Fullstack & Backend',
      headingIntro: "Hi, I'm",
      headingName: 'Conner Klee.',
      introduction:
        'I have two years of practical experience developing business web applications across frontend and backend, mainly with Angular, TypeScript, Node.js and REST APIs.',
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
        "During my two-year placement at Woonig AG, employed through BMT, I helped develop a production business web application. I worked with Angular, TypeScript, Node.js, REST APIs and databases, and gained experience maintaining GitHub Actions workflows, deployments and technical troubleshooting.",
      interests:
        "I want to keep growing in full-stack and backend development. Business applications, APIs and integrations especially interest me, including software in the financial sector. I also plan to study computer science part-time at Lucerne University of Applied Sciences and Arts.",
      credentialsLabel: 'Qualifications',
      diploma: 'Swiss Federal VET Diploma – Application Development',
      baccalaureate: 'Federal Vocational Baccalaureate – Technical Focus',
    },
    experience: {
      heading: 'Experience',
      role: 'Application Developer Intern',
      company: 'BMT Business meets Technology Consulting AG (placement at Woonig AG)',
      period: 'August 2023 – July 2025',
      points: [
        'Developed and enhanced a production business web application across frontend and backend.',
        'Implemented features based on internal requirements and customer feedback.',
        'Worked with Angular, TypeScript, Node.js, REST APIs and databases.',
        'Maintained a GitHub repository, including GitHub Actions workflows and updates.',
        'Used Docker Compose and contributed to deployments and technical troubleshooting.',
        'Collaborated with the development team using Scrum.',
      ],
    },
    skills: {
      heading: 'Skills',
      practicalHeading: 'Professional Experience',
      practicalDescription: "Technologies and practices I used during my work at BMT/Woonig.",
      practicalItems: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5 / CSS3',
        'Node.js',
        'REST APIs',
        'Firebase',
        'Databases',
        'Git',
        'GitHub Actions',
        'Agile / Scrum',
      ],
      infrastructureHeading: 'Infrastructure & Deployment',
      infrastructureDescription:
        'Tools I use for development environments, deployments and hosting personal applications.',
      infrastructureItems: ['Linux', 'Docker', 'Docker Compose', 'VPS Hosting'],
      learningHeading: 'Training & Fundamentals',
      learningDescription: "Technologies I encountered in training or have explored independently.",
      learningItems: [
        'Java',
        'Spring Boot',
        'React',
        'SQL',
        'PostgreSQL',
        'MySQL',
      ],
    },
    contact: {
      heading: 'Contact',
      message:
        "I am looking for a junior software engineering role, preferably in full-stack or backend development. I am interested in business applications and integrations, including financial software. I am open to opportunities in Thurgau, St. Gallen, Winterthur and Zurich.",
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
      title: 'Conner Klee | Junior Software Engineer',
      description:
        'Portfolio von Conner Klee, Informatiker EFZ Applikationsentwicklung mit Erfahrung in Angular, TypeScript, Node.js, REST-APIs und Business-Webanwendungen.',
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
      role: 'Junior Software Engineer · Fullstack & Backend',
      headingIntro: 'Hallo, ich bin',
      headingName: 'Conner Klee.',
      introduction:
        'Ich habe zwei Jahre praktische Erfahrung in der Entwicklung von Business-Webanwendungen im Frontend und Backend, vor allem mit Angular, TypeScript, Node.js und REST-Schnittstellen.',
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
        'Während meines zweijährigen Praxiseinsatzes bei der Woonig AG (angestellt bei BMT) habe ich an einer produktiv eingesetzten Business-Webanwendung mitentwickelt. Dabei arbeitete ich mit Angular, TypeScript, Node.js, REST-Schnittstellen und Datenbanken. Auch GitHub Actions, Deployments und technische Fehleranalyse gehörten zu meinen Aufgaben.',
      interests:
        'Ich möchte mich vor allem in der Fullstack- und Backend-Entwicklung weiterentwickeln. Business-Anwendungen, Schnittstellen und Integrationen finde ich besonders interessant, auch im Finanzumfeld. Perspektivisch plane ich ein berufsbegleitendes Informatikstudium an der Hochschule Luzern.',
      credentialsLabel: 'Qualifikationen',
      diploma: 'Informatiker EFZ – Applikationsentwicklung',
      baccalaureate: 'Berufsmaturität – technische Ausrichtung',
    },
    experience: {
      heading: 'Erfahrung',
      role: 'Praktikant Applikationsentwicklung',
      company: 'BMT Business meets Technology Consulting AG (Einsatz bei Woonig AG)',
      period: 'August 2023 – Juli 2025',
      points: [
        'Entwicklung und Weiterentwicklung einer produktiv eingesetzten Business-Webanwendung im Frontend und Backend.',
        'Umsetzung neuer Funktionen anhand interner und kundenseitiger Anforderungen.',
        'Arbeit mit Angular, TypeScript, Node.js, REST-Schnittstellen und Datenbanken.',
        'Pflege eines GitHub-Repositories inklusive GitHub-Actions-Workflows und Updates.',
        'Einsatz von Docker Compose sowie Mitarbeit bei Deployments und technischer Fehleranalyse.',
        'Zusammenarbeit im Scrum-Team.',
      ],
    },
    skills: {
      heading: 'Kenntnisse',
      practicalHeading: 'Berufspraxis',
      practicalDescription: 'Technologien und Arbeitsweisen aus meinem Praxiseinsatz bei BMT/Woonig.',
      practicalItems: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5 / CSS3',
        'Node.js',
        'REST-APIs',
        'Firebase',
        'Datenbanken',
        'Git',
        'GitHub Actions',
        'Scrum',
      ],
      infrastructureHeading: 'Infrastruktur & Deployment',
      infrastructureDescription:
        'Werkzeuge für Entwicklungsumgebungen, Deployments und das Hosting eigener Anwendungen.',
      infrastructureItems: ['Linux', 'Docker', 'Docker Compose', 'VPS-Hosting'],
      learningHeading: 'Ausbildung & Grundlagen',
      learningDescription: 'Technologien aus meiner Ausbildung und eigenen Lernprojekten.',
      learningItems: ['Java', 'Spring Boot', 'React', 'SQL', 'PostgreSQL', 'MySQL'],
    },
    contact: {
      heading: 'Kontakt',
      message:
        'Ich suche eine Einstiegsposition als Junior Software Engineer, bevorzugt in der Fullstack- oder Backend-Entwicklung. Besonders interessieren mich Business-Anwendungen und Integrationen, auch im Finanzumfeld. Regional bin ich für Stellen im Thurgau, in St. Gallen, Winterthur und Zürich offen.',
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
