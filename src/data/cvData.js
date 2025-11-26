export const cvData = {
  fr: {
    personalInfo: {
      name: "Babacar NDIAYE",
      title: "Ingénieur Logiciel • Formateur IT",
      phone: "+221 77 144 02 91",
      email: "babacar.ndiayepro07@gmail.com",
      location: "Liberté VI Extension, Dakar, Sénégal"
    },
    profile: {
      title: "Profil Professionnel",
      text: "Ingénieur Logiciel diplômé de l'Institut Supérieur d'Informatique de Dakar, fort de 5+ années d'expérience dans la conception d'applications Web et Mobile. Expérimenté en architecture microservices avec une solide maîtrise du backend (Spring Boot, Laravel) et du frontend (Angular, Flutter). Formateur aguerri ayant formé plus de 200 étudiants. Enthousiaste des nouvelles technologies et fervent défenseur du travail collaboratif pour atteindre l'excellence."
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          name: "Frontend & Mobile",
          items: ["Angular", "Ionic", "Flutter / Dart", "HTML5 / CSS3 / SCSS", "JavaScript / TypeScript"]
        },
        {
          name: "Backend",
          items: ["Java / Spring Boot / Spring Cloud", "PHP / Laravel / Lumen", "Django REST", "NestJs"]
        },
        {
          name: "Base de données",
          items: ["PostgreSQL", "MySQL", "MongoDB"]
        },
        {
          name: "Outils & Méthodologies",
          items: ["Git / Docker", "JUnit / Mockito", "Camunda BPMN", "Redis / Websocket", "Keycloak / SSO", "Flyway", "Méthodes Agiles", "UML / Merise", "LADM"]
        }
      ]
    },
    experiences: [
      {
        title: "Ingénieur Backend / Lead Backend",
        company: "Modelsis",
        period: "Février 2024 - Présent",
        location: "Dakar, Sénégal",
        description: "Développement du Système de Gestion du Foncier sénégalais (SGF) pour la DGID en participant à l'implémentation de l'architecture backend complète, permettant la digitalisation des processus fonciers nationaux via l'intégration de workflows BPMN avec Camunda et l'implémentation du standard LADM pour la gestion du foncier.",
        tech: "Technologies : Camunda, BPMN, LADM, Spring Boot, Flyway, JUnit, Sonar, PostgreSQL, Redis, WebSocket",
        achievements: [
          "Conception et gestion d'une architecture microservices (6 services interconnectés via Spring Cloud)",
          "Automatisation des processus fonciers via workflows BPMN avec Camunda",
          "Déploiement d'un système de cache Redis gérant 100 000+ requêtes/jour",
          "Développement d'un système de messagerie temps réel (WebSockets) pour la communication inter-agents DGID",
          "Développement de 500+ tests unitaires (JUnit/Mockito) garantissant la qualité du code",
          "Isolation des tests d'intégration avec Testcontainers et Docker",
          "Gestion du versioning et migration de 100+ scripts de base de données via Flyway"
        ]
      },
      {
        title: "Consultant Ingénieur Logiciel",
        company: "ATOS (CDD)",
        period: "Janvier 2023 - Octobre 2023",
        location: "Dakar, Sénégal",
        description: "Développement du Guichet Unique de Financement (GUF) pour l'ADPME, facilitant l'accès au financement des PME, en participant à la conception et à l'implémentation d'une architecture microservices scalable avec Spring Cloud, Angular et Docker, tout en contribuant à assurer une couverture de tests de 80% via JUnit et Mockito.",
        tech: "Technologies : Spring Boot, Spring Cloud, Angular, JUnit, Mockito, Sonar, Docker, PostgreSQL",
        achievements: [
          "Conception et développement du Guichet Unique de Financement (GUF) pour l'ADPME/GIZ, facilitant l'accès au crédit pour 10 000+ PME sénégalaises",
          "Architecture microservices de 3 services interconnectés orchestrés via Spring Cloud",
          "Système de messagerie asynchrone pour la communication inter-services",
          "Développement de 30+ endpoints REST sécurisés couvrant l'ensemble des fonctionnalités",
          "Suite de 150+ tests unitaires (JUnit/Mockito) garantissant la qualité du code"
        ]
      },
      {
        title: "Consultant Ingénieur Logiciel",
        company: "Sénégal Numérique S.A. (ex-ADIE)",
        period: "Janvier 2022 - Janvier 2023",
        location: "Dakar, Sénégal",
        description: "Développement du Guichet Unique Sénégal Services permettant aux citoyens d'effectuer leurs démarches administratives en ligne, en participant au développement du backend RESTful avec Laravel/Lumen et de l'application mobile cross-platform avec Flutter, contribuant à la réduction des délais de traitement administratif.",
        tech: "Technologies : Laravel, Lumen, Flutter, MySQL",
        achievements: [
          "Développement du Guichet Unique Sénégal Services, digitalisant les démarches administratives pour 16+ millions de citoyens sénégalais",
          "API REST haute performance gérant 50 000+ requêtes/jour avec des temps de réponse <200ms",
          "Conception d'un moteur de génération dynamique de formulaires mobile remplaçant les iFrames TELEDAC",
          "Intégration d'un système de messagerie instantanée dans l'application",
          "Implémentation d'une double authentification différenciée (agents administratifs/grand public)",
          "Intégration des solutions de paiement mobile (Wave, Orange Money) pour les frais administratifs",
          "Migration complète des données vers la nouvelle base de données refactorisée"
        ]
      },
      {
        title: "Ingénieur Logiciel",
        company: "IDEV Technologies (Groupe IDEV)",
        period: "Janvier 2021 - Février 2024",
        location: "Dakar, Sénégal",
        description: "Participation à la conception et au développement d'applications de gestion multi-secteurs (assurance, banque, éducation avec EKARANTA, transfert d'argent), contribuant à livrer des solutions complètes et scalables, en utilisant des stacks technologiques variées (Angular, Ionic, Laravel, Django REST, Flutter) couvrant tout le cycle de développement.",
        tech: "Technologies : Angular, Ionic, Laravel, Django REST, Flutter",
        achievements: []
      },
      {
        title: "Développeur Web",
        company: "Ringier One Africa Media (ROAM)",
        period: "Septembre 2018 - Mars 2019",
        location: "Dakar, Sénégal",
        description: "Maintenance et amélioration de la plateforme web Mamaison, contribuant à augmenter sa stabilité et ses fonctionnalités, en corrigeant les bugs critiques, développant de nouvelles features et formant les équipes clients à l'utilisation du système.",
        tech: "Technologies : PHP, JavaScript, HTML5, CSS3",
        achievements: []
      },
      {
        title: "Ingénieur Freelance",
        company: "NLD Software",
        period: "Avril 2018 - Présent",
        location: "Dakar, Sénégal",
        description: "Réalisation de solutions web et mobile personnalisées pour divers clients, répondant à leurs besoins spécifiques métier, en gérant l'ensemble du cycle projet de l'analyse des besoins au déploiement et maintenance.",
        subtitle: "Projets notables:",
        projects: [
          {
            name: "Plateforme Visite Technique",
            period: "(Fév-Juil 2022)",
            description: "Gestion de contrôle technique au niveau du centre de Hann, plus de 5 000 véhicules enregistrés et 800 contrôles mensuels",
            tech: "Angular 11, Laravel",
            url: "https://visitetechnique.com"
          },
          {
            name: "App Mobile Taxis Nantes",
            period: "(Nov 2021-Jan 2022)",
            description: "Gestion d'une flotte de 120 taxis, 15 000 courses mensuelles et 150 chauffeurs",
            tech: "Ionic, Laravel",
            url: "https://taxis-nantes.com"
          },
          {
            name: "Plateforme SOUMARI",
            period: "(Oct 2023-Oct 2024)",
            description: "Solution complète avec 8 000+ utilisateurs actifs, 20 000 transactions traitées et 50 marchands partenaires",
            tech: "Flutter, Angular, Laravel",
            url: "https://soumari.com"
          }
        ],
         tech: "Technologies : Spring Boot, Flutter, Angular, Laravel, NodeJs, NestJs, Flyway, JUnit, Sonar, PostgreSQL, MongoDB, Redis, WebSocket, BPMN",
        achievements: []
      }
    ],
    teaching: [
      {
        title: "Formateur en Génie Informatique",
        company: "Groupe ISI",
        period: "Février 2022 - Présent",
        location: "Dakar, Sénégal",
        achievements: [
          "Formation de plus de 150 étudiants dans 6 promotions en développement web et mobile",
          "Enseignement des modules : PHP, Java, JavaScript, C, C++, Algorithmes, technologies web/mobile modernes",
          "Animation de plus de 300 heures de cours et 150+ heures de travaux pratiques",
          "Création de 50+ exercices pratiques et 20+ projets pédagogiques",
          "Encadrement de 15+ mémoires de fin d'études"
        ]
      },
      {
        title: "Formateur en Développement Web & Mobile",
        company: "GROUPE SUP'INFO SENEGAL",
        period: "Mai 2023 - Présent",
        location: "Dakar, Sénégal",
        achievements: [
          "Formation de plus de 100 étudiants répartis dans 4 promotions aux technologies web et mobile modernes",
          "Enseignement des modules techniques : Flutter, Dart, Laravel, Java, Spring Boot, Firebase, NodeJs"
        ]
      },
      {
        title: "Formateur en Génie Informatique",
        company: "Institut Polytechnique Panafricain (IPP)",
        period: "Mars 2025 - Présent",
        location: "Dakar, Sénégal",
        achievements: [
          "Formation d'une promotion d'étudiants en Génie Informatique",
          "Enseignement des modules : Flutter, Dart, Firebase, NodeJs"
        ]
      }
    ],
    education: [
      {
        title: "Master 2 en Génie Logiciel",
        school: "Institut Supérieur d'Informatique (ISI)",
        period: "2020-2021",
        location: "Dakar, Sénégal"
      },
      {
        title: "Licence en Génie Logiciel",
        school: "Institut Supérieur d'Informatique (ISI)",
        period: "2018-2019",
        location: "Dakar, Sénégal"
      },
      {
        title: "DTS en Informatique de Gestion & Réseau",
        school: "Institut Supérieur d'Informatique (ISI)",
        period: "2017-2018",
        location: "Dakar, Sénégal"
      },
      {
        title: "Baccalauréat Série S2",
        school: "Collège Saint Gabriel",
        period: "2015-2016",
        location: "Thiès, Sénégal"
      }
    ],
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Intermédiaire" }
    ],
     links: [
      { name: "🔗 LinkedIn", url: "https://www.linkedin.com/in/babacar-ndiaye-8abb2a160/", pdfName: "⚭ LinkedIn" },
      { name: "🌐 Portfolio", url: "https://babacar-ndiaye-portfolio.vercel.app/", pdfName: "◉ Portfolio" },
      { name: "💻 GitHub", url: "https://github.com/Babs95", pdfName: "◈ GitHub" },
      { name: "📝 Medium", url: "https://medium.com/@babsco95", pdfName: "◆ Medium" }
    ]
  },
  en: {
    personalInfo: {
      name: "Babacar NDIAYE",
      title: "Software Engineer • IT Trainer",
      phone: "+221 77 144 02 91",
      email: "babacar.ndiayepro07@gmail.com",
      location: "Liberté VI Extension, Dakar, Senegal"
    },
    profile: {
      title: "Professional Profile",
      text: "Software Engineer graduated from Institut Supérieur d'Informatique in Dakar, with 5+ years of experience in Web and Mobile application design. Experienced in microservices architecture with solid expertise in backend (Spring Boot, Laravel) and frontend (Angular, Flutter). Seasoned trainer having trained over 200 students. Enthusiastic about new technologies and strong advocate of collaborative work to achieve excellence."
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Frontend & Mobile",
          items: ["Angular", "Ionic", "Flutter / Dart", "HTML5 / CSS3 / SCSS", "JavaScript / TypeScript"]
        },
        {
          name: "Backend",
          items: ["Java / Spring Boot / Spring Cloud", "PHP / Laravel / Lumen", "Django REST", "NestJs"]
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "MySQL", "MongoDB"]
        },
        {
          name: "Tools & Methodologies",
          items: ["Git / Docker", "JUnit / Mockito", "Camunda BPMN", "Redis / Websocket", "Keycloak / SSO", "Flyway", "Agile Methods", "UML / Merise", "LADM"]
        }
      ]
    },
    experiences: [
      {
        title: "Backend Engineer / Lead Backend",
        company: "Modelsis",
        period: "February 2024 - Present",
        location: "Dakar, Senegal",
        description: "Development of the Senegalese Land Management System (SGF) for DGID by participating in the implementation of the complete backend architecture, enabling nationwide land process digitalization through BPMN workflow integration with Camunda and LADM standard implementation for land management.",
        tech: "Technologies: Camunda, BPMN, LADM, Spring Boot, Flyway, JUnit, Sonar, PostgreSQL, Redis, WebSocket",
        achievements: [
          "Designed and managed a microservices architecture (6 interconnected services via Spring Cloud)",
          "Automated land processes via BPMN workflows with Camunda",
          "Deployed a Redis caching system handling 100,000+ requests/day",
          "Developed a real-time messaging system (WebSockets) for inter-agent DGID communication",
          "Developed 500+ unit tests (JUnit/Mockito) ensuring code quality",
          "Isolated integration tests with Testcontainers and Docker",
          "Managed versioning and migration of 100+ database scripts via Flyway"
        ]
      },
      {
        title: "Software Engineer Consultant",
        company: "ATOS (Fixed-term)",
        period: "January 2023 - October 2023",
        location: "Dakar, Senegal",
        description: "Development of the Single Financing Window (GUF) for ADPME to facilitate SME financing access by participating in the design and implementation of a scalable microservices architecture with Spring Cloud, Angular and Docker, while contributing to ensure 80% test coverage through JUnit and Mockito.",
        tech: "Technologies: Spring Boot, Spring Cloud, Angular, JUnit, Mockito, Sonar, Docker, PostgreSQL",
        achievements: [
          "Designed and developed the Single Financing Window (GUF) for ADPME/GIZ, facilitating credit access for 10,000+ Senegalese SMEs",
          "Microservices architecture with 3 interconnected services orchestrated via Spring Cloud",
          "Asynchronous messaging system for inter-service communication",
          "Development of 30+ secured REST endpoints covering all functionalities",
          "Test suite of 150+ unit tests (JUnit/Mockito) ensuring code quality"
        ]
      },
      {
        title: "Software Engineer Consultant",
        company: "Sénégal Numérique S.A. (formerly ADIE)",
        period: "January 2022 - January 2023",
        location: "Dakar, Senegal",
        description: "Development of the Senegal Services Single Window enabling citizens to complete administrative procedures online by participating in the development of the RESTful backend with Laravel/Lumen and cross-platform mobile application with Flutter, contributing to reducing administrative processing times.",
        tech: "Technologies: Laravel, Lumen, Flutter, MySQL",
        achievements: [
          "Developed the Senegal Services Single Window, digitalizing administrative procedures for 16+ million Senegalese citizens",
          "High-performance REST API handling 50,000+ requests/day with response times <200ms",
          "Designed a dynamic mobile form generation engine replacing TELEDAC iFrames",
          "Integrated an instant messaging system within the application",
          "Implemented differentiated dual authentication (administrative agents/general public)",
          "Integrated mobile payment solutions (Wave, Orange Money) for administrative fees",
          "Complete data migration to the new refactored database"
        ]
      },
      {
        title: "Software Engineer",
        company: "IDEV Technologies (Groupe IDEV)",
        period: "January 2021 - February 2024",
        location: "Dakar, Senegal",
        description: "Participation in the design and development of multi-sector management applications (insurance, banking, education with EKARANTA, money transfer), contributing to deliver complete and scalable solutions by using diverse technology stacks (Angular, Ionic, Laravel, Django REST, Flutter) covering the entire development lifecycle.",
        tech: "Technologies: Angular, Ionic, Laravel, Django REST, Flutter",
        achievements: []
      },
      {
        title: "Web Developer",
        company: "Ringier One Africa Media (ROAM)",
        period: "September 2018 - March 2019",
        location: "Dakar, Senegal",
        description: "Maintenance and improvement of the Mamaison web platform, contributing to increase its stability and features by fixing critical bugs, developing new functionalities and training client teams on system usage.",
        tech: "Technologies: PHP, JavaScript, HTML5, CSS3",
        achievements: []
      },
      {
        title: "Freelance Engineer",
        company: "NLD Software",
        period: "April 2018 - Present",
        location: "Dakar, Senegal",
        description: "Delivery of custom web and mobile solutions for various clients, meeting their specific business needs by managing the entire project lifecycle from requirements analysis to deployment and maintenance.",
        subtitle: "Notable projects:",
        projects: [
          {
            name: "Technical Inspection Platform",
            period: "(Feb-Jul 2022)",
            description: "Technical inspection management at Hann center, over 5,000 registered vehicles and 800 monthly inspections",
            tech: "Angular 11, Laravel",
            url: "https://visitetechnique.com"
          },
          {
            name: "Taxis Nantes Mobile App",
            period: "(Nov 2021-Jan 2022)",
            description: "Fleet management of 120 taxis, 15,000 monthly rides and 150 drivers",
            tech: "Ionic, Laravel",
            url: "https://taxis-nantes.com"
          },
          {
            name: "SOUMARI Platform",
            period: "(Oct 2023-Oct 2024)",
            description: "Complete solution with 8,000+ active users, 20,000 transactions processed and 50 partner merchants",
            tech: "Flutter, Angular, Laravel",
            url: "https://soumari.com"
          }
        ],
        tech: "Technologies: Spring Boot, Flutter, Angular, Laravel, NodeJs, NestJs, Flyway, JUnit, Sonar, PostgreSQL, MongoDB, Redis, WebSocket, BPMN",
        achievements: []
      }
    ],
    teaching: [
      {
        title: "Computer Engineering Instructor",
        company: "Groupe ISI",
        period: "February 2022 - Present",
        location: "Dakar, Senegal",
        achievements: [
          "Trained over 150 students across 6 cohorts in web and mobile development",
          "Taught modules: PHP, Java, JavaScript, C, C++, Algorithms, modern web/mobile technologies",
          "Delivered over 300 hours of lectures and 150+ hours of practical work",
          "Created 50+ practical exercises and 20+ educational projects",
          "Supervised 15+ final dissertations"
        ]
      },
      {
        title: "Web & Mobile Development Instructor",
        company: "GROUPE SUP'INFO SENEGAL",
        period: "May 2023 - Present",
        location: "Dakar, Senegal",
        achievements: [
          "Trained over 100 students across 4 cohorts in modern web and mobile technologies",
          "Taught technical modules: Flutter, Dart, Laravel, Java, Spring Boot, Firebase, NodeJs"
        ]
      },
      {
        title: "Computer Engineering Instructor",
        company: "Pan-African Polytechnic Institute (IPP)",
        period: "March 2025 - Present",
        location: "Dakar, Senegal",
        achievements: [
          "Trained one cohort of Computer Engineering students",
          "Taught modules: Flutter, Dart, Firebase, NodeJs"
        ]
      }
    ],
    education: [
      {
        title: "Master 2 in Software Engineering",
        school: "Institut Supérieur d'Informatique (ISI)",
        period: "2020-2021",
        location: "Dakar, Senegal"
      },
      {
        title: "Bachelor's Degree in Software Engineering",
        school: "Institut Supérieur d'Informatique (ISI)",
        period: "2018-2019",
        location: "Dakar, Senegal"
      },
      {
        title: "DTS in IT Management & Networking",
        school: "Institut Supérieur d'Informatique (ISI)",
        period: "2017-2018",
        location: "Dakar, Senegal"
      },
      {
        title: "High School Diploma (Science)",
        school: "Collège Saint Gabriel",
        period: "2015-2016",
        location: "Thiès, Senegal"
      }
    ],
    languages: [
      { name: "French", level: "Fluent" },
      { name: "English", level: "Intermediate" }
    ],
    links: [
      { name: "🔗 LinkedIn", url: "https://www.linkedin.com/in/babacar-ndiaye-8abb2a160/", pdfName: "⚭ LinkedIn" },
      { name: "🌐 Portfolio", url: "https://babacar-ndiaye-portfolio.vercel.app/", pdfName: "◉ Portfolio" },
      { name: "💻 GitHub", url: "https://github.com/Babs95", pdfName: "◈ GitHub" },
      { name: "📝 Medium", url: "https://medium.com/@babsco95", pdfName: "◆ Medium" }
    ]
  }
};

export const translations = {
  fr: {
    downloadText: "Télécharger PDF",
    downloadingText: "Génération en cours...",
    experienceTitle: "Expériences Professionnelles",
    teachingTitle: "Expérience d'Enseignement",
    educationTitle: "Formation",
    languagesTitle: "Langues",
    linksTitle: "Liens"
  },
  en: {
    downloadText: "Download PDF",
    downloadingText: "Generating...",
    experienceTitle: "Professional Experience",
    teachingTitle: "Teaching Experience",
    educationTitle: "Education",
    languagesTitle: "Languages",
    linksTitle: "Links"
  }
};
