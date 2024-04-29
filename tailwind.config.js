const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        "inter-tight": ["var(--font-inter-tight)"],
      },
      keyframes: {
        "scrolling-banner": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "scrolling-banner-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-50% - var(--gap)/2))" },
        },
      },
      animation: {
        "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
        "scrolling-banner-vertical":
          "scrolling-banner-vertical var(--duration) linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F9F9F4", // or DEFAULT
            foreground: "#1E1E1E", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#1E1E1E",
              DEFAULT: "#C7F401",
            }, // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#1E1E1E", // or DEFAULT
            foreground: "#F9F9F4", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#1E1E1E",
              DEFAULT: "#C7F401",
            },
          }, // ... rest of the colors
        },
      },
    }),
  ],
};
