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
        greylight: '#3A393E',
        greydark: '#202022',
        rederror: '#FF0004',
      },
      screens: {
        'xs': '290px',
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px',
        '2xl': '1440px',        
      },
    },
  },
  plugins: [],
};