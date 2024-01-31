/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#f25f3a",
                    light: "#f25f3a99",
                },
                secondary: {
                    DEFAULT: "#1d1e25",
                    light: "#fafafa",
                    pink: "#ffefeb",
                },
                word: {
                    DEFAULT: "#242d52",
                    light: "#9095a7",
                },
            },
            keyframes: {
                "open-menu": {
                    "0%": { transform: "scaleY(0)" },
                    "80%": { transform: "scaleY(1.2)" },
                    "100%": { transform: "scaleY(1)" },
                },
            },
            animation: {
                "open-menu": "open-menu 0.3s ease-in-out",
            },
        },
    },
    plugins: [],
};
