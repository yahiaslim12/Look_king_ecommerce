// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: "#7C9473",
        two: "#CFDAC8",
        three: "#E8EAE6",
        four: "#CDD0CB",
        gray_text: "#64748b",
        gray_table: "#F1F1F1",
        gray_text_table: "#666666",
        green_dark: "#11843C",
        orange_dark: '#ab570a',
      },
      screens: {
        md_ta3i: '608px',
        lg_ta3i: '1500px',
      },
    },
    container: false, 
  },
  plugins: [],
};
