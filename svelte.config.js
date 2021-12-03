// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				WindiCSS()
			]
		}
	}
};

export default config;
