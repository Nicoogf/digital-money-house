/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lemon: '#C0FD35',
        greylight: '#CECECE',
        greystandar: '#3A393E',
        greydark: '#202022',
        rederror: '#FF0004',
      },
      screens: {
        'xxs': '290px', // Galaxy Fold and dispositivos con resoluciones similares
        'xs': '390px',   // Iphone SE / Iphone 12 Pro / Samsung S8+
        'sm': '480px',   // Iphone XR / Iphone 14 Pro Max / Pixel 7 / Samsung S20 Ultra /Samsung A51/71
        'md': '768px',   // Ipad Mini / Ipad Air	/ Surface Duo
        'lg': '1024px',  // Ipad Pro / Surface Pro 7 / NestHub 
        'xl': '1280px',  // Nest Hub Max / PC low
        '2xl': '1440px', // Pc hight
      },
    },
  },
  plugins: [],
};


