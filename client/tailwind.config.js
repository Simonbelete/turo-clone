module.exports = {
  important: true,
  mode: 'jit',
   // These paths are just examples, customize them to match your project structure
   purge: [
     './public/**/*.html',
     './components/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        'medium': '-0.013rem'
      },
      colors: {
        primary: '#593cfb',
        black: "#121214"
      },
      fontFamily: {
        'basis-grotesque': ['RlBasisGrotesque'],
        'freight': ['RlFreight']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
