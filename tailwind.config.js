module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bms: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        premiere:
        {
          50: '#edf0fe',
          100: '#ced2e6',
          200: '#afb4d0',
          300: '#8f96bc',
          400: '#7078a8',
          500: '#565f8e',
          600: '#424a6f',
          700: '#2f3550',
          800: '#2b3147',
          900: '#050b17',
        }
      }
      
    },
  },
  variants: {
    extend: {


    }
  },
  plugins: [],
}
