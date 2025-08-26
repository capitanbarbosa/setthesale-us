/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hero-blue-start": "#003B79",
        "hero-blue-end": "#002244",
        "cta-pink": "#F15B6C",
        "cta-red": "#E53B57",
        "dark-blue-text": "#002147",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/Shapes-icons.png')",
      },
    },
  },
  plugins: [],
};

export default config;
