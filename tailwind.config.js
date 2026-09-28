/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./invitaciones.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo-rustico': '#120e0c',      
        'panel-claro': '#1c1613',
        'oro-colonial': '#DAA520',       
        'oro-oscuro': '#B89947',         
        'plata-envejecida': '#8C92AC',   
        'rojo-terciopelo': '#7B1E22',    
        'texto-pergamino': '#E6D5B8',
      },
      fontFamily: {
        'romana': ['"Marcellus"', 'serif'],
        'lectura': ['"EB Garamond"', 'serif'],
        'adornada': ['"Cinzel Decorative"', 'serif']
      }
    }
  },
  plugins: [],
}