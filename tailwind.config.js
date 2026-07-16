/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // Update these paths to match where your application code is located
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        text: "var(--color-text)",
        title: "var(--color-title)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        link: "var(--color-link)",
        navBackground: "var(--color-navBackground)",
        customBorder: "var(--color-border)",
        iconColor: "var(--color-iconColor)",
        iconColorFocused: "var(--color-iconColorFocused)",
      },
    },
  },
  plugins: [],
};
