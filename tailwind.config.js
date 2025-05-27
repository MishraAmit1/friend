/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        "custom-green": "#8CC84B",
        "custom-blue": "#61DAFB",
      },
      boxShadow: {
        glow: "0 0 10px 2px rgba(59, 130, 246, 0.8)", // Light blue glow (adjust opacity & size as needed)
      },
    },
  },
  plugins: [],
};
