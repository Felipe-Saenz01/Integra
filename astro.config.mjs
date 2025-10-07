// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	site: 'https://Felipe-Saenz01.github.io/Documentacion_Integra',
	base: '/Documentacion_Integra',
	integrations: [
		starlight({
			title: 'Documentación Integra',
			logo: {
				dark: './src/assets/logo-blanco.png',
				light: './src/assets/logo_integra.png', // Path to your logo file
                alt: 'Integra Online SAS',
                replacesTitle: false,
            },
			favicon: '/favicon.ico',
			plugins: [starlightThemeNova()],
			defaultLocale: 'root',
            locales: {
                root: { label: 'Español', lang: 'es' },
            },
			sidebar: [
				{
					label: 'Guias',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Contratos',
					autogenerate: { directory: 'Contratos' },
				},
				{
					label: 'Git y Github',
					badge: { text: 'Nuevo', variant: 'tip' },
					autogenerate: { directory: 'Git_Github' },
				}
			],
		}),
	],
});
