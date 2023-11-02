import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: "/src",
			abstracts: "/src/styles/abstracts",
			base: "/src/styles/base",
			components: "/src/styles/components",
			layouts: "/src/styles/layouts",
			main: "/src/styles/main",
		},
	},
});
