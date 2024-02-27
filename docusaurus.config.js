const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'TLIP Wiki',
	tagline: 'Trade and Logistics Information Pipeline',
	description: 'Paperless trade between border agencies and traders',
	url: 'https://wiki.tlip.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'tmea-tlip',
	projectName: 'wiki.tlip.io',
	themeConfig: {
		navbar: {
			logo: {
				alt: 'TLIP Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Introduction',
				},
				{
					type: 'doc',
					docId: 'section-1/overview',
					position: 'left',
					label: 'IOTA',
				},
				{
					type: 'doc',
					docId: 'section-2/overview',
					position: 'right',
					label: 'FAQs',
				},
				{
					type: 'doc',
					docId: 'section-3/overview',
					position: 'left',
					label: 'User Guide'
				},
				{
					type: 'doc',
					docId: 'section-4/overview',
					position: 'right',
					label: 'Partners'
				}
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Introduction',
							to: '/docs/intro',
						},
						{
							label: 'IOTA',
							to: '/docs/section-1/overview'
						},
						{
							label: 'FAQs',
							to: '/docs/section-2/overview'
						},
						{
							label: 'User Guide',
							to: '/docs/section-3/overview'
						}
					],
				},
				{
					title: 'Organization',
					items: [
						{
							label: 'TMEA',
							href: 'https://www.trademarkea.com/',
						},
						{
							label: 'IF',
							href: 'https://www.iota.org',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/tmea-tlip/wiki.tlip.io',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} TMEA TLIP.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/tmea-tlip/wiki.tlip.io/edit/master/website/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
