// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import { sidebar as sidebarConfig } from './src/configs/sidebar.config'
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: 'https://lineadecodigo.com',
	integrations: [
		starlight({
			plugins: [
				starlightSidebarTopics(sidebarConfig,{exclude: ['/blog','/blog/*','/blog/tags','/blog/tags/*','/blog/authors','/blog/authors/*']}),
				starlightBlog(
					{
						title: "Blog Línea de Código",
						postCount: 7,
						recentPostCount: 5,
						prevNextLinksOrder: "chronological",
						navigation: "none",
						metrics: {
							readingTime: true,
							words: "rounded",
						},
						authors: {
							victor_cuervo: {
								name: "Víctor Cuervo",
								title: "Editor y Fundador",
								picture: "https://secure.gravatar.com/avatar/8d3fa1a20bfaf3497ac4667124df6cd13a478b0f5dce0d285712c57fe13e9ac3?s=172&d=robohash&r=g",
								url: "https://victorcuervo.com",
							},
							lineadecodigo: {
								name: "Línea de Código",
								title: "Editor",
								picture: "./src/assets/logo.png",
								url: "https://lineadecodigo.com",
							},						
						},
					}),
			],
			
			title: 'Línea de Código',	
			logo: {
				src: './src/assets/logo.png',
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
				PageTitle: "./src/components/PageTitle.astro",		
				Head: './src/components/Head.astro',					
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
