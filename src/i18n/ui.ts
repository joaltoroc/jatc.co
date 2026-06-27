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
    'nav.education': 'Educación',
    'nav.courses': 'Cursos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.badge': '🚀 Engineering Manager & Technical Lead',
    'hero.greeting': 'Hola, soy',
    'hero.building': 'Construyendo plataformas',
    'hero.secure': 'escalables y seguras.',
    'hero.desc': `Ingeniero de Sistemas y Especialista en Ciberseguridad con más de ${experienceYears} años de experiencia. Experto en dirección de equipos de alto rendimiento, arquitecturas distribuidas Cloud (Azure/AWS), DevSecOps y Clean Architecture.`,
    'hero.contact': 'Contáctame',
    'hero.cv': 'Descargar CV',

    // About
    'about.title': 'Sobre Mí',
    'about.profileTitle': 'Perfil Profesional',
    'about.p1': `<strong>Engineering Manager y Technical Lead</strong> con más de ${experienceYears} años de trayectoria diseñando y construyendo productos de software escalables, seguros y de alto impacto. Especializado en el liderazgo de equipos de ingeniería, arquitecturas distribuidas cloud (<strong>Azure, AWS</strong>) y tecnologías modernas como <strong>Golang, C#/.NET, NestJS, TypeScript y React</strong>.`,
    'about.p2':
      'He dirigido con éxito equipos técnicos en entornos de alta exigencia (como Mercado Libre y proyectos Fintech/Web3), aplicando metodologías ágiles y principios de <strong>Clean Architecture</strong>. Asimismo, mi sólida formación como especialista en <strong>Ciberseguridad y DevSecOps</strong> me permite integrar prácticas de seguridad (OWASP, Pentesting, SonarCloud) de forma nativa desde el ciclo de diseño hasta el despliegue continuo.',
    'about.years': 'Años de <br/>Experiencia',
    'about.projects': 'Proyectos <br/>Completados',

    // Titles
    'layout.title':
      'John Alexander Toro Cortés - Experiencia, Educación y Habilidades',
    'experience.title': 'Experiencia',
    'education.title': 'Educación',
    'courses.title': 'Cursos y Certificaciones',
    'skills.title': 'Habilidades',

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
    'seo.description':
      'Portafolio de John Alexander Toro Cortés. Engineering Manager, Tech Lead y Especialista en Ciberseguridad con experiencia en arquitecturas Cloud, DevSecOps y desarrollo web.',
    'seo.keywords':
      'Engineering Manager, Tech Lead, Full Stack Engineer, Ciberseguridad, DevSecOps, Arquitectura Cloud, React, Node.js, Golang, AWS, Azure',

    // Actions
    'action.copyLink': 'Copiar link',
    'themeToggle.label': 'Cambiar tema',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.courses': 'Courses',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': '🚀 Engineering Manager & Technical Lead',
    'hero.greeting': "Hi, I'm",
    'hero.building': 'Building scalable',
    'hero.secure': 'and secure platforms.',
    'hero.desc': `Systems Engineer and Cybersecurity Specialist with over ${experienceYears} years of experience. Expert in high-performance team leadership, Cloud architectures (Azure/AWS), DevSecOps, and Clean Architecture.`,
    'hero.contact': 'Contact me',
    'hero.cv': 'Download CV',

    // About
    'about.title': 'About Me',
    'about.profileTitle': 'Professional Profile',
    'about.p1': `<strong>Engineering Manager and Technical Lead</strong> with over ${experienceYears} years of experience designing and building scalable, secure, and high-impact software products. Specialized in leading engineering teams, distributed cloud architectures (<strong>Azure, AWS</strong>), and modern technologies like <strong>Golang, C#/.NET, NestJS, TypeScript, and React</strong>.`,
    'about.p2':
      'I have successfully directed technical teams in high-demand environments (such as Mercado Libre and Fintech/Web3 projects), applying agile methodologies and <strong>Clean Architecture</strong> principles. Furthermore, my solid background as a <strong>Cybersecurity and DevSecOps</strong> specialist allows me to integrate security practices (OWASP, Pentesting, SonarCloud) natively from design to continuous deployment.',
    'about.years': 'Years of <br/>Experience',
    'about.projects': 'Projects <br/>Completed',

    // Titles
    'layout.title': 'John Alexander Toro Cortés - Portfolio',
    'experience.title': 'Experience',
    'education.title': 'Education',
    'courses.title': 'Courses and Certifications',
    'skills.title': 'Skills',

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
    'seo.description':
      'Portfolio of John Alexander Toro Cortés. Engineering Manager, Tech Lead and Cybersecurity Specialist with experience in Cloud architectures, DevSecOps and web development.',
    'seo.keywords':
      'Engineering Manager, Tech Lead, Full Stack Engineer, Cybersecurity, DevSecOps, Cloud Architecture, React, Node.js, Golang, AWS, Azure',

    // Actions
    'action.copyLink': 'Copy link to this section',
    'themeToggle.label': 'Toggle theme',
  },
} as const;
