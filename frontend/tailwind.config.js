import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "chatty-dark": {
          primary: "oklch(1 0 0)",
          "primary-content": "oklch(0.2050 0 0)",
          secondary: "oklch(0.2690 0 0)",
          "secondary-content": "oklch(0.9850 0 0)",
          accent: "oklch(0.3710 0 0)",
          "accent-content": "oklch(0.9850 0 0)",
          neutral: "oklch(0.9850 0 0)",
          "neutral-content": "oklch(0.2050 0 0)",
          "base-100": "oklch(0.1450 0 0)",
          "base-200": "oklch(0.2050 0 0)",
          "base-300": "oklch(0.2750 0 0)",
          "base-content": "oklch(0.9850 0 0)",
          info: "oklch(0.5560 0 0)",
          success: "oklch(0.7080 0 0)",
          warning: "oklch(0.3710 0 0)",
          error: "oklch(0.7040 0.1910 22.2160)",
        },
      },
    ],
    darkTheme: "chatty-dark",
  },
};
