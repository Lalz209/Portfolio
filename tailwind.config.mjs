/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Esto permite cambiar entre modos claro/oscuro
  theme: {
    extend: {
      colors: {
        // Modo Web - Claro
        'web-light-primary': '#3b82f6',
        'web-light-secondary': '#10b981',
        'web-light-background': '#f9fafb',
        'web-light-text': '#1f2937',
        
        // Modo Web - Oscuro
        'web-dark-primary': '#60a5fa',
        'web-dark-secondary': '#34d399',
        'web-dark-background': '#111827',
        'web-dark-text': '#f3f4f6',
        
        // Modo CV - Claro
        'cv-light-primary': '#8b5cf6',
        'cv-light-secondary': '#ec4899',
        'cv-light-background': '#ffffff',
        'cv-light-text': '#1f2937',
        
        // Modo CV - Oscuro
        'cv-dark-primary': '#a78bfa',
        'cv-dark-secondary': '#f472b6',
        'cv-dark-background': '#1e1b4b',
        'cv-dark-text': '#f3f4f6',
      },
      // Podemos añadir más configuraciones personalizadas aquí
      maxWidth: {
        'container': '1200px', // Para mantener el contenido centrado y con margen en los bordes
      },
    },
  },
  plugins: [],
}