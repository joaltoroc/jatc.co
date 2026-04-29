# Contexto del Proyecto: JATC Portafolio

Este documento describe la estructura y configuración del portafolio web personal de John Alexander Toro Cortés.

## 🛠 Stack Tecnológico
- **Framework:** [Astro](https://astro.build/) (v6.1.10)
- **Estilos:** CSS nativo (`src/styles/global.css`) con soporte para temas.
- **Tipografías:** Google Fonts (Inter) con carga optimizada.
- **Gestor de Paquetes:** `pnpm`
- **Lenguaje Principal:** TypeScript / HTML semántico / Astro
- **Internacionalización (i18n):** Soporte bilingüe (ES/EN) con enrutamiento basado en carpetas.
- **Node.js:** Versión `>=22.12.0`

## 📁 Estructura del Proyecto

El proyecto se basa en una arquitectura de componentes modulares y estáticos:

```text
/
├── public/                # Recursos estáticos (imágenes, iconos, favicon, etc.)
├── src/                   # Código fuente
│   ├── components/        # Componentes modulares de la UI:
│   │   ├── Header.astro     # Navegación principal e idioma
│   │   ├── ThemeToggle.astro # Selector de tema Light/Dark
│   │   ├── Hero.astro       # Sección de inicio (LCP optimizado)
│   │   ├── About.astro      # Perfil profesional
│   │   ├── Experience.astro # Trayectoria laboral bilingüe
│   │   ├── Education.astro  # Formación académica
│   │   ├── Courses.astro    # Certificaciones y cursos
│   │   ├── Skills.astro     # Stack tecnológico y habilidades
│   │   ├── Contact.astro    # Formulario e información de contacto
│   │   ├── ScrollToTop.astro # Botón flotante de navegación
│   │   └── Footer.astro     # Pie de página
│   ├── i18n/              # Configuración y diccionarios de idiomas (ui.ts, utils.ts)
│   ├── layouts/           # Plantilla base (Layout.astro con SEO y Meta avanzados)
│   ├── pages/             # Rutas (index.astro para ES, /en/index.astro para EN)
│   └── styles/            # Reglas globales de CSS y variables de tema
├── astro.config.mjs       # Configuración del framework (format: 'directory')
└── package.json           # Dependencias y scripts
```

## 💡 Estado Actual y Características
El proyecto es un portafolio de alto rendimiento, optimizado para SEO y experiencia de usuario:
- **Tema Dual:** Soporte para modo Claro (por defecto) y Oscuro, con persistencia en `localStorage` y prevención de parpadeo (flash) mediante script crítico en el `<head>`.
- **Bilingüe:** Soporte completo para Español e Inglés mediante un sistema i18n ligero.
- **Performance:** 
  - Formato de build `directory` para URLs limpias.
  - Compresión Gzip y Brotli activa en el build de Vite.
  - Pre-carga (preload) optimizada de imágenes LCP (.webp).
  - Uso de `lightningcss` para minificación eficiente.
- **SEO Avanzado:** Metadatos bilingües consolidados, Open Graph, Twitter Cards y etiquetas `hreflang` para indexación internacional.
- **Accesibilidad:** Uso de HTML semántico y etiquetas ARIA en componentes interactivos.

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo local.
- `pnpm build`: Compila la aplicación para producción en la carpeta `./dist/`.
- `pnpm preview`: Previsualiza la versión compilada localmente.
- `pnpm check`: Valida la integridad de los archivos Astro y tipos de TypeScript.
