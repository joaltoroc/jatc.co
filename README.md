# Portafolio Personal - John Alexander Toro Cortés

Este es el repositorio del portafolio personal de John Alexander Toro Cortés, accesible en [jatc.co](https://jatc.co). Está construido sobre **Astro (v7)** y diseñado para ser un sitio estático de altísimo rendimiento, totalmente accesible, bilingüe, seguro y con soporte nativo de temas.

---

## 🚀 Stack Tecnológico

El proyecto está diseñado bajo un enfoque moderno y minimalista, priorizando el rendimiento bruto y la mantenibilidad:

- **Framework principal:** [Astro (v7.0.5)](https://astro.build/)
- **Lenguaje:** TypeScript / HTML5 Semántico
- **Estilos:** CSS nativo y modularizado (`src/styles/global.css`) procesado con **LightningCSS** para minificación avanzada.
- **Entorno de ejecución:** Node.js `>=24.0.0`
- **Gestor de paquetes:** [pnpm (v11.9.0)](https://pnpm.io/)
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
- Soporte de impresión optimizado: fuerza de forma temporal el tema claro al imprimir documentos físicos (`beforeprint` y `afterprint`).

### 🚀 Rendimiento de Vanguardia (Performance SEO)

- **Compresión nativa:** Generación de recursos pre-comprimidos en formatos **Gzip (.gz)** y **Brotli (.br)** mediante `vite-plugin-compression` para una carga instantánea.
- **Carga de fuentes optimizada (Self-Hosted):** La tipografía variable `Inter` se aloja de manera local para eliminar dependencias externas y se pre-carga de forma prioritaria.
- **Ajuste de métricas de fuentes fallbacks:** Implementación de un stack de fuentes fallbacks utilizando `@font-face` con descriptores `size-adjust`, `ascent-override` y `descent-override` para emparejar la tipografía local (`Arial`) con `Inter Variable`, eliminando saltos visuales y previniendo cambios en el CLS.
- **Optimización LCP (Largest Contentful Paint):** La imagen principal (`/jatc.webp`) se pre-carga de forma prioritaria mediante tags `<link rel="preload" fetchpriority="high">`.
- **Formato de URL limpia:** Configuración de compilación `directory` en Astro para URLs sin la extensión `.html`.
- **Carga diferida de Analytics:** Google Tag Manager se carga únicamente tras la primera interacción real del usuario (click, scroll, keydown, touchstart) o después de 10 segundos de inactividad, evitando competir por el hilo principal y mejorando la métrica LCP en auditorías móviles.

### 🛡️ Seguridad Avanzada (DevSecOps)

- **Content Security Policy (CSP):** Directiva estricta configurada mediante metaetiquetas en el Layout base para restringir la ejecución de scripts no autorizados, previniendo ataques XSS.
- **Protección contra Cosechadores de Datos (AI Agents):** Configuración explícita en `robots.txt` que restringe el acceso de más de 20 agentes y scrapers de Inteligencia Artificial (como `GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, etc.) para proteger los datos y derechos de autor del portafolio.
- Sanitización de enlaces y APIs seguras.

### 📱 Experiencia de Usuario & Accesibilidad (UX/UI)

- Interfaz 100% responsiva bajo metodología "mobile-first".
- **Enlaces rápidos de sección:** Generación automática de botones interactivos para copiar el enlace de anclaje directo de cada sección con retroalimentación visual al usuario.
- Navegación mejorada con botón flotante "Scroll to Top" e indicadores de sección activa en la barra de direcciones en tiempo real (mediante `IntersectionObserver`).

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
│   │   ├── ScrollToTop.astro  # Botón flotante para regresar arriba
│   │   ├── Skills.astro       # Habilidades técnicas organizadas por categorías
│   │   └── ThemeToggle.astro  # Botón selector del tema Light/Dark
│   ├── i18n/                  # Lógica de traducción, diccionarios (ui.ts, utils.ts)
│   ├── layouts/               # Plantillas estructurales de la web (Layout.astro)
│   ├── pages/                 # Enrutamiento estático (index.astro, en/index.astro)
│   └── styles/                # Variables CSS, paleta de colores y estilos globales
├── astro.config.mjs           # Configuración detallada de Astro e integraciones
├── package.json               # Dependencias del proyecto y scripts npm
└── tsconfig.json              # Configuración de TypeScript
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

Desarrollado con ❤️ por [John Toro](https://jatc.co)
