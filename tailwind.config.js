// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        music: {
          "0%, 100%": { transform: "scaleY(0.2)" },
          "50%": { transform: "scaleY(1)" },
        },
        "fade-in-out": {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        "slide-down": {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        music: "music 0.8s ease-in-out infinite",
        "fade-in-out": "fade-in-out 3s ease-in-out forwards",
        "slide-down": "slide-down 1s ease-out forwards",
        "slide-up": "slide-up 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
