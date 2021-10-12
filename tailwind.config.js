module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        // moveIn: 'moveIn 0.3s ease-in',
        fadeIn : 'fadeIn 0.4s ease-in',
        spinOnce : 'spin 1.4s ease-out',
        drop : 'drop 0.5s ease-out ',
       },
      keyframes: {
        // moveIn: {
        //   '0%': { width : '0' },
        //   '100%': { width: 'full' },
        // },
        fadeIn:{
          '0%' : {opacity : '0'},
          '100%': {opacity : '1'},
       },
       drop:{
         '0%' : {transform : 'translateY(-100%)'},
         '40%': {transform : 'translateY(0)'},
         '60%': {transform : 'translateY(-10%)'},
         '80%': {transform : 'translateY(0)'},
         '90%': {transform : 'translateY(-10%)'},
         '100%': {transform : 'translateY(0)'}
       }
       },
       fontFamily:{
         lato : ['Lato' , 'sans-serif'],
         ubuntu : ['Ubuntu', 'sans-serif']
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

