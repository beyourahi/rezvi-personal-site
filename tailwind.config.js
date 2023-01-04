/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: "#121212",
                coolGreen: "#FFD700",
                heading: "#f4f3ef",
                subHeading: "#999999",
            },
        },
    },
    plugins: [],
};
