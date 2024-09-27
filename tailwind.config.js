/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        blurred: "0 2px 2px rgba(0, 0, 0, 0.3)", // Adjust as needed
        light: "0 2px 2px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
