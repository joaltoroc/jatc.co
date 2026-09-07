# Architecture Decision Record (ADR)

Este documento registra las decisiones arquitectónicas clave del portafolio web personal de John Alexander Toro Cortés.

---

## 1. PURPOSE

El portafolio personal (disponible en [jatc.co](https://www.jatc.co)) tiene como propósito representar el perfil profesional de John Alexander Toro Cortés como Engineering Manager, Tech Lead y Especialista en Ciberseguridad. Los objetivos fundamentales del sitio son:

- **Rendimiento excepcional:** Tiempos de carga mínimos e instantáneos.
- **Seguridad robusta:** Reducción de la superficie de ataque y protección de datos.
- **Accesibilidad y SEO:** Cumplimiento de estándares de indexabilidad e inclusión.
- **Multilingüismo nativo:** Experiencia fluida tanto en español como en inglés.

---

## 2. STACK

El stack tecnológico seleccionado se enfoca en minimizar la sobrecarga (overhead) de JavaScript y maximizar el rendimiento de la compilación estática:

- **Framework Principal:** [Astro (v7.0.9)](https://astro.build/) - Elegido por su arquitectura de "islas", generación estática por defecto y cero JavaScript en el cliente.
- **Procesador de Estilos:** **LightningCSS** (integrado en Vite/Astro) - Utilizado para la minificación avanzada, autocompletado de prefijos de navegadores y transpilación rápida de CSS moderno.
- **Tipografías:** `Inter Variable` (auto-albergada mediante `@fontsource-variable/inter`) para evitar dependencias de CDNs externos, mejorar la privacidad de los usuarios y optimizar los tiempos de respuesta DNS.
- **Gestor de Paquetes:** **pnpm (v12.3.4)** - Adoptado por su velocidad, eficiencia de almacenamiento a través de enlaces duros, y rigurosidad con las dependencias (evitando dependencias fantasma).
- **Lenguaje:** **TypeScript (v6.0.3)** y HTML semántico para garantizar la seguridad de tipos en tiempo de compilación y una estructura web accesible.
- **DevOps y Automatización:** **GitHub Actions** (despliegue SFTP) y **Husky (v9.1.7)** para garantizar validaciones automáticas locales (hooks de pre-commit y pre-push).

---

## 3. ARCHITECTURE

El portafolio sigue un patrón de **Generación de Sitios Estáticos (SSG)** altamente optimizado:

- **Estructura Basada en Componentes**: Ubicados en `src/components/`, cada sección del portafolio es un componente estático de Astro autónomo y reutilizable.
- **Enrutamiento i18n Basado en Carpetas**:
  - La ruta `/` expone la versión por defecto en Español (`src/pages/index.astro`).
  - La ruta `/en/` expone la versión en Inglés (`src/pages/en/index.astro`).
  - Ambas rutas comparten los mismos componentes visuales, consumiendo diccionarios estáticos estructurados en `src/i18n/`.
- **Formato de URL limpia (`format: 'directory'`)**: Configurado en Astro para estructurar las rutas compiladas como directorios que contienen un archivo `index.html` (ej. `/en/index.html` se sirve como `/en/`), lo cual es óptimo para la navegación y SEO.
- **Compilación de Activos Estáticos**: Integración de `vite-plugin-compression` para generar versiones pre-comprimidas en **Gzip** y **Brotli** durante la fase de compilación, de manera que el servidor web pueda servirlas directamente sin latencia de compresión en tiempo real.

---

## 4. PATTERNS

Se implementan varios patrones de diseño específicos para resolver desafíos de rendimiento, seguridad y experiencia de usuario:

### Prevención del Parpadeo de Tema (FOUC - Flash of Unstyled Content)

- **Decisión**: Cargar un script crítico síncrono e inline directamente en el `<head>` del layout base antes de cualquier renderizado.
- **Consecuencia**: El navegador lee el estado del tema en `localStorage` (o prefiere el tema del sistema) y aplica de inmediato la clase `.dark` al elemento `<html>`, garantizando una transición visual fluida y sin destellos.

### Optimización de Rendimiento Web (Core Web Vitals)

- **Largest Contentful Paint (LCP)**: La imagen de presentación principal (`/jatc.webp`) se pre-carga de forma prioritaria usando `<link rel="preload" fetchpriority="high">`.
- **Cumulative Layout Shift (CLS)**: Se pre-carga la tipografía local y se define un _font fallback stack_ utilizando `@font-face` con descriptores como `size-adjust` para ajustar métricas visuales entre `Arial` e `Inter`, eliminando el salto visual de carga de fuentes.
- **First Input Delay (FID) / Interaction to Next Paint (INP)**: La carga del script de seguimiento (Google Tag Manager) se difiere hasta que ocurra la primera interacción real del usuario (scroll, click, touch) o tras un periodo de inactividad de 10 segundos.

### Seguridad y Hardening

- **Content Security Policy (CSP)**: Implementación de directivas CSP estrictas y cabeceras HTTP adicionales (como `frame-ancestors 'none'`) en el archivo `.htaccess` del servidor Apache para mitigar XSS e inyecciones de código.
- **Bloqueo de Bots de IA (robots.txt)**: Exclusión explícita de más de 20 crawlers de entrenamiento de modelos de IA, protegiendo los contenidos del sitio contra el raspado no consentido.
- **Restricción de Compilación (`allowBuilds`)**: En `pnpm-workspace.yaml` se restringe de forma explícita la ejecución de scripts de construcción a únicamente `esbuild` y `sharp`, mitigando el riesgo de ataques de ejecución de código en la cadena de suministro de dependencias.

---

## 5. TRADEOFFS

### Generación Estática (SSG) vs. Renderizado en Servidor (SSR)

- **A favor**: Tiempo de respuesta ultra-rápido (Time to First Byte mínimo), alojamiento económico, inmunidad frente a caídas de base de datos o exploits en tiempo de ejecución.
- **En contra**: Las actualizaciones de contenido o la adición de idiomas requieren un proceso completo de compilación y despliegue continuo (redistribución de archivos estáticos).

### Enrutamiento i18n por Carpetas vs. Traducción Dinámica en el Cliente

- **A favor**: Indexación óptima de páginas por idioma, rastreo limpio de enlaces por motores de búsqueda e internacionalización semántica sin necesidad de hidratar JavaScript.
- **En contra**: Cierta duplicación en la estructura de archivos en la carpeta `src/pages/` y mayor tamaño del entregable final (aunque mitigado por el tamaño ínfimo de los archivos HTML estáticos).

### Inline Script para Selección de Temas vs. Script Diferido (deferred)

- **A favor**: Elimina el parpadeo visual del tema oscuro por completo.
- **En contra**: Bloquea ligeramente el análisis HTML del `<head>` durante unos pocos microsegundos, aunque el script es lo suficientemente minimalista como para que el impacto sea insignificante.

---

## 6. PHILOSOPHY

El desarrollo de este portafolio se rige por tres pilares fundamentales:

1. **Performance-First**: Ningún recurso o script se añade a la experiencia final si no se justifica su impacto en la carga inicial y el tiempo de interacción.
2. **DevSecOps en Entornos Pequeños**: La seguridad no es una característica añadida al final, sino una parte fundamental de la configuración del entorno de desarrollo (`pnpm-workspace.yaml`), el servidor (`.htaccess`) y las automatizaciones (`husky`).
3. **Simplicidad y Robustez**: Preferencia por APIs y características CSS/HTML nativas de los navegadores modernos por encima de librerías externas o frameworks de interfaz pesados.

---

## 7. RECENT ARCHITECTURAL DECISIONS

### Retención de TypeScript en la rama v6.x (v6.0.3)

- **Decisión**: Mantener congelada la versión de TypeScript en la versión `6.0.3` (evitando actualizar a la versión `7.0.2` propuesta).
- **Justificación**: TypeScript 7.0 remueve las API programáticas del compilador nativo en las que se apoya el formateador y analizador estático de Astro (`astro check`). Intentar actualizar causa una rotura inmediata del pipeline de compilación. Se mantendrá en la v6.x hasta que la comunidad publique soporte para la nueva arquitectura del compilador de TS v7.

### Optimización y Compilación de Scripts del Cliente

- **Decisión**: Remover la directiva `is:inline` de todos los scripts interactivos de componentes del cliente ([ThemeToggle.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/ThemeToggle.astro), [ScrollToTop.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/ScrollToTop.astro), [Contact.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Contact.astro), [Courses.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Courses.astro), [Hero.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Hero.astro) y [Header.astro](file:///Users/joaltoroc/Code/joaltoroc/jatc.co/src/components/Header.astro)), permitiendo que Astro y Vite los procesen de forma unificada.
- **Consecuencia**: Todo el JS del cliente ahora se compila, minimiza y optimiza, reduciendo el tamaño del DOM en el HTML final y asegurando firmas hash deterministas para el cumplimiento estricto de CSP.

### Animaciones Compuestas para PageSpeed

- **Decisión**: Cambiar la animación de parpadeo del cursor CLI (`cli-cursor`) de alternar `color: transparent` a animar `opacity: 0` y `opacity: 1`.
- **Justificación**: Las animaciones sobre opacidad son procesadas por el compositor de la GPU y no causan repintados (repaints) ni recálculos de flujo (reflows), optimizando la responsividad del hilo principal de renderizado en móviles (reduciendo TBT y bloqueos de hilo principal indicados en PageSpeed).
