/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Modo Web - Claro
        "web-light-primary": "#3b82f6",
        "web-light-secondary": "#10b981",
        "web-light-background": "#f9fafb",
        "web-light-text": "#1f2937",

        // Modo Web - Oscuro
        "web-dark-primary": "#60a5fa",
        "web-dark-secondary": "#34d399",
        "web-dark-background": "#111827",
        "web-dark-text": "#f3f4f6",

        // Modo CV - Claro
        "cv-light-primary": "#8b5cf6",
        "cv-light-secondary": "#ec4899",
        "cv-light-background": "#ffffff",
        "cv-light-text": "#1f2937",

        // Modo CV - Oscuro
        "cv-dark-primary": "#a78bfa",
        "cv-dark-secondary": "#f472b6",
        "cv-dark-background": "#1e1b4b",
        "cv-dark-text": "#f3f4f6",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
  // Añadir un plugin o configuración para extender las utilidades de Tailwind con los colores personalizados
  corePlugins: {
    preflight: true, // Asegura que Tailwind aplique sus estilos base
  },
  // Simplificar o eliminar safelist si ya extendemos las utilidades
  safelist: [
    "bg-web-light-background",
    "bg-web-dark-background",
    "bg-cv-light-background",
    "bg-cv-dark-background",
    "text-web-light-text",
    "text-web-dark-text",
    "text-cv-light-text",
    "text-cv-dark-text",
    "hover:text-web-light-primary",
    "dark:hover:text-web-dark-primary",
    "bg-web-light-primary",
    "dark:bg-web-dark-primary",
    // Variantes con mode-cv (aunque ahora las manejaremos con clases dinámicas)
    "mode-cv:bg-cv-light-background",
    "mode-cv:dark:bg-cv-dark-background",
    "mode-cv:text-cv-light-text",
    "mode-cv:dark:text-cv-dark-text",
  ],
};