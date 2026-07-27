# Contexto del Proyecto: JATC Portafolio

Este documento describe la estructura y configuración del portafolio web personal de John Alexander Toro Cortés.

## 🛠 Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (v7.0.9)
- **Estilos:** CSS nativo (`src/styles/global.css`) con soporte para temas (escala de tokens semántica integrada), procesado con **LightningCSS**.
- **Tipografías:** Google Fonts (Space Grotesk para títulos y Inter para cuerpo) auto-albergadas con precarga y fallback optimizado.
- **Gestor de Paquetes:** `pnpm` (v11.10.0)
- **Lenguaje Principal:** TypeScript (v6.0.3) / HTML semántico / Astro
- **Internacionalización (i18n):** Soporte bilingüe (ES/EN) con enrutamiento basado en carpetas.
- **Node.js:** Versión `>=24.0.0`

## 📁 Estructura del Proyecto

El proyecto se basa en una arquitectura de componentes modulares y estáticos:

```text
/
├── .github/
│   └── workflows/
│       └── sftp-deploy.yml    # Pipeline de despliegue continuo mediante SFTP
├── .husky/                    # Automatización de Git Hooks (pre-commit y pre-push)
├── public/                # Recursos estáticos (imágenes, iconos, favicon, etc.)
├── src/                   # Código fuente
│   ├── components/        # Componentes modulares de la UI:
│   │   ├── Header.astro     # Navegación principal e idioma
│   │   ├── ThemeToggle.astro # Selector de tema Light/Dark
│   │   ├── Hero.astro       # Sección de inicio (LCP optimizado)
│   │   ├── About.astro      # Perfil profesional
│   │   ├── Experience.astro # Trayectoria laboral bilingüe
│   │   ├── Projects.astro   # Proyectos destacados (GitHub Helpers)
│   │   ├── Education.astro  # Formación académica
│   │   ├── Courses.astro    # Certificaciones y cursos
│   │   ├── Skills.astro     # Stack tecnológico y habilidades
│   │   ├── Contact.astro    # Formulario e información de contacto
│   │   ├── ScrollToTop.astro # Botones flotantes de navegación e impresión
│   │   └── Footer.astro     # Pie de página
│   ├── i18n/              # Configuración y diccionarios de idiomas (ui.ts, utils.ts)
│   ├── layouts/           # Plantilla base (Layout.astro con SEO y Meta avanzados)
│   ├── pages/             # Rutas (index.astro, 404.astro y carpeta en/)
│   └── styles/            # Reglas globales de CSS y variables de tema
├── ADR.md                 # Registro de Decisiones de Arquitectura (Architecture Decision Record)
├── astro.config.mjs       # Configuración del framework (format: 'directory')
├── LICENSE                # Términos de uso y copia restrictiva
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
├── vitest.config.ts       # Configuración de Vitest para pruebas unitarias
└── tests/                 # Suite de pruebas unitarias
```

## 💡 Estado Actual y Características

El proyecto es un portafolio de alto rendimiento, optimizado para SEO y experiencia de usuario:

- **Tema Dual:** Soporte para modo Claro (por defecto) y Oscuro, con persistencia en `localStorage` y prevención de parpadeo (flash) mediante script crítico en el `<head>`.
- **Bilingüe:** Soporte completo para Español e Inglés mediante un sistema i18n ligero.
- **Performance:**
  - Formato de build `directory` para URLs limpias.
  - Compresión Gzip y Brotli activa en el build de Vite.
  - Pre-carga (preload) de las fuentes críticas (`Inter` y `Space Grotesk`) e implementación de font fallback stacks optimizados con `size-adjust` para eliminar desplazamientos de diseño (CLS).
  - Compilación y optimización de scripts de cliente: Todos los scripts interactivos se compilan, minifican y empaquetan a través del pipeline nativo de Astro/Vite en lugar de servirse in-line, reduciendo el tamaño del HTML y optimizando la firma de seguridad (CSP).
  - Optimización de animaciones móviles: Animación del cursor de la terminal optimizada mediante propiedades compuestas por GPU (opacidad) para evitar parpadeos de color no optimizados y reducir el bloqueo de hilos principales (PageSpeed).
- **Accesibilidad y UX:**
  - Enlace accesible "Skip to main content" (saltar al contenido) para navegación rápida con teclado (WCAG 2.4.1).
  - Sincronización activa de links en el menú de navegación (Header) según la sección de la página visible durante el scroll, con controles flotantes de "Scroll to Top" e impresión rápida de página (optimizados por posicionamiento absoluto y transiciones mediante variables CSS nativas, ocultándose durante la impresión).
  - Widget simulador de consola CLI en la sección Hero destacando métricas de seguridad (OWASP) y DevSecOps.
  - Modal interactivo de visualización de diplomas en [Courses.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Courses.astro) con paginación lateral, panel de información (título, emisor y fecha), navegación mediante teclado (flechas Izquierda/Derecha y tecla Escape para cerrar) y sincronización ARIA dinámica (`aria-label`) del título del encabezado.
  - Visualización directa y copiado al portapapeles rápido para datos clave de contacto (Email, LinkedIn y GitHub) con feedback mediante tooltips en [Contact.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Contact.astro).
  - Pre-carga (preload) optimizada de imágenes LCP (.webp) y orden de carga estructurado (`loading="lazy"` / `"eager"`) según la visibilidad en el fold del viewport para conseguir 0 advertencias de auditorías de rendimiento.
  - Uso de `lightningcss` para minificación eficiente.
- **SEO Avanzado:** Metadatos bilingües consolidados, Open Graph, Twitter Cards y etiquetas `hreflang` para indexación internacional.
- **Seguridad de Agentes (robots.txt):** Restricción explícita en `robots.txt` a más de 20 crawlers de IA/LLMs (e.g., `GPTBot`, `ClaudeBot`, `CCBot`) para evitar entrenamiento sin consentimiento.
- **Seguridad y CSP (.htaccess):** Directiva estricta de Content Security Policy (CSP) con protección anti-clickjacking (`frame-ancestors 'none'`) configurada mediante cabeceras HTTP en `.htaccess` para máxima protección en producción. Inclusión de cabeceras HSTS (`Strict-Transport-Security`), COOP (`Cross-Origin-Opener-Policy`) y `X-XSS-Protection`. Uso de `overrides` en `pnpm-workspace.yaml` para neutralizar vulnerabilidades DoS en dependencias transitivas (como `brace-expansion` traída por `eslint-plugin-jsx-a11y`). Bloqueo de versión de TypeScript en la v6.x debido a incompatibilidades de API en TS 7.0+ con la suite de verificación de Astro.
- **Accesibilidad:** Uso de HTML semántico y etiquetas ARIA en componentes interactivos.

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo local.
- `pnpm build`: Compila la aplicación para producción en la carpeta `./dist/`.
- `pnpm preview`: Previsualiza la versión compilada localmente.
- `pnpm check`: Valida la integridad de los archivos Astro y tipos de TypeScript.
