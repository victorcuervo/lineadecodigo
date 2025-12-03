// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightUiTweaks from 'starlight-ui-tweaks'
import { sidebar as sidebarConfig } from './src/configs/sidebar.config'
import { menu as menuConfig } from './src/configs/menu.config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightUiTweaks(menuConfig),
				starlightSidebarTopics(sidebarConfig),
			],
			
			title: 'Línea de Código',	
			logo: {
				src: './src/assets/logo2.png',
			},
			defaultLocale: 'es',
			locales: {
				root: {
					label: 'Español',
					lang: 'es', // lang is required for root locales
				}
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/victorcuervo/' },
				{ icon: 'twitter', label: 'X', href: 'https://x.com/lineadecodigo' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/lineadecodigo' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/lineadecodigo/' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/user/lineadecodigo' },
			],			
			components: {
				Sidebar: './src/components/Sidebar.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				PageSidebar: './src/components/PageSiderbar.astro',
				PageTitle: "./src/components/PageTitle.astro"
			},
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
