const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
      lightblue: '#01D6FF',
      bgprimary: '#161B40',
      bgsecondary: '#151834',
      navhover: '#017DFF',
      blockdes: '#ACACAC',
      bgblock: '#171F50',
      borderblock: '#01F2FF',
      dividercolor: '#017DFF',
      stepdescription: '#ACACAC'

      },
      screens: {
        'sm': '300px',
        'md': '700px',
        'lg': '1024px'
        },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'montserrat': ['Montserrat'],
        'body': ['Poppins'],
       },
      fontSize: {
        '7xl': '4.875rem',
        xxl: ['78px', {
          lineHeight: '78px',
        }],
        llg: ['20px','30px'],
        base: ['16px', '24px'],
        priorities: ['52px', '78px'],
        blockheading: ['20px', '24px'],
        blockdes: ['14px', '16.8px'],
        steptitle: ['32px', '48px'],
        contactDes: ['18px', '27px'],
        contactAction:['38px', '57px'],
        contactTitle:['24px', '30px'],

      },
      borderRadius: {
        large: '10px',
        small: '5px',
      },
      extend: {
        // backgroundImage: theme => ({
        //  'hero': "url('/src/assets/home.png')",
        //  'action': "url('/src/assets/action.png')",
        // })
        boxShadow: {
          '2xl': '0px 9.88271px 49.4135px rgba(0, 0, 0, 0.3)',
          'block': '0px 6.79056px 33.9528px rgba(0, 0, 0, 0.3)',
        }
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
