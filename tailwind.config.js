/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        light: "#ffffff",
        "dark-input": "#fff",
        "dark-text": "#e5e7eb",
        "light-text": "#111827",
        "dark-bg": "#373737",
        "dark-hover": "#444444",
        "dark-border": "#444444",
      },
    },
  },
  plugins: [require("daisyui")],
}
