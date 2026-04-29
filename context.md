# Contexto del Proyecto: JATC Portafolio

Este documento describe la estructura y configuración del portafolio web personal de John Alexander Toro Cortés.

## 🛠 Stack Tecnológico
- **Framework:** [Astro](https://astro.build/) (v6.1.10)
- **Estilos:** CSS nativo (`src/styles/global.css`)
- **Tipografías:** Google Fonts (Inter)
- **Gestor de Paquetes:** `pnpm`
- **Lenguaje Principal:** JavaScript / HTML semántico / Astro
- **Node.js:** Versión `>=22.12.0`

## 📁 Estructura del Proyecto

El proyecto se basa en una arquitectura "One-Page" (Single Page) componetizada:

```text
/
├── public/                # Recursos estáticos (imágenes, iconos, etc.)
├── src/                   # Código fuente
│   ├── components/        # Componentes modulares que conforman las secciones de la página:
│   │   ├── Header.astro   # Navegación principal
│   │   ├── Hero.astro     # Sección de inicio/presentación
│   │   ├── About.astro    # Sobre mí
│   │   ├── Experience.astro # Experiencia laboral
│   │   ├── Education.astro # Educación formal
│   │   ├── Courses.astro  # Cursos y certificaciones
│   │   ├── Skills.astro   # Habilidades técnicas y blandas
│   │   ├── Contact.astro  # Información de contacto
│   │   └── Footer.astro   # Pie de página
│   ├── layouts/           # Plantillas base (Layout.astro con la estructura HTML general)
│   ├── pages/             # Rutas (index.astro ensambla todos los componentes)
│   └── styles/            # Reglas globales de CSS
├── astro.config.mjs       # Configuración del framework
└── package.json           # Dependencias y metadatos
```

## 💡 Estado Actual
El proyecto ha evolucionado de una plantilla básica a un portafolio funcional y completo.
- Se ha eliminado la página de bienvenida por defecto (`Welcome.astro`).
- Todas las secciones del currículum y experiencia están implementadas en componentes independientes dentro de `src/components/`.
- El diseño utiliza CSS puro sin dependencias de frameworks externos como Tailwind, aprovechando variables CSS para mantener un sistema de diseño consistente.

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo local (normalmente en `http://localhost:4321`).
- `pnpm build`: Compila la aplicación para producción en la carpeta `./dist/`.
- `pnpm preview`: Previsualiza la versión compilada localmente antes de desplegar.
