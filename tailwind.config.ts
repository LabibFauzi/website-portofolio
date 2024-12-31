import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0E1111",
				secondary: "#232B2B",
				border: "#353839",
			},
			text: {
				primary: "#F1F1F1",
				suspended: "#9A9A9A",
			},
		},
	},
	plugins: [],
} satisfies Config;
