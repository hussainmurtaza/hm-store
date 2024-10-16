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
        deepTeal: "#007C7A",
        charcoal: "#333333",
        softCoral: "#FF6F61",
        purple: "#9F84BD",
        whiteColor: "#FFFFFF",
        lightPink: "#EDE3E9",
      },
    },
  },
  plugins: [],
};
