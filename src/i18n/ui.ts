export const startYear = 2008;
export const currentYear = new Date().getFullYear();
export const experienceYears = currentYear - startYear;

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Header
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.courses': 'Cursos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.badge':
      '🚀 Gerente de Desarrollo · Tech Lead · Especialista en Ciberseguridad',
    'hero.greeting': 'Hola, soy ',
    'hero.building': 'Construyendo plataformas',
    'hero.secure': 'escalables y seguras.',
    'hero.desc': `Gerente de Desarrollo & Especialista en Seguridad | +${experienceYears} años<br />Liderazgo Bancario & Fintech · Arquitectura Cloud · DevSecOps · IA & Golang/C#/.NET`,
    'hero.contact': 'Contáctame',
    'hero.cv': 'Descargar CV',

    // About
    'about.title': 'Sobre Mí',
    'about.profileTitle': 'Perfil Profesional',
    'about.p1': `Soy <strong>Gerente de Desarrollo, Ingeniero de Sistemas y Especialista en Seguridad de la Información</strong> con más de ${experienceYears} años liderando la creación de productos digitales de alto impacto, plataformas transaccionales y soluciones de software escalables. Me especializo en la gestión estratégica de equipos de ingeniería, arquitecturas distribuidas en la nube (<strong>Azure, AWS</strong>) y tecnologías modernas como <strong>Golang, C#/.NET, NestJS, TypeScript y React</strong>.`,
    'about.p2':
      'He liderado equipos técnicos multiculturales en sectores de alta exigencia como el <strong>Sector Bancario, Fintech, Web3 y e-Commerce</strong> (incluyendo Mercado Libre), aplicando metodologías ágiles, auditorías asistidas por IA y principios de <strong>Clean Architecture</strong>. Mi especialización en <strong>Ciberseguridad y DevSecOps</strong> me permite integrar controles defensivos (OWASP, SAST/DAST, Pentesting) de forma nativa desde el diseño hasta la entrega continua.',
    'about.p3':
      'Actualmente me desempeño como <strong>Gerente de Desarrollo en el Sector Bancario</strong>, dirigiendo la estrategia tecnológica, la gobernanza de infraestructura y el crecimiento de equipos de ingeniería de alto rendimiento. Estoy abierto a retos ejecutivos y técnicos donde pueda aportar liderazgo, visión de arquitectura y seguridad. <strong>Hablemos.</strong>',
    'about.years': 'Años de <br/>Experiencia',
    'about.projects': 'Proyectos <br/>Completados',
    'about.languagesTitle': 'Idiomas',
    'about.langEs': 'Español',
    'about.langEsLevel': 'Nativo',
    'about.langEn': 'Inglés',
    'about.langEnLevel': 'B2',

    // Titles
    'layout.title':
      'John Alexander Toro Cortés - Experiencia, Educación y Habilidades',
    'experience.title': 'Experiencia',
    'projects.title': 'Proyectos Destacados',
    'education.title': 'Educación',
    'courses.title': 'Cursos y Certificaciones',
    'skills.title': 'Habilidades',

    // Projects
    'projects.viewLive': 'Ver Demo en Vivo',
    'projects.viewGithub': 'Código Fuente (GitHub)',
    'projects.viewDetails': 'Ver Detalles',
    'projects.demoLabel': 'Demo:',
    'projects.githubLabel': 'GitHub:',
    'projects.githubHelpers.title':
      'GitHub Helpers - Stats Generator & Live API',
    'projects.githubHelpers.tagline': 'Microservicio Open Source & Cliente Web',
    'projects.githubHelpers.desc':
      'Microservicio y cliente web desarrollado en Node.js con TypeScript. Permite consultar en tiempo real las estadísticas generales y la distribución de lenguajes de cualquier usuario de GitHub, generando tarjetas vectoriales (SVG) listas para incrustar directamente en tu archivo README.md.',
    'projects.jatcPortfolio.title':
      'JATC.co - Personal Portfolio & Web Platform',
    'projects.jatcPortfolio.tagline':
      'Portafolio Web de Alto Rendimiento & PWA',
    'projects.jatcPortfolio.desc':
      'Sitio web profesional de alto rendimiento construido con Astro v7, TypeScript, LightningCSS y Clean Architecture. Cuenta con soporte bilingüe (ES/EN), modo claro/oscuro con persistencia, compresión Brotli/Gzip, optimización LCP de fuentes e imágenes, accesibilidad WCAG 2.2, directivas estrictas de seguridad CSP y 0 vulnerabilidades.',

    // Skills
    'skills.filterTitle': 'Filtrar experiencias y proyectos con {skill}',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos',
    'contact.desc':
      'Abierto a explorar nuevas oportunidades profesionales y desafíos técnicos. Si consideras que mi experiencia puede aportar valor a tu equipo u organización, no dudes en ponerte en contacto conmigo.',
    'contact.email': 'Contactar por Email',
    'contact.phone': 'Celular',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'scroll.top': 'Volver arriba',

    // SEO
    'seo.description': `Portafolio de John Alexander Toro Cortés. Gerente de Desarrollo en el Sector Bancario, Especialista en Seguridad de la Información y Technical Lead con +${experienceYears} años de trayectoria en liderazgo de ingeniería, Cloud y DevSecOps.`,
    'seo.keywords':
      'Gerente de Desarrollo, Development Manager, Sector Bancario, Banking, Technical Lead, Tech Lead, Especialista en Seguridad de la Información, Cybersecurity Specialist, DevSecOps, Engineering Manager, Clean Architecture, Arquitectura Cloud, Golang, C#, .NET, TypeScript, AWS, Azure, Fintech, JATC',

    // Actions & Modal A11y
    'action.copyLink': 'Copiar link',
    'action.copy': 'Copiar al portapapeles',
    'action.copied': '¡Copiado!',
    'action.print': 'Imprimir portafolio',
    'action.skipToContent': 'Saltar al contenido principal',
    'action.close': 'Cerrar',
    'action.previous': 'Anterior',
    'action.next': 'Siguiente',
    'action.closeModal': 'Cerrar ventana modal',
    'hero.cliInputLabel': 'Entrada de comandos de la consola terminal',
    'projects.architectureTitle': 'Puntos Clave de Arquitectura',
    'projects.stackTitle': 'Tecnologías',
    'themeToggle.label': 'Cambiar tema',
    'lang.es.label': 'Cambiar idioma a Español',
    'lang.en.label': 'Cambiar idioma a Inglés (Switch to English)',
    'courses.credentialLabel':
      'Ver credencial de {title} (abre en una nueva pestaña)',
    'courses.modalTitle': 'Detalles del Diploma',
    'test.fallbackOnlyEs': 'Solo Español',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.courses': 'Courses',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge':
      '🚀 Development Manager · Tech Lead · Cybersecurity Specialist',
    'hero.greeting': "Hi, I'm ",
    'hero.building': 'Building scalable',
    'hero.secure': 'and secure platforms.',
    'hero.desc': `Development Manager & Information Security Specialist | ${experienceYears}+ years<br />Banking & Fintech Leadership · Cloud Architecture · DevSecOps · AI & Golang/C#/.NET`,
    'hero.contact': 'Contact me',
    'hero.cv': 'Download CV',

    // About
    'about.title': 'About Me',
    'about.profileTitle': 'Professional Profile',
    'about.p1': `I’m a <strong>Development Manager, Systems Engineer, and Information Security Specialist</strong> with over ${experienceYears} years of experience building high-impact digital products, transactional platforms, and scalable software. I specialize in engineering team leadership, distributed cloud architecture (<strong>Azure, AWS</strong>), and modern stacks including <strong>Golang, C#/.NET, NestJS, TypeScript, and React</strong>.`,
    'about.p2':
      'I’ve spearheaded cross-functional technical teams across demanding environments in <strong>Banking, Fintech, Web3, and e-Commerce</strong> (such as Mercado Libre), applying agile frameworks, AI-driven quality governance, and <strong>Clean Architecture</strong>. My background in <strong>Cybersecurity and DevSecOps</strong> allows me to embed security controls (OWASP, SAST/DAST, Pentesting) natively from architecture design through deployment pipelines.',
    'about.p3':
      'Currently serving as a <strong>Development Manager in Banking</strong>, steering technology strategy, cloud infrastructure governance, and high-performing engineering teams. Open to executive and technical leadership opportunities where I can drive management, security, and architectural vision. <strong>Let’s talk.</strong>',
    'about.years': 'Years of <br/>Experience',
    'about.projects': 'Projects <br/>Completed',
    'about.languagesTitle': 'Languages',
    'about.langEs': 'Spanish',
    'about.langEsLevel': 'Native',
    'about.langEn': 'English',
    'about.langEnLevel': 'B2',

    // Titles
    'layout.title': 'John Alexander Toro Cortés - Portfolio',
    'experience.title': 'Experience',
    'projects.title': 'Featured Projects',
    'education.title': 'Education',
    'courses.title': 'Courses and Certifications',
    'skills.title': 'Skills',

    // Projects
    'projects.viewLive': 'View Live Demo',
    'projects.viewGithub': 'Source Code (GitHub)',
    'projects.viewDetails': 'View Details',
    'projects.demoLabel': 'Demo:',
    'projects.githubLabel': 'GitHub:',
    'projects.githubHelpers.title':
      'GitHub Helpers - Stats Generator & Live API',
    'projects.githubHelpers.tagline': 'Open Source Microservice & Web Client',
    'projects.githubHelpers.desc':
      'Microservice and web client built with Node.js and TypeScript. It allows real-time querying of general statistics and language distribution for any GitHub user, generating vector (SVG) cards ready to embed directly into your README.md file.',
    'projects.jatcPortfolio.title':
      'JATC.co - Personal Portfolio & Web Platform',
    'projects.jatcPortfolio.tagline': 'High-Performance Web Portfolio & PWA',
    'projects.jatcPortfolio.desc':
      'High-performance personal portfolio and web site built with Astro v7, TypeScript, LightningCSS, and Clean Architecture. Features bilingual support (ES/EN), dark/light mode with persistence, Brotli/Gzip compression, font & image LCP optimization, WCAG 2.2 accessibility, strict CSP security directives, and 0 vulnerabilities.',

    // Skills
    'skills.filterTitle': 'Filter experience and projects by {skill}',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's Talk",
    'contact.desc':
      'Open to exploring new professional opportunities and technical challenges. If you think my experience can add value to your team or organization, feel free to contact me.',
    'contact.email': 'Contact via Email',
    'contact.phone': 'Phone',

    // Footer
    'footer.rights': 'All rights reserved.',
    'scroll.top': 'Back to top',

    // SEO
    'seo.description': `Portfolio of John Alexander Toro Cortés. Banking Development Manager, Information Security Specialist, and Technical Lead with ${experienceYears}+ years in engineering leadership, Cloud architecture, and DevSecOps.`,
    'seo.keywords':
      'Development Manager, Gerente de Desarrollo, Banking, Fintech, Technical Lead, Tech Lead, Information Security Specialist, Cybersecurity Specialist, DevSecOps, Engineering Manager, Clean Architecture, Cloud Architecture, Golang, C#, .NET, TypeScript, AWS, Azure, JATC',

    // Actions & Modal A11y
    'action.copyLink': 'Copy link to this section',
    'action.copy': 'Copy to clipboard',
    'action.copied': 'Copied!',
    'action.print': 'Print portfolio',
    'action.skipToContent': 'Skip to main content',
    'action.close': 'Close',
    'action.previous': 'Previous',
    'action.next': 'Next',
    'action.closeModal': 'Close modal window',
    'hero.cliInputLabel': 'Terminal command line input',
    'projects.architectureTitle': 'Architectural Highlights',
    'projects.stackTitle': 'Technologies',
    'themeToggle.label': 'Toggle theme',
    'lang.es.label': 'Switch language to Spanish',
    'lang.en.label': 'Switch language to English',
    'courses.credentialLabel':
      'View credential for {title} (opens in a new tab)',
    'courses.modalTitle': 'Diploma Details',
  },
} as const;
