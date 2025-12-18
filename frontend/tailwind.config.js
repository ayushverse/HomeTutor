/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3B82F6',
                    50: '#EBF2FE',
                    100: '#D7E5FD',
                    200: '#A0C4FA',
                    300: '#6AA4F7',
                    400: '#3B82F6',
                    500: '#1D6BE8',
                    600: '#1556C0',
                    700: '#0F4090',
                    800: '#0A2B5F',
                    900: '#04152F',
                },
                success: {
                    DEFAULT: '#10B981',
                    50: '#D1FAE5',
                    100: '#A7F3D0',
                    200: '#6EE7B7',
                    300: '#34D399',
                    400: '#10B981',
                    500: '#059669',
                    600: '#047857',
                    700: '#065F46',
                    800: '#064E3B',
                    900: '#022C22',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
