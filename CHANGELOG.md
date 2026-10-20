# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [0.7.0] - 2026-10-19

### 🚀 Estandarización de Plataforma, Seguridad CSP Automatizada y Muestra de GitCard Studio

- **Actualización y Estandarización de Gestor de Paquetes y Dependencias (`package.json`, `pnpm-lock.yaml`)**:
  - Estandarizada la versión de `pnpm` a **`v12.14.0`** en `package.json` (`packageManager`), `pnpm-lock.yaml` y en toda la documentación técnica (`README.md`, `context.md`, `ADR.md`).
  - Actualizado el framework principal **Astro** a **`v7.4.1`** y `@astrojs/check` a **`v0.9.11`**.
  - Actualizadas las herramientas de calidad y pruebas: **Vitest** y `@vitest/coverage-v8` a **`v5.0.5`**, **ESLint** a **`v10.13.0`**, `@typescript-eslint/*` a **`v8.72.0`**, **Prettier** a **`v3.9.10`** y `prettier-plugin-astro` a **`v1.1.1`**.
  - Verificada la retención de **TypeScript `v6.0.3`** como última versión compatible con `@astrojs/check@0.9.11` (`^5.0.0 || ^6.0.0`) y `@typescript-eslint/parser@8.72.0` (`<6.1.0`).
- **Endurecimiento de Seguridad CSP y Cadena de Suministro (`public/.htaccess`, `pnpm-workspace.yaml`)**:
  - Rotado el hash SHA-256 del script compilado de `Hero.astro` en la directiva `script-src` de `Content-Security-Policy` y eliminados 4 hashes antiguos huérfanos para mantener únicamente los 13 hashes activos del build.
  - Depurada la lista `minimumReleaseAgeExclude` en `pnpm-workspace.yaml`, eliminando 27 entradas históricas obsoletas y conservando únicamente las versiones activas en el lockfile.
  - Incorporados los activos vectoriales **BIMI** (`public/bimi-logo.svg` y `public/bimi.svg`) para verificación visual de identidad de marca en clientes de correo.
- **Nueva Suite de Pruebas de Sincronización e Integridad (`tests/sync.test.ts`)**:
  - Implementadas pruebas automatizadas en Vitest que verifican la consistencia de la versión del proyecto (`v0.7.0`), la versión de `Astro` (`v7.4.1`) y la versión de `pnpm` (`v12.14.0`) a través de `package.json`, `Hero.astro` (comando `version` del CLI), `Layout.astro` (parámetros `?v=` en Open Graph y Twitter), `public/sw.js` (`CACHE_NAME`) y archivos de documentación.
  - Añadida validación criptográfica automatizada que comprueba que todos los `<script>` inline generados en `dist/` coincidan exactamente 1:1 con los hashes `sha256-...` autorizados en `public/.htaccess`.
- **Optimización de PWA y Pipeline CI/CD (`public/sw.js`, `.github/workflows/sftp-deploy.yml`)**:
  - Actualizado el identificador de caché del Service Worker a `jatc-portfolio-v0.7.0` para invalidar cachés previas tras el despliegue.
  - Reemplazado `pnpm approve-builds` + `pnpm install` por `pnpm install --frozen-lockfile` en GitHub Actions para garantizar compilaciones deterministas y no interactivas.
- **Documentación y Muestra Interactiva de GitCard Studio (`README.md`, `context.md`, `CHANGELOG.md`)**:
  - Renovado `README.md` con el detalle completo de mejoras arquitectónicas, tabla de comandos e integración en vivo de tarjetas SVG dinámicas de **[GitCard Studio](https://gitcard-studio.creativecode.com.co/)** como muestra de uso.
  - Depuradas referencias obsoletas en `context.md` y estandarizada la documentación de márgenes de impresión PDF (`@page { size: portrait; margin: 2.5cm 2.4cm 2cm 2.4cm; }`).

---

## [0.6.0] - 2026-09-29

### 💼 Actualización de Perfil Profesional, Metadatos SEO y Seguridad en CLI

- **Actualización de Trayectoria y Perfil (`src/i18n/ui.ts`, `public/llm.txt`, `public/llms.txt`)**:
  - Actualizado el perfil profesional al rol de **Gerente de Desarrollo (Development Manager)** en **Banco Contactar** y sincronizados los textos bilingües (ES/EN), descripciones SEO y archivos de contexto para LLMs.
- **Seguridad DOM en Consola CLI (`src/components/Hero.astro`)**:
  - Reemplazado el uso de `innerHTML` por creación segura de nodos DOM (`createElement` / `createTextNode`) al renderizar comandos del usuario en la terminal interactiva, previniendo vectores de DOM XSS.
- **Sincronización de Versión (`package.json`, `src/layouts/Layout.astro`, `public/.htaccess`)**:
  - Actualizada la versión del proyecto a **`v0.6.0`**, rotados los parámetros de caché de imágenes Open Graph/Twitter (`?v=0.6.0`) y actualizados los hashes CSP en `.htaccess`.

---

## [0.5.0] - 2026-09-29

### 🧪 Pruebas de Contexto LLM, Estandarización de Plantillas y Linting

- **Validación de Archivos para LLMs (`tests/llm.test.ts`)**:
  - Añadida suite de pruebas unitarias para verificar la existencia, paridad exacta y contenido actualizado de `public/llm.txt` y `public/llms.txt`.
- **Refactorización de Componentes y Configuración (`src/components/*`, `eslint.config.mjs`, `.prettierrc.mjs`)**:
  - Estandarizado el formato de todos los componentes Astro con `prettier-plugin-astro` y reglas estrictas de ESLint Flat Config.
  - Sincronizados los hashes CSP en `public/.htaccess` y subida la versión a **`v0.5.0`**.

---

## [0.4.0] - 2026-08-31

### ♿ Accesibilidad WCAG 2.2, Autocompletado en CLI y Pruebas de i18n

- **Mejoras de Accesibilidad (WCAG 2.2 AA)**:
  - Añadido manejo del atributo `inert`, restauración automática de foco (`focus management`) al cerrar modales en `Courses.astro` y `Projects.astro`, y soporte de `inert` en el menú móvil de `Header.astro`.
  - Añadidos estados `aria-pressed` en los filtros interactivos de habilidades (`Skills.astro`).
- **Consola CLI y Pruebas Unitarias (`src/components/Hero.astro`, `tests/i18n.test.ts`)**:
  - Incorporado autocompletado de comandos mediante la tecla `Tab` en la terminal interactiva del Hero.
  - Removido el widget experimental `AiAssistant.astro` para simplificar la interfaz y reducir el peso del bundle.
  - Creada la suite `tests/i18n.test.ts` para asegurar paridad total de traducciones entre Español e Inglés.

---

## [0.3.0] - 2026-08-22

### 🍎 Apple Design System, Optimización de Impresión PDF y Dominio Canónico

- **Sistema de Diseño Apple (`src/styles/global.css`, `src/components/*`)**:
  - Implementados materiales translúcidos (`backdrop-filter: blur(20px) saturate(180%)`), tipografía óptica con tracking negativo, curvas de animación elásticas (`cubic-bezier(0.16, 1, 0.3, 1)`) y soporte para `prefers-reduced-motion` y `prefers-reduced-transparency`.
- **Impresión y Exportación a PDF Profesional**:
  - Configurados saltos de página por sección (`break-before: page`), márgenes `@page` dedicados y limpieza visual de sombras y degradados al imprimir.
- **Estandarización de URL Canónica**:
  - Unificado el dominio principal a `https://www.jatc.co` en toda la configuración, metadatos SEO, Sitemap y `robots.txt`.

---

## [0.2.0] - 2026-08-21

### 🖥️ Renovación Visual de Hero, Comando `version` en CLI y PWA Offline

- **Terminal CLI y Sección Hero (`src/components/Hero.astro`)**:
  - Añadido el comando `version` / `ver` a la consola interactiva del Hero y mejorada la presentación visual con métricas de impacto.
- **Soporte PWA, Filtros Cruzados y Cache-Busting (`public/sw.js`, `src/components/Skills.astro`, `src/layouts/Layout.astro`)**:
  - Incorporado Service Worker para soporte offline, filtrado cruzado interactivo entre habilidades, experiencia y proyectos, y parámetro `?v=` en imágenes de Open Graph y Twitter.

---

## [0.1.0] - 2026-08-19

### 🎉 Lanzamiento Inicial del Portafolio en Astro v7

- **Arquitectura Base Estática Bilingüe (`src/pages/`, `src/i18n/`, `src/layouts/Layout.astro`)**:
  - Construcción del portafolio personal en Astro v7 con TypeScript, soporte nativo para Español (`/`) e Inglés (`/en/`), modo Claro/Oscuro sin parpadeo (Zero-FOUC) y diseño 100% responsivo.
- **Secciones Modulares y Rendimiento**:
  - Implementación de componentes `Header`, `Hero`, `About`, `Experience`, `Projects`, `Education`, `Courses`, `Skills`, `Contact`, `ScrollToTop` y `Footer`.
  - Pre-compresión Gzip y Brotli, fuentes auto-hospedadas (`Inter` y `Space Grotesk`), cabeceras de seguridad CSP/HSTS en `.htaccess`, bloqueo de scrapers de IA en `robots.txt`, Git Hooks con Husky y despliegue continuo por SFTP con GitHub Actions.
