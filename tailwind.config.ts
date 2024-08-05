import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./formkit.config.ts",
        "./formkit.theme.ts",
    ],
    theme: {
        extend: {},
        colors: {
            currentColor: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            zinc: colors.zinc,
            blue: {
                '50': '#BFD9FE',
                '100': '#ADCEFE',
                '200': '#88B9FD',
                '300': '#63A3FC',
                '400': '#3F8EFC',
                '500': '#1A78FB',
                '600': '#1665D3',
                '700': '#1252AB',
                '800': '#0E3E83',
                '900': '#092B5A',
                '950': '#051832',
            }
        },
    },
    plugins: [
        require('daisyui'),
        require('@formkit/themes/tailwindcss'),
    ],
    daisyui: {
        themes: [
            {
                custom: {
                    primary: '#1A78FB',
                    secondary: '',
                    accent: '',
                    success: '',
                    info: '',
                    warning: '',
                    neutral: '',
                    'base-100': '',
                    '--rounded-box': '0.5rem'
                }
            }
        ]
    }
}

