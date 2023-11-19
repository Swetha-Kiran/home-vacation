/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat : ['Montserrat','sans-serif'],
        lemon: ['Lemon', 'cursive']
      },
      boxShadow: {
        'custom': '0px 3px 28px 0px rgba(0, 0, 0, 0.06)',
     
      },
      rotate:{
      '125' : '125deg',
      },
      backgroundColor:{
        'primary-light':'#C0D14A',
      },
      screens: {
        'Mobile': '0px',
        'Tablet': '600px',
        'Laptop-sm': '905px',
        'Laptop-lg': '1240px',
        'Desktop': '1440px',
       
      }
  
    },
  },
  plugins: [],
}
