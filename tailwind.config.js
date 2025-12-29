/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blue (replacing gold #cfa12e from clone)
        primary: {
          DEFAULT: '#1C07CA',
          dark: '#0F0B5A',
          light: '#4F5DFF',
        },
        // Dark backgrounds (legacy - kept for footer)
        dark: {
          DEFAULT: '#1C07CA',
          pure: '#0F0B5A',
          soft: '#f8f9fa',
          card: '#ffffff',
        },
        // Light backgrounds
        light: {
          DEFAULT: '#f4f4f4',
          soft: '#f8f8f8',
        },
        // Text colors
        text: {
          white: '#ffffff',
          gray: '#999999',
          dark: '#333333',
        },
      },
      fontFamily: {
        // Match clone fonts
        heading: ['"DM Serif Display"', 'Cormorant Garamond', 'serif'],
        body: ['Open Sans', 'Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}
