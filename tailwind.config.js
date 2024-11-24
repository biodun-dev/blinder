/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
          animation: {
              scroll: 'scroll 30s linear infinite',
              'scroll-reverse': 'scroll-reverse 30s linear infinite',
          },
          keyframes: {
              scroll: {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-100%)' },
              },
              'scroll-reverse': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(100%)' },
              },
          },
      },
    },
    plugins: [
      require("@tailwindcss/forms")({
        strategy: "class", // only generate classes
      }),
    ],
  };
  