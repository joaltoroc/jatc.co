# Portafolio Personal - John Alexander Toro Cortés

[![Deploy via SFTP](https://img.shields.io/github/actions/workflow/status/joaltoroc/jatc.co/sftp-deploy.yml?branch=main&label=Deploy&logo=github&style=flat-square)](https://github.com/joaltoroc/jatc.co/actions/workflows/sftp-deploy.yml)
![Tests Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen?style=flat-square&logo=vitest)
![Security: Gitleaks](https://img.shields.io/badge/security-gitleaks--clean-success?style=flat-square&logo=gitleaks)

Este es el repositorio del portafolio personal de John Alexander Toro Cortés, accesible en [www.jatc.co](https://www.jatc.co). Está construido sobre **Astro (v7)** y diseñado para ser un sitio estático de altísimo rendimiento, totalmente accesible, bilingüe, seguro y con soporte nativo de temas.

---

## 🚀 Stack Tecnológico

El proyecto está diseñado bajo un enfoque moderno y minimalista, priorizando el rendimiento bruto y la mantenibilidad:

- **Framework principal:** [Astro (v7.0.9)](https://astro.build/)
- **Lenguaje:** TypeScript / HTML5 Semántico
- **Estilos:** CSS nativo y modularizado (`src/styles/global.css`) procesado con **LightningCSS** para minificación avanzada.
- **Entorno de ejecución:** Node.js `>=24.0.0`
- **Gestor de paquetes:** [pnpm (v11.25.0)](https://pnpm.io/)
- **Control de calidad y Git Hooks:** [Husky (v9.1.7)](https://typicode.github.io/husky/) y `@astrojs/check`
- **CI/CD:** GitHub Actions (despliegue automatizado por SFTP)

---

## ✨ Características Principales

### 🌍 Internacionalización (i18n) Bilingüe

- Enrutamiento basado en directorios limpio (Español en `/` e Inglés en `/en/`).
- Sistema de traducciones ligero basado en diccionarios estáticos (`src/i18n/`).
- Metadatos bilingües integrales con etiquetas `hreflang` y `x-default` para indexación internacional precisa en motores de búsqueda.

### 🌓 Gestión del Tema (Light/Dark Mode)

- Soporte para modo claro y modo oscuro con guardado automático en `localStorage`.
- **Prevención de parpadeo (Flash of Unstyled Content):** Se ejecuta un script crítico síncrono inline directamente en el `<head>` antes de renderizar la página para aplicar la clase `.dark` de inmediato.
- Soporte de impresión optimizado: fuerza de forma temporal el tema claro al imprimir documentos físicos (`beforeprint` y `afterprint`), añade márgenes laterales simétricos en el contenedor (`padding: 0 1.75rem`), y remueve máscaras de degradado, sombreados (`drop-shadow`) y resplandores (`blur`) en imágenes para una impresión y generación de PDF limpia en navegadores móviles.

### 🚀 Rendimiento de Vanguardia (Performance SEO)

- **Compresión nativa y directivas de caché avanzadas:** Generación de recursos pre-comprimidos en formatos **Gzip (.gz)** y **Brotli (.br)** mediante `vite-plugin-compression`, e inyección en `.htaccess` de cabeceras `Cache-Control: public, max-age=31536000, immutable` (1 año) para recursos estáticos versionados en `/_astro/`.
- **Carga de fuentes optimizada (Self-Hosted):** Las tipografías variables `Inter` (cuerpo) y `Space Grotesk` (títulos) se alojan de manera local para eliminar dependencias externas, se pre-cargan de forma prioritaria (`fetchpriority="high"` en font LCP), e inyectan reglas `font-display: swap` inline en `<head>` para eliminar el retardo de renderizado del elemento LCP (`h1.hero-title`).
- **Ajuste de métricas de fuentes fallbacks:** Implementación de stacks de fuentes fallbacks utilizando `@font-face` con descriptores `size-adjust` para emparejar tipografías locales (`Arial`) con las fuentes del proyecto, eliminando saltos visuales y previniendo cambios en el CLS.
- **Optimización LCP (Largest Contentful Paint):** La imagen principal del avatar (procesada dinámicamente por Astro) y la fuente de títulos se pre-cargan de forma prioritaria con sus rutas optimizadas mediante tags `<link rel="preload" fetchpriority="high">`.
- **Formato de URL limpia:** Configuración de compilación `directory` en Astro para URLs sin la extensión `.html`.
- **Eliminación de Recálculos de Diseño Forzados (Forced Reflows):** Desacoplamiento de lecturas de geometría (`scrollHeight`, `scrollY`) y escrituras DOM mediante `requestAnimationFrame()` en la terminal interactiva CLI (`Hero.astro`) y manejadores de scroll flotantes (`ScrollToTop.astro`).
- **Carga diferida de Analytics:** Google Tag Manager se carga únicamente tras la primera interacción real del usuario (click, scroll, keydown, touchstart) o después de 10 segundos de inactividad, evitando competir por el hilo principal y mejorando la métrica LCP en auditorías móviles.
- **Compilación y optimización de scripts de cliente:** Remoción de directivas `is:inline` en scripts interactivos de componentes para compilar, minificar y empaquetar todo el código JavaScript cliente a través del compilador nativo de Astro/Vite. Esto reduce significativamente el peso de las páginas HTML finales, reduce la cantidad de hashes requeridos en las directivas de seguridad CSP de `.htaccess` y mejora los tiempos de análisis sintáctico.
- **Animaciones compuestas (PageSpeed optimization):** Optimización de la animación del parpadeo del cursor CLI utilizando propiedades de opacidad (`opacity: 0` a `opacity: 1`) compuestas directamente por GPU en lugar de cambiar colores de texto. Esto elimina recálculos de pintura (repaints) y mantiene el hilo principal responsivo en dispositivos móviles.

### 🛡️ Seguridad Avanzada (DevSecOps)

- **Content Security Policy (CSP) y Cabeceras de Seguridad:** Directiva estricta configurada a nivel de servidor mediante cabeceras HTTP en `.htaccess` para restringir la ejecución de scripts no autorizados y proteger contra ataques XSS y Clickjacking (`frame-ancestors 'none'`). Inclusión de cabeceras HSTS (`Strict-Transport-Security`), COOP (`Cross-Origin-Opener-Policy`) y `X-XSS-Protection`.
- **Protección contra Cosechadores de Datos (AI Agents):** Configuración explícita en `robots.txt` que restringe el acceso de más de 20 agentes y scrapers de Inteligencia Artificial (como `GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, etc.) para proteger los datos y derechos de autor del portafolio.
- **Resolución de Vulnerabilidades de Dependencias:** Uso de `overrides` en `pnpm-workspace.yaml` para forzar versiones parcheadas de dependencias transitivas (como `brace-expansion` traída por `eslint-plugin-jsx-a11y`), logrando 0 vulnerabilidades en auditorías de seguridad.

### 📱 Experiencia de Usuario & Accesibilidad (UX/UI & Apple Design)

- **Apple Design System & Motion:** Interfaz 100% responsiva bajo metodología "mobile-first", guiada por los principios de **Apple Design** (_Designing Fluid Interfaces_): tipografía óptica con tracking negativo (`letter-spacing: -0.025em`) en títulos, materiales translúcidos (`backdrop-filter: blur(20px) saturate(180%)`), bordes de alta definición y respuesta táctil reactiva al presionar (`:active { transform: scale(0.97); }`) mediante curvas de aceleración elásticas estilo iOS (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Soporte de Accesibilidad de Sistema:** Adaptación a `@media (prefers-reduced-motion)` (animaciones cross-fade) y `@media (prefers-reduced-transparency)` (superficies opacas fallbacks).
- **Exportación a PDF por Secciones Independientes:** Reglas estandarizadas de salto de página (`break-before: page; page-break-before: always;`) para cada una de las 8 secciones principales con márgenes de caja `@page { size: portrait; margin: 1.2cm 1.5cm; }` y ocultamiento automático de elementos interactivos (modales y botones flotantes).
- **Enlaces rápidos de sección:** Generación automática de botones interactivos para copiar el enlace de anclaje directo de cada sección con retroalimentación visual al usuario.
- **Navegación y acciones rápidas:** Navegación mejorada con botones flotantes para "Scroll to Top" (volver arriba) e impresión de la página (optimizados mediante posicionamiento absoluto y transiciones fluidas por variables CSS nativas), de manera que el botón de imprimir se desliza suavemente al aparecer el scroll.
- **Accesibilidad (A11y & WCAG 2.2):** Enlace "Skip to main content" (saltar al contenido principal) para navegación fácil por teclado (WCAG 2.4.1), áreas táctiles mínimas de 44px, inyección dinámica del atributo `aria-label` sincronizado bilingüe en encabezados de modales interactivos, ocultamiento explícito de iconos decorativos con `aria-hidden="true"`, y restauración automática de foco (`focus management`) al cerrar ventanas modales.
- **Consola Terminal CLI Interactivo:** Consola interactiva en la sección Hero con soporte para comandos de teclado (`help`, `whoami`, `skills`, `experience`, `projects`, `contact`, `cv`, `theme`, `matrix`, `clear`, `sudo`), autocompletado y navegación por historial de comandos (flechas Arriba/Abajo).
- **Filtro Cruzado de Tecnologías:** Selección interactiva de badges en la sección de Habilidades que resalta automáticamente la experiencia laboral y proyectos asociados a dicha tecnología.
- **PWA & Caché Offline:** Service Worker PWA (`public/sw.js`) configurado con estrategia Cache-First para navegación offline instantánea.
- **Visualizador interactivo de certificados y proyectos:** Modales accesibles en [Courses.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Courses.astro) y [Projects.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Projects.astro) para inspeccionar certificados y arquitecturas detalladas de proyectos.
- **Copia de datos de contacto:** Visualización directa y opción rápida de copiado al portapapeles para los datos clave de contacto (Email, LinkedIn y GitHub) en la sección de Contacto con retroalimentación visual.

---

## 📁 Estructura del Proyecto

```text
/
├── .github/
│   └── workflows/
│       └── sftp-deploy.yml    # Pipeline de despliegue continuo mediante SFTP
├── .husky/                    # Automatización de Git Hooks
│   ├── pre-commit             # Validación estática de Astro y tipos antes del commit
│   └── pre-push               # Compilación previa para validar errores antes del push
├── public/                    # Archivos estáticos públicos (imágenes, favicons, etc.)
├── src/
│   ├── components/            # Componentes modulares y reutilizables de Astro
│   │   ├── About.astro        # Sección de perfil y presentación
│   │   ├── Contact.astro      # Formulario e información de contacto
│   │   ├── Courses.astro      # Certificaciones y educación complementaria
│   │   ├── Education.astro    # Trayectoria de educación formal
│   │   ├── Experience.astro   # Trayectoria profesional bilingüe detallada
│   │   ├── Footer.astro       # Pie de página y firma de créditos
│   │   ├── Header.astro       # Menú de navegación, links y selector de idioma
│   │   ├── Hero.astro         # Presentación inicial con LCP optimizado
│   │   ├── Projects.astro     # Sección de proyectos destacados (GitHub Helpers)
│   │   ├── ScrollToTop.astro  # Botones flotantes de acciones rápidas (volver arriba e imprimir)
│   │   ├── Skills.astro       # Habilidades técnicas organizadas por categorías
│   │   └── ThemeToggle.astro  # Botón selector del tema Light/Dark
│   ├── i18n/                  # Lógica de traducción, diccionarios (ui.ts, utils.ts)
│   ├── layouts/               # Plantillas estructurales de la web (Layout.astro)
│   ├── pages/                 # Enrutamiento estático (index.astro, en/index.astro)
│   └── styles/                # Variables CSS, paleta de colores y estilos globales
├── ADR.md                     # Registro de Decisiones de Arquitectura (Architecture Decision Record)
├── astro.config.mjs           # Configuración detallada de Astro e integraciones
├── LICENSE                    # Términos de uso y copia restrictiva
├── package.json               # Dependencias del proyecto y scripts npm
├── tsconfig.json              # Configuración de TypeScript
├── vitest.config.ts           # Configuración de Vitest para pruebas unitarias
└── tests/                     # Suite de pruebas unitarias
```

---

## 🧞 Comandos y Desarrollo Local

Este proyecto utiliza `pnpm` como gestor de dependencias. Asegúrate de tener instalado Node.js `>=24.0.0`.

### Instalación de dependencias

```bash
pnpm install
```

### Iniciar servidor de desarrollo

Inicia el servidor local con recarga rápida (HMR) en [http://localhost:4321](http://localhost:4321):

```bash
pnpm dev
```

### Compilar para producción

Compila el proyecto y genera los archivos estáticos listos para producción en la carpeta `./dist/`:

```bash
pnpm build
```

### Previsualizar el sitio compilado

Inicia un servidor local para inspeccionar la versión final compilada antes de desplegar:

```bash
pnpm preview
```

### Verificación de sintaxis y tipos

Valida la consistencia de tipos de TypeScript y sintaxis de Astro en toda la base de código:

```bash
pnpm check
```

---

## 🤖 Automatización y DevOps

### Git Hooks (Husky)

Para mantener un estándar de calidad y prevenir fallos en producción, el proyecto tiene hooks automáticos:

- **Pre-commit:** Ejecuta `pnpm check` para asegurar que no haya errores de sintaxis o de tipos antes de confirmar cambios.
- **Pre-push:** Ejecuta `pnpm build` para validar que el proyecto compila correctamente antes de subirlo al repositorio remoto.

### CI/CD (GitHub Actions)

Al hacer push a la rama `main`, se activa el workflow `.github/workflows/sftp-deploy.yml` que:

1. Descarga el código e instala Node.js / `pnpm`.
2. Ejecuta el proceso de build (`pnpm build`).
3. Transfiere de manera segura el contenido del directorio `./dist/` a la ruta remota del servidor web usando SFTP.

---

Desarrollado con ❤️ por [John Toro](https://www.jatc.co)
