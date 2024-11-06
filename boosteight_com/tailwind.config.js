/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern-1': "url('/images/hero-pattern-1.jpg')",
                'hero-pattern-2': "url('/images/hero-pattern-2.jpg')",
                'hero-pattern-3': "url('/images/hero-pattern-3.jpg')",
                'hero-pattern-4': "url('/images/hero-pattern-4.jpg')",
                'icon-1': "url('/images/icon-1.png')",
                'icon-2': "url('/images/icon-2.png')",
                'icon-3': "url('/images/icon-3.png')",
                'icon-4': "url('/images/icon-4.png')",
            },
            colors: {
                'f0f0f4': '#F0F0F4',
                'ea002a': '#EA002A',
            },
            fontFamily: {
                'bebas-neue': ['Bebas Neue', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

