import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@public": path.resolve(__dirname, "./public"),
			"@styles": path.resolve(__dirname, "./src/scss"),
		},
	},
	plugins: [
		react()
	],
	base: "./"
});
