/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          one: "#7C9473",
          two: "#CFDAC8",
          three: "#E8EAE6",
          four: "#CDD0CB",
          gray_text : "#64748b"
        },
        screens : {
          md_ta3i : '608px',
          lg_ta3i : '1500px'

        }

      },
    },
    plugins: [],
  };
  