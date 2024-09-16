/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary': 'rgb(60, 176, 120)',
        'secondary': 'rgb(51, 134, 108)'
        
        
      }
    },
    fontFamily :{
      'Body-font' :'Lora ital'
    }
  },
  plugins: [],
}

