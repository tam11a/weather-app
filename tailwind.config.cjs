/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Alegreya Sans SC", "sans-serif"],
			serif: ["Alegreya Sans SC", "serif"],
		},
		extend: {},
	},
	plugins: [],
	important: true,
};
