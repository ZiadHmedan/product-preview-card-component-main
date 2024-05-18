/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      cream: "#F2EAE2",
      AurometalSaurus: "#6C7289",
      DeepAquamarine: "#3D8168",
      DeepAquamarineDark: "#1A4032",
      Gunmetal: "#1C232B",
    },
    fontFamily: {
      mont: ["Montserrat", "serif"],
      fraunces: ["Fraunces"],
      sans: ["Helvetica", "Arial"],
    },
    fontSize: {
      sm: [".75rem", { lineHeight: "auto", letterSpacing: "5px" }],
      md: [".875rem", { lineHeight: "23px", letterSpacing: "0px" }],
      xl: ["2rem", { lineHeight: "32px", letterSpacing: "0px" }],
    },
    screens: {
      
      sm: "376px",
      md: "601px",
    },
    container: {
      
    },
    extend: {},
  },
  plugins: [],
};
