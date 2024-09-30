/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['Lemon Milk', 'sans-serif'], // Adiciona a fonte Lemon Milk ao Tailwind,
        analogist: ['"Analogist"', 'sans-serif'], // Altere 'sans-serif' para a fonte padrão que deseja usar como fallback
      },
    },
  },
  plugins: [],
}
