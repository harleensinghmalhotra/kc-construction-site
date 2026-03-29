/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: "1.2em",
              marginBottom: "1.2em",
            },
            h2: {
              marginTop: "2.2em",
              marginBottom: "0.6em",
            },
            h3: {
              marginTop: "1.8em",
              marginBottom: "0.5em",
            },
            ul: {
              marginTop: "1.2em",
              marginBottom: "1.2em",
            },
            ol: {
              marginTop: "1.2em",
              marginBottom: "1.2em",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};