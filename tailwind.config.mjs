/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: [
			{
				rosepine: {
					primary: "#c4a7e7",
					secondary: "#ebbcba",
					accent: "#f6c177",
					neutral: "#1f1d2e",
					"base-100": "#191724",
					info: "#31748f",
					success: "#9ccfd8",
					warning: "#f6c177",
					error: "#eb6f92",
				},
				"rosepine-moon": {
					primary: "#c4a7e7",
					secondary: "#ea9a97",
					accent: "#c4a7e7",
					neutral: "#2a273f",
					"base-100": "#232136",
					info: "#3e8fb0",
					success: "#9ccfd8",
					warning: "#f6c177",
					error: "#eb6f92",
				},
				"rosepine-dawn": {
					primary: "#907aa9",
					secondary: "#d7827e",
					accent: "#907aa9",
					neutral: "#faf4ed",
					"base-100": "#fffaf3",
					info: "#286983",
					success: "#56949f",
					warning: "#ea9d34",
					error: "#b4637a",
				},
			},
		],
	},
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
