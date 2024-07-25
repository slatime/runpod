import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@lib': path.resolve(__dirname, 'src/lib'),
			'@components': path.resolve(__dirname, 'src/common/components'),
			'@type': path.resolve(__dirname, 'src/lib/type'),
			'@util': path.resolve(__dirname, 'src/lib/util'),
			'@store': path.resolve(__dirname, 'src/lib/store'),
		},
	},
});