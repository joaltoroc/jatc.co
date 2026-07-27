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
    'hero.badge': '🚀 Technical Lead & Software Engineer',
    'hero.greeting': 'Hola, soy ',
    'hero.building': 'Construyendo plataformas',
    'hero.secure': 'escalables y seguras.',
    'hero.desc': `Technical Lead & Software Engineer | +${experienceYears} años<br />Golang · C#/.NET · TypeScript · Cloud (Azure/AWS) · DevSecOps · Clean Architecture`,
    'hero.contact': 'Contáctame',
    'hero.cv': 'Descargar CV',

    // About
    'about.title': 'Sobre Mí',
    'about.profileTitle': 'Perfil Profesional',
    'about.p1': `Soy <strong>Technical Lead y Software Engineer</strong> con más de ${experienceYears} años diseñando y construyendo productos de software escalables, seguros y de alto impacto. Me especializo en liderar equipos de ingeniería, arquitecturas distribuidas en la nube (<strong>Azure, AWS</strong>) y tecnologías modernas como <strong>Golang, C#/.NET, NestJS, TypeScript y React</strong>.`,
    'about.p2':
      'He liderado equipos técnicos en entornos de alta exigencia (como Mercado Libre y proyectos Fintech/Web3), aplicando metodologías ágiles y principios de <strong>Clean Architecture</strong>. Mi formación como especialista en <strong>Ciberseguridad y DevSecOps</strong> me permite integrar prácticas de seguridad (OWASP, Pentesting, SonarCloud) de forma nativa desde el diseño hasta el despliegue continuo.',
    'about.p3':
      'Actualmente lidero un equipo de 11 personas entregando plataformas críticas de negocio. Estoy abierto a nuevas oportunidades y retos técnicos donde pueda aportar visión de arquitectura, seguridad y liderazgo. <strong>Hablemos.</strong>',
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
    'seo.description': `Portafolio de John Alexander Toro Cortés. Technical Lead, Software Engineer y Especialista en Ciberseguridad con +${experienceYears} años de experiencia en arquitecturas Cloud, DevSecOps y Clean Architecture.`,
    'seo.keywords':
      'Technical Lead, Software Engineer, Tech Lead, Ciberseguridad, DevSecOps, Clean Architecture, Arquitectura Cloud, React, Node.js, Golang, C#, .NET, TypeScript, AWS, Azure, JATC',

    // Actions
    'action.copyLink': 'Copiar link',
    'action.copy': 'Copiar al portapapeles',
    'action.copied': '¡Copiado!',
    'action.print': 'Imprimir portafolio',
    'action.skipToContent': 'Saltar al contenido principal',
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
    'hero.badge': '🚀 Technical Lead & Software Engineer',
    'hero.greeting': "Hi, I'm ",
    'hero.building': 'Building scalable',
    'hero.secure': 'and secure platforms.',
    'hero.desc': `Technical Lead & Software Engineer | ${experienceYears}+ years<br />Golang · C#/.NET · TypeScript · Cloud (Azure/AWS) · DevSecOps · Clean Architecture`,
    'hero.contact': 'Contact me',
    'hero.cv': 'Download CV',

    // About
    'about.title': 'About Me',
    'about.profileTitle': 'Professional Profile',
    'about.p1': `I’m a <strong>Technical Lead and Software Engineer</strong> with ${experienceYears}+ years designing and building scalable, secure, high-impact software products. I specialize in leading engineering teams, distributed cloud architectures (<strong>Azure, AWS</strong>), and modern technologies like <strong>Golang, C#/.NET, NestJS, TypeScript, and React</strong>.`,
    'about.p2':
      'I’ve led technical teams in demanding environments (such as Mercado Libre and Fintech/Web3 projects), applying agile methodologies and <strong>Clean Architecture</strong> principles. My background as a <strong>Cybersecurity and DevSecOps</strong> specialist lets me embed security practices (OWASP, Pentesting, SonarCloud) natively from design through continuous deployment.',
    'about.p3':
      'I currently lead an 11-person team delivering business-critical platforms. I’m open to new opportunities and technical challenges where I can contribute architecture, security, and leadership. <strong>Let’s talk.</strong>',
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
    'seo.description': `Portfolio of John Alexander Toro Cortés. Technical Lead, Software Engineer and Cybersecurity Specialist with ${experienceYears}+ years of experience in Cloud architectures, DevSecOps, and Clean Architecture.`,
    'seo.keywords':
      'Technical Lead, Software Engineer, Tech Lead, Cybersecurity, DevSecOps, Clean Architecture, Cloud Architecture, React, Node.js, Golang, C#, .NET, TypeScript, AWS, Azure, JATC',

    // Actions
    'action.copyLink': 'Copy link to this section',
    'action.copy': 'Copy to clipboard',
    'action.copied': 'Copied!',
    'action.print': 'Print portfolio',
    'action.skipToContent': 'Skip to main content',
    'themeToggle.label': 'Toggle theme',
    'lang.es.label': 'Switch language to Spanish',
    'lang.en.label': 'Switch language to English',
    'courses.credentialLabel':
      'View credential for {title} (opens in a new tab)',
    'courses.modalTitle': 'Diploma Details',
  },
} as const;
