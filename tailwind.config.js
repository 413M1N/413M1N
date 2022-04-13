module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "turqoise-pattern": "url('/bg-turquiouse.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
