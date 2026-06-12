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
    'hero.badge': '🚀 Team Lead & Senior Full Stack Engineer',
    'hero.greeting': 'Hola, soy',
    'hero.building': 'Construyendo plataformas',
    'hero.secure': 'escalables y seguras.',
    'hero.desc': `Ingeniero de Sistemas y Especialista en Ciberseguridad con más de ${experienceYears} años de experiencia. Experto en arquitecturas Cloud, DevSecOps y liderazgo de equipos de alto rendimiento.`,
    'hero.contact': 'Contáctame',
    'hero.cv': 'Descargar CV',

    // About
    'about.title': 'Sobre Mí',
    'about.profileTitle': 'Perfil Profesional',
    'about.p1': `<strong>Tech Lead y Senior Full Stack Engineer</strong> con más de ${experienceYears} años de experiencia diseñando y construyendo productos de software escalables, seguros y de alto impacto. Especializado en ecosistemas modernos (<strong>TypeScript, React, Node.js, Golang, C#/.NET</strong>) y desarrollo de arquitecturas cloud (<strong>Azure, AWS</strong>).`,
    'about.p2':
      'He liderado equipos técnicos en entornos de alta exigencia (como Mercado Libre y proyectos Fintech/Web3), aplicando metodologías ágiles y principios de <strong>Clean Architecture</strong>. Además, mi sólida base como especialista en <strong>Ciberseguridad y DevSecOps</strong> me permite integrar prácticas de seguridad (OWASP, Pentesting) desde el diseño hasta el despliegue continuo.',
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
      'Abierto a explorar nuevas oportunidades profesionales y desafíos técnicos. Si consideras que mi experiencia puede aportar valor a tu equipo u organización, no dudes en ponerte en o conmigo.',
    'contact.email': 'Contactar por Email',
    'contact.phone': 'Celular',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'scroll.top': 'Volver arriba',

    // SEO
    'seo.description':
      'Portafolio de John Alexander Toro Cortés. Tech Lead, Senior Full Stack Engineer y Especialista en Ciberseguridad con experiencia en arquitecturas Cloud, DevSecOps y desarrollo web.',
    'seo.keywords':
      'Tech Lead, Full Stack Engineer, Ciberseguridad, DevSecOps, Arquitectura Cloud, React, Node.js, Golang, AWS, Azure',
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
    'hero.badge': '🚀 Team Lead & Senior Full Stack Engineer',
    'hero.greeting': "Hi, I'm",
    'hero.building': 'Building scalable',
    'hero.secure': 'and secure platforms.',
    'hero.desc': `Systems Engineer and Cybersecurity Specialist with over ${experienceYears} years of experience. Expert in Cloud architectures, DevSecOps, and high-performance team leadership.`,
    'hero.contact': 'Contact me',
    'hero.cv': 'Download CV',

    // About
    'about.title': 'About Me',
    'about.profileTitle': 'Professional Profile',
    'about.p1': `<strong>Tech Lead and Senior Full Stack Engineer</strong> with over ${experienceYears} years of experience designing and building scalable, secure, and high-impact software products. Specialized in modern ecosystems (<strong>TypeScript, React, Node.js, Golang, C#/.NET</strong>) and cloud architectures (<strong>Azure, AWS</strong>).`,
    'about.p2':
      'I have led technical teams in high-demand environments (such as Mercado Libre and Fintech/Web3 projects), applying agile methodologies and <strong>Clean Architecture</strong> principles. Furthermore, my solid background as a <strong>Cybersecurity and DevSecOps</strong> specialist allows me to integrate security practices (OWASP, Pentesting) from design to continuous deployment.',
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
      'Portfolio of John Alexander Toro Cortés. Tech Lead, Senior Full Stack Engineer and Cybersecurity Specialist with experience in Cloud architectures, DevSecOps and web development.',
    'seo.keywords':
      'Tech Lead, Full Stack Engineer, Cybersecurity, DevSecOps, Cloud Architecture, React, Node.js, Golang, AWS, Azure',
  },
} as const;
