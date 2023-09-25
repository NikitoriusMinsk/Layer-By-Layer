/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee var(--marquee-duration) linear infinite;',
                "fade-in": 'fade-in .5s linear forwards;',
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                "fade-in": {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                golos: ['var(--font-golos)', 'sans-serif'],
                sfpro: ['var(--font-sfpro)', 'sans-serif'],
                bebas: ['var(--font-bebas)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                primary: 'var(--primary)',
                'primary-transparent': 'var(--primary-transparent)',
                'primary-2': 'var(--primary-2)',
                'secondary': 'var(--secondary)',
                'p': 'var(--p)',
                'secondary-2': 'var(--secondary-2)',
                hover: 'var(--hover)',
                'hover-1': 'var(--hover-1)',
                'hover-2': 'var(--hover-2)',
                'accent-0': 'var(--accent-0)',
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',
                'accent-4': 'var(--accent-4)',
                'accent-5': 'var(--accent-5)',
                'accent-6': 'var(--accent-6)',
                'accent-7': 'var(--accent-7)',
                'accent-8': 'var(--accent-8)',
                'accent-9': 'var(--accent-9)',
                border: 'var(--border)',
                violet: 'var(--violet)',
                'violet-light': 'var(--violet-light)',
                'violet-dark': 'var(--violet-dark)',
                pink: 'var(--pink)',
                'pink-light': 'var(--pink-light)',
                cyan: 'var(--cyan)',
                blue: 'var(--blue)',
                green: 'var(--green)',
                red: 'var(--red)',
            },
        },
    },
    plugins: [],
}
