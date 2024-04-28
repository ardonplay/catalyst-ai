import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		host: '0.0.0.0'
	},
	plugins: [preact(), viteSingleFile()],
});
