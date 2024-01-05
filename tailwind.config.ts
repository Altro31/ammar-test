import type {Config} from 'tailwindcss'
import {nextui} from "@nextui-org/react"

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/.pnpm/@nextui-org+theme@2.1.17_tailwindcss@3.4.0/node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/.pnpm/react-tailwindcss-datepicker@1.6.6_dayjs@1.11.10_react@18.2.0/node_modules/react-tailwindcss-datepicker/dist/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
export default config
