# Portafolio - John Alexander Toro Cortés

Este es el repositorio del portafolio personal de John Alexander Toro Cortés, construido con [Astro](https://astro.build) (v6). Un sitio de alto rendimiento, bilingüe y con soporte de temas.

## ✨ Características Principales

- 🌍 **Bilingüe:** Soporte completo para Español (ES) e Inglés (EN).
- 🌓 **Temas:** Modos Claro (Light) y Oscuro (Dark) con persistencia.
- 🚀 **Rendimiento:** Optimizado con imágenes WebP, compresión Gzip/Brotli y CSS crítico.
- 🔍 **SEO Pro:** Meta etiquetas avanzadas, Open Graph, Twitter Cards y Sitemap automático.
- 📱 **Responsive:** Diseño adaptable para todos los dispositivos con enfoque "mobile-first".
- 🛡️ **Seguridad:** Implementación de Content Security Policy (CSP) y prácticas de DevSecOps.

## 🚀 Estructura del Proyecto

```text
/
├── public/                # Archivos estáticos (favicon, imágenes, diplomas)
├── src/
│   ├── components/        # Componentes UI modulares
│   ├── i18n/              # Lógica de traducción y diccionarios
│   ├── layouts/           # Plantilla base y metadatos (Layout.astro)
│   ├── pages/             # Rutas (Soporta / y /en/)
│   └── styles/            # CSS Global y variables de diseño
├── astro.config.mjs       # Configuración avanzada de Astro
└── package.json           # Scripts y dependencias
```

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instala las dependencias del proyecto            |
| `pnpm dev`                | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`              | Compila el sitio para producción en `./dist/`    |
| `pnpm preview`            | Previsualiza el sitio compilado localmente       |
| `pnpm check`              | Verifica errores de tipos y sintaxis en Astro    |

---
Desarrollado con ❤️ por [John Toro](https://jatc.co)
