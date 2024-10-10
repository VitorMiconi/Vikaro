/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      scrollBehavior: ['responsive'],

      fontFamily: {
        lemon: ['Lemon Milk', 'sans-serif'], 
        analogist: ['"Analogist"', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-pj-1': "url('/public/img/project-1.png')", // Adicionando imagem de fundo personalizada
        'custom-pj-4': "url('/public/img/project-4.png')", // Adicionando imagem de fundo personalizada
        'custom-golisk': "url('/public/img/GOLISK.jpg')", // Adicionando imagem de fundo personalizada
        'custom-stairs': "url('/public/img/stairs.png')", // Adicionando imagem de fundo personalizada
      },
    },
  },
  plugins: [],
}
