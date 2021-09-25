module.exports = {
  mode: 'jit',
   // These paths are just examples, customize them to match your project structure
   purge: [
     './public/**/*.html',
     './components/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'basis-grotesque': ['RlBasisGrotesque']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
