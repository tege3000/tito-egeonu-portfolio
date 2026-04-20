/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonYellow: "#FFE000",
        neonCyan: "#00E5FF",
        neonPink: "#FF4D9E",
        neonGreen: "#39FF14",
        bgDark: "#0a0a0f",
      },
      fontFamily: {
        arcade: ["'Press Start 2P'", "monospace"],
      },
    },
  },
  plugins: [],
};