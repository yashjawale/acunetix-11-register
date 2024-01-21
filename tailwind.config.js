/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        title: ['var(--font-bungee)'],
      },
      colors: {
        background: '#041221',
        backgroundHighlight: '#072739',
        accent: '#fe7800',
        secondaryAccent: '#66a8d0'
      },
    },
  },
  plugins: [],
}
