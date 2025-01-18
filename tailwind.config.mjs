/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'apple-gray': '#1d1d1f',
        'apple-blue': '#2997ff',
      },
      backgroundImage: {
        'tech-pattern': "url('/tech-pattern.png')",
      },
    },
  },
  plugins: [],
}