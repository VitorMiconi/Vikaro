/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['Lemon Milk', 'sans-serif'], 
        analogist: ['"Analogist"', 'sans-serif'], 
      },
      backgroundImage: {
        'custom-pj-1': "url('/public/img/project-1.png')", // Adicionando imagem de fundo personalizada
        'custom-pj-4': "url('/public/img/project-4.png')", // Adicionando imagem de fundo personalizada
      },
    },
  },
  plugins: [],
}
