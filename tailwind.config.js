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
                rise: 'rise 0.5s ease-out forwards', // Added rising animation
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
                rise: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' }, // Start from below
                    '100%': { opacity: 1, transform: 'translateY(0)' }, // End at default position
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
