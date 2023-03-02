/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "*.html"],
    theme: {
        extend: {
            colors: {
                soft_blue:  'hsl(215, 51%, 70%)',
                cyan:       'hsl(178, 100%, 50%)',
                main_bg:    'hsl(217, 54%, 11%)',
                card_bg:    'hsl(216, 50%, 16%)',
                line:       'hsl(215, 32%, 27%)',
            },
        },
        fontFamily: {
            sans: ['Outline', 'sans-serif'],
        },          
    },
    plugins: [],
  }