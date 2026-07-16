/// <reference types="astro/client" />

declare module '@fontsource-variable/inter';
declare module '@fontsource-variable/space-grotesk';

interface Window {
  handleFloatingScroll?: () => void;
  gtmLoaded?: boolean;
}
