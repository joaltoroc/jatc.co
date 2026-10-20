# Portafolio Personal - John Alexander Toro Cortés

[![Deploy via SFTP](https://img.shields.io/github/actions/workflow/status/joaltoroc/jatc.co/sftp-deploy.yml?branch=main&label=Deploy&logo=github&style=flat-square)](https://github.com/joaltoroc/jatc.co/actions/workflows/sftp-deploy.yml)
![Tests Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen?style=flat-square&logo=vitest)
![Security: Gitleaks](https://img.shields.io/badge/security-gitleaks--clean-success?style=flat-square&logo=gitleaks)
[![Version](https://img.shields.io/badge/version-v0.7.0-2563eb?style=flat-square)](./CHANGELOG.md)
[![Profile Views](https://gitcard-studio.creativecode.com.co/api/badge?username=joaltoroc&type=views&color=38bdf8)](https://gitcard-studio.creativecode.com.co/)

Este es el repositorio del portafolio personal de **John Alexander Toro Cortés**, accesible en [www.jatc.co](https://www.jatc.co). Está construido sobre **Astro (v7)** y diseñado bajo principios de **Clean Architecture**, **Apple Design** y **DevSecOps** para ofrecer un sitio estático de altísimo rendimiento, accesible (WCAG 2.2), bilingüe (ES/EN), seguro y con soporte offline mediante PWA.

---

## 🚀 Stack Tecnológico

El proyecto prioriza el rendimiento bruto, la seguridad en la cadena de suministro y la mantenibilidad a largo plazo:

- **Framework principal:** [Astro (v7.4.1)](https://astro.build/) — Generación estática (SSG) con cero JavaScript innecesario en el cliente.
- **Lenguaje:** [TypeScript (v6.0.3)](https://www.typescriptlang.org/) / HTML5 Semántico.
- **Estilos:** CSS nativo y modularizado (`src/styles/global.css`) con sistema de tokens semánticos procesado con **LightningCSS (v1.33.0)**.
- **Entorno de ejecución:** Node.js `>=24.0.0`.
- **Gestor de paquetes:** [pnpm (v12.14.0)](https://pnpm.io/) con políticas estrictas de integridad y bloqueo de compilaciones no autorizadas.
- **Calidad, Linting y Testing:** [Vitest (v5.0.5)](https://vitest.dev/), ESLint (v10.13.0), Prettier (v3.9.10), `@astrojs/check` (v0.9.11) y [Husky (v9.1.7)](https://typicode.github.io/husky/).
- **CI/CD:** GitHub Actions con instalación determinista (`--frozen-lockfile`), auditoría de tipos/tests y despliegue automatizado por SFTP.

---

## ✨ Características Principales y Mejoras Recientes

### 🌍 Internacionalización (i18n) Bilingüe y SEO para IA

- **Enrutamiento limpio por directorios:** Español por defecto en `/` e Inglés en `/en/`.
- **Diccionarios tipados con paridad verificada:** Sistema de traducciones estático en `src/i18n/` validado mediante pruebas unitarias (`tests/i18n.test.ts`) para garantizar que no existan claves faltantes ni traducciones vacías entre idiomas.
- **SEO Internacional y Datos Estructurados:** Etiquetas `hreflang`, `x-default`, Open Graph, Twitter Cards con control de caché (`?v=0.7.0`) y grafo JSON-LD (`Person`, `WebSite`).
- **Contexto Estructurado para LLMs (`llm.txt` / `llms.txt`):** Archivos públicos estandarizados en `/llm.txt` y `/llms.txt` sincronizados y verificados por tests (`tests/llm.test.ts`) para ofrecer información profesional estructurada a asistentes de IA autorizados.

### 🌓 Gestión del Tema (Light/Dark Mode) e Impresión Profesional

- **Persistencia sin parpadeo (Zero-FOUC):** Script crítico síncrono inline en `<head>` que evalúa `localStorage` y `prefers-color-scheme` antes del primer pintado para aplicar `.dark` de forma instantánea.
- **Exportación a PDF / Impresión de Currículum:**
  - Fuerza temporalmente el tema claro durante la impresión (`beforeprint` / `afterprint`).
  - Reglas estandarizadas de salto de página (`break-before: page; page-break-before: always;`) por cada sección principal con márgenes de caja `@page { size: portrait; margin: 2.5cm 2.4cm 2cm 2.4cm; }`.
  - Limpieza automática de máscaras de degradado, sombras (`drop-shadow`), resplandores (`blur`) y elementos interactivos (modales, terminal y botones flotantes) para obtener un PDF nítido en escritorio y móviles.

### ⚡ Rendimiento de Vanguardia (Core Web Vitals)

- **Pre-compresión estática dual:** Generación de activos en formatos **Gzip (`.gz`)** y **Brotli (`.br`)** durante el build mediante `vite-plugin-compression`.
- **Caché inmutable de 1 año:** Configuración en `.htaccess` de `Cache-Control: public, max-age=31536000, immutable` para activos estáticos versionados en `/_astro/` y revalidación inmediata (`max-age=0, must-revalidate`) para documentos HTML/XML/TXT.
- **Tipografías locales optimizadas (Self-Hosted):** Fuentes variables `Inter` y `Space Grotesk` alojadas localmente con precarga prioritaria (`fetchpriority="high"`), `font-display: swap` y ajuste métrico (`size-adjust`) sobre fallbacks locales (`Arial`) para eliminar cambios de diseño acumulados (**CLS = 0**).
- **Optimización LCP y GPU Compositing:**
  - Precarga de alta prioridad de la imagen de perfil en formato `.webp` optimizado.
  - Desacoplamiento de lecturas geométricas (`scrollHeight`, `scrollY`) y escrituras DOM con `requestAnimationFrame()` en [`Hero.astro`](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Hero.astro) y [`ScrollToTop.astro`](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/ScrollToTop.astro) para evitar _Forced Reflows_.
  - Animaciones del cursor de la terminal CLI compuestas por GPU (`opacity`) para eliminar repintados en el hilo principal.
- **Carga diferida de Analítica:** Google Tag Manager se inyecta únicamente tras la primera interacción real del usuario o después de 10 segundos de inactividad.

### 🛡️ Seguridad Avanzada (DevSecOps & Hardening)

- **Content Security Policy (CSP) con Verificación Automatizada de Hashes:**
  - Directiva `Content-Security-Policy` estricta en [`public/.htaccess`](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/public/.htaccess) sin `unsafe-inline` en `script-src`, autorizando únicamente hashes criptográficos `sha256-...` exactos de los scripts compilados.
  - **Validación automática en Vitest (`tests/sync.test.ts`):** Verifica en cada ejecución que todos los `<script>` del HTML compilado en `dist/` coincidan exactamente 1:1 con los hashes declarados en `.htaccess` (sin hashes faltantes ni huérfanos).
- **Cabeceras HTTP de Seguridad:** Configuración de `Strict-Transport-Security` (HSTS con `preload`), `Cross-Origin-Opener-Policy` (`same-origin`), `Cross-Origin-Resource-Policy` (`same-origin`), `X-Content-Type-Options` (`nosniff`), `X-Frame-Options` (`DENY`), `frame-ancestors 'none'` y `Permissions-Policy`.
- **Protección de Cadena de Suministro (`pnpm-workspace.yaml`):**
  - Restricción explícita de scripts de compilación mediante `allowBuilds` únicamente para `esbuild` y `sharp`.
  - Depuración estricta de `minimumReleaseAgeExclude` exclusivamente para versiones activas auditadas y `overrides` para forzar versiones parcheadas en dependencias transitivas (**0 vulnerabilidades**).
- **Identidad de Correo Verificada (BIMI):** Inclusión de activos vectoriales estandarizados (`public/bimi-logo.svg` y `public/bimi.svg`) para autenticación visual de marca en clientes de correo compatibles con DMARC/BIMI.
- **Control de Scrapers de IA (`robots.txt`):** Bloqueo explícito de más de 20 bots de raspado de entrenamiento no consentido (`GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, etc.), permitiendo únicamente la lectura de `/llm.txt` y `/llms.txt`.

### 📱 Experiencia de Usuario & Accesibilidad (WCAG 2.2 + Apple Design)

- **Apple Design System & Fluid Motion:** Superficies translúcidas (`backdrop-filter: blur(20px) saturate(180%)`), tipografía óptica (`letter-spacing: -0.025em`) y respuesta táctil elástica (`cubic-bezier(0.16, 1, 0.3, 1)`), respetando `@media (prefers-reduced-motion)` y `@media (prefers-reduced-transparency)`.
- **Cumplimiento WCAG 2.2:** Enlace _Skip to main content_, áreas táctiles mínimas de `44px`, atributos `inert` y `aria-modal="true"` en modales y menú móvil, estados `aria-pressed` en filtros interactivos y restauración automática de foco al cerrar diálogos.
- **Consola Terminal CLI Interactiva (`Hero.astro`):** Soporta comandos en vivo (`help`, `whoami`, `skills`, `experience`, `projects`, `contact`, `cv`, `theme`, `version`, `matrix`, `clear`, `sudo`), autocompletado con tecla `Tab` e historial de comandos con flechas `Arriba`/`Abajo`.
- **Filtro Cruzado de Tecnologías (`Skills.astro`):** Selección interactiva de tecnologías que resalta en tiempo real las tarjetas asociadas en Experiencia y Proyectos.
- **Service Worker PWA Versionado (`public/sw.js`):** Caché offline sincronizada con la versión activa del proyecto (`jatc-portfolio-v0.7.0`) y validada mediante tests automatizados.

---

## 📊 Muestra en Vivo — GitCard Studio

Como muestra de integración de uno de los proyectos destacados de código abierto incluidos en este portafolio (**[GitCard Studio](https://github.com/creativecodeco/gitcard-studio)**), a continuación se renderizan en tiempo real las tarjetas SVG de telemetría de GitHub para `@joaltoroc`:

> 🎨 **Estudio Interactivo en Vivo:** Personaliza temas, idiomas, colores y diseños en **[https://gitcard-studio.creativecode.com.co/](https://gitcard-studio.creativecode.com.co/)**

<div align="center">

|                                                                                📊 Estadísticas Generales (`dark`)                                                                                 |                                                                                     💻 Lenguajes más Usados (`tokyonight`)                                                                                     |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Tarjeta de Estadísticas](https://gitcard-studio.creativecode.com.co/api/stats?username=joaltoroc&theme=dark&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=dark) | [![Tarjeta de Lenguajes](https://gitcard-studio.creativecode.com.co/api/languages?username=joaltoroc&theme=tokyonight&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=tokyonight) |

|                                                                             📅 Matriz de Hábitos de Commit 7x24 (`neon`)                                                                              |                                                                                  🔥 Racha de Contribuciones (`radical`)                                                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Matriz de Hábitos](https://gitcard-studio.creativecode.com.co/api/commit-activity?username=joaltoroc&theme=neon&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=neon) | [![Racha de Contribuciones](https://gitcard-studio.creativecode.com.co/api/streak?username=joaltoroc&theme=radical&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=radical) |

|                                                                                    🎖️ Rango de Desarrollador (`glassmorphism`)                                                                                    |                                                                             🏆 Trofeos e Hitos en GitHub (`dark`)                                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Rango de Desarrollador](https://gitcard-studio.creativecode.com.co/api/rank?username=joaltoroc&theme=glassmorphism&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=glassmorphism) | [![Trofeos en GitHub](https://gitcard-studio.creativecode.com.co/api/trophies?username=joaltoroc&theme=dark&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=dark) |

</div>

### 📡 Ejemplo de Uso en Markdown (`GitCard Studio`)

Puedes incrustar estas tarjetas dinámicas en cualquier `README.md` apuntando a la API de **GitCard Studio**:

```markdown
<!-- Tarjeta de Estadísticas Generales -->

[![GitHub Stats](https://gitcard-studio.creativecode.com.co/api/stats?username=joaltoroc&theme=dark&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=dark)

<!-- Tarjeta de Lenguajes más Usados -->

[![Top Languages](https://gitcard-studio.creativecode.com.co/api/languages?username=joaltoroc&theme=tokyonight&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=tokyonight)

<!-- Matriz 7x24 de Actividad de Commits -->

[![Commit Activity](https://gitcard-studio.creativecode.com.co/api/commit-activity?username=joaltoroc&theme=neon&locale=es)](https://gitcard-studio.creativecode.com.co/?user=joaltoroc&theme=neon)

<!-- Badge de Visitas de Perfil -->

[![Profile Views](https://gitcard-studio.creativecode.com.co/api/badge?username=joaltoroc&type=views&color=38bdf8)](https://gitcard-studio.creativecode.com.co/)
```

---

## 📁 Estructura del Proyecto

```text
/
├── .github/
│   └── workflows/
│       └── sftp-deploy.yml    # Pipeline CI/CD (lint, check, test, build y despliegue SFTP)
├── .husky/                    # Automatización de Git Hooks
│   ├── pre-commit             # Ejecuta pnpm check && pnpm test antes de confirmar cambios
│   └── pre-push               # Ejecuta pnpm build antes de subir cambios al remoto
├── public/                    # Activos estáticos (.htaccess, sw.js, llm.txt, llms.txt, bimi-logo.svg, diplomas, iconos)
├── src/
│   ├── assets/                # Imagen principal procesada por Astro Assets (jatc.webp)
│   ├── components/            # Componentes modulares de Astro
│   │   ├── About.astro        # Sección de perfil profesional y métricas clave
│   │   ├── Contact.astro      # Formulario e información de contacto con copiado rápido
│   │   ├── Courses.astro      # Certificaciones con visor modal interactivo y paginación
│   │   ├── Education.astro    # Trayectoria de formación académica
│   │   ├── Experience.astro   # Historial profesional bilingüe filtrable por tecnología
│   │   ├── Footer.astro       # Pie de página y créditos
│   │   ├── Header.astro       # Navegación principal, drawer móvil accesible y selector de idioma
│   │   ├── Hero.astro         # Presentación principal con LCP optimizado y consola CLI interactiva
│   │   ├── Projects.astro     # Proyectos destacados con modal de detalles de arquitectura
│   │   ├── ScrollToTop.astro  # Acciones flotantes (volver arriba e imprimir CV en PDF)
│   │   ├── Skills.astro       # Matriz de habilidades con filtro cruzado interactivo
│   │   └── ThemeToggle.astro  # Selector de tema Claro/Oscuro
│   ├── i18n/                  # Diccionarios bilingües y utilidades (ui.ts, utils.ts)
│   ├── layouts/               # Plantilla estructural con SEO, Open Graph y JSON-LD (Layout.astro)
│   ├── pages/                 # Rutas estáticas (index.astro, 404.astro, en/index.astro)
│   └── styles/                # Sistema de diseño, tokens CSS y estilos de impresión (global.css)
├── tests/                     # Suite de pruebas unitarias e integridad con Vitest
│   ├── i18n.test.ts           # Paridad de claves y validación de traducciones ES/EN
│   ├── llm.test.ts            # Consistencia de archivos públicos llm.txt y llms.txt
│   ├── sync.test.ts           # Sincronización de versiones (package.json, CLI, PWA, docs) y hashes CSP
│   └── utils.test.ts          # Pruebas unitarias de funciones auxiliares de i18n y rutas
├── ADR.md                     # Registro de Decisiones de Arquitectura (Architecture Decision Record)
├── CHANGELOG.md               # Historial detallado de versiones y cambios del proyecto
├── context.md                 # Contexto técnico y arquitectónico del proyecto
├── astro.config.mjs           # Configuración de Astro, Sitemap, Robots.txt y compresión Gzip/Brotli
├── eslint.config.mjs          # Configuración plana (Flat Config) de ESLint v10 + Astro + A11y
├── package.json               # Dependencias, scripts y definición estricta de packageManager
├── pnpm-workspace.yaml        # Políticas de seguridad de pnpm (allowBuilds, overrides, exclusiones)
├── tsconfig.json              # Configuración estricta de TypeScript
└── vitest.config.ts           # Configuración del runner de pruebas Vitest
```

---

## 🧞 Comandos y Desarrollo Local

Este proyecto utiliza `pnpm` (`v12.14.0`) como gestor de paquetes. Asegúrate de contar con Node.js `>=24.0.0`.

| Comando              | Descripción                                                                                    |
| :------------------- | :--------------------------------------------------------------------------------------------- |
| `pnpm install`       | Instala las dependencias respetando `pnpm-lock.yaml` y las políticas de `pnpm-workspace.yaml`. |
| `pnpm dev`           | Inicia el servidor de desarrollo local con HMR en `http://localhost:4321`.                     |
| `pnpm check`         | Ejecuta el analizador estático de Astro y validación de tipos de TypeScript.                   |
| `pnpm lint`          | Analiza el código fuente con ESLint (TypeScript, Astro y reglas de accesibilidad JSX A11y).    |
| `pnpm run format`    | Formatea todos los archivos con Prettier y corrige problemas automáticos de ESLint.            |
| `pnpm test`          | Ejecuta la suite de pruebas unitarias y de sincronización con Vitest.                          |
| `pnpm test:coverage` | Ejecuta las pruebas unitarias generando reporte de cobertura con `@vitest/coverage-v8`.        |
| `pnpm build`         | Verifica tipos (`astro check`) y compila el sitio estático para producción en `./dist/`.       |
| `pnpm preview`       | Sirve localmente la compilación generada en `./dist/` para inspección previa al despliegue.    |

---

## 🤖 Automatización y DevOps

### Git Hooks (Husky)

- **Pre-commit (`.husky/pre-commit`):** Ejecuta `ASTRO_TELEMETRY_DISABLED=1 pnpm check && pnpm test` para garantizar cero errores de tipos y el paso total de los tests antes de cada commit.
- **Pre-push (`.husky/pre-push`):** Ejecuta `ASTRO_TELEMETRY_DISABLED=1 pnpm build` para asegurar que la compilación estática y los hashes CSP estén íntegros antes de publicar cambios.

### CI/CD (GitHub Actions)

Al hacer push a la rama `main`, el workflow [`.github/workflows/sftp-deploy.yml`](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/.github/workflows/sftp-deploy.yml) ejecuta:

1. **Configuración de entorno:** Instala `pnpm` (leyendo automáticamente `packageManager` desde `package.json`) y Node.js 24 con caché de dependencias.
2. **Instalación determinista:** Ejecuta `pnpm install --frozen-lockfile`.
3. **Puerta de Calidad (Quality Gate):** Ejecuta `pnpm lint`, `pnpm check` y `pnpm test`.
4. **Compilación de Producción:** Ejecuta `pnpm build` generando los activos optimizados y pre-comprimidos (`.gz` / `.br`) en `./dist/`.
5. **Despliegue Seguro:** Transfiere el directorio `./dist/` al servidor de producción mediante SFTP.

---

Desarrollado con ❤️ por [John Toro](https://www.jatc.co) · [Historial de Cambios (CHANGELOG.md)](./CHANGELOG.md)
