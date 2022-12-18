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
                theme: "#0A192F",
                coolGreen: "#64ffda",
                heading: "#CCD6F6",
                subHeading: "#8892B0",
            },
        },
    },
    plugins: [],
};
