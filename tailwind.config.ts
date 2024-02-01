import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'og-black': '#212121',
        'og-orange': '#E47229',
        'og-white': '#F4F4F4',
        'og-light-brown': '#ABA9A6',
        'og-cream': '#F0EDE6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      letterSpacing: {
        'display': '-0.11em',
        'display-extended': '0.5em',
      },
      fontSize: {
        'display': '14rem',
        'display-hover': '16rem',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
