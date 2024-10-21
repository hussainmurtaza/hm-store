/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepTeal: "#40916c",
        //"#007C7A",
        charcoal: "#333333",
        softCoral: "#fca311",
        yellow:"#fca311",
        purple: "#5f0f40",
        whiteColor: "#FFFFFF",
        lightPink: "#fefae0",
        red: "#d00000",
        
      },
    },
  },
  plugins: [],
};
