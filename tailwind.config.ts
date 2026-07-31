import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				familia: "#082C5E",
				sabor: "#C69653",
				sobral: "#E7E3DA",
			},
		},
	},
	plugins: [],
} satisfies Config;
