/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sand: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
