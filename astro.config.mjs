// @ts-check
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
	site: 'https://Felipe-Saenz01.github.io/Integra',
	base: '/Integra',
	vite: {
		resolve: {
			alias: {
				'@assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
			},
		},
	},
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
			components: {
				// Sobrescribir Head para incluir scripts de filtrado
				Head: './src/components/Head.astro',
				Search: './src/components/Search.astro'
			},
			plugins: [
				starlightThemeNova(),
				starlightUtils({
					multiSidebar: {
						switcherStyle: "dropdown",
					},
				}),
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			sidebar: [
				{
					label: "Documentación",
					items: [
						{
							label: 'Guias',
							collapsed: true,
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'Example Guide', slug: 'documentacion/guides/example' },
							],
						},
						{
							label: 'Contratos',
							autogenerate: { directory: 'documentacion/Contratos' },
						},
						{
							label: 'Git y Github',
							badge: { text: 'Nuevo', variant: 'tip' },
							autogenerate: { directory: 'documentacion/Git_Github' },
						}
					],
				},
				{
					label: 'Nomina',
					autogenerate: { directory: 'guias/Nomina' },
				},
				{
					label: 'Reportes Entidades',
					autogenerate: { directory: 'guias/reportes_entidades' },
				},
				{
					label: 'Contabilidad',
					items:[
						{ label: 'Macroprocesos',collapsed: false, autogenerate: { directory: 'guias/contabilidad/macroprocesos' } },
						{ label: 'Auditoria',collapsed: false, autogenerate: { directory: 'guias/contabilidad/auditoria' } },
						{ label: 'Reportes',collapsed: false, autogenerate: { directory: 'guias/contabilidad/reportes' } },
					]
				},
			],
		}),
	],
});
