const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TLIP',
  tagline: 'Trade and Logistics Information Pipeline',
  url: 'https://docs.tlip.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tmea-tlip',
  projectName: 'docs.tlip.io',
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
          label: 'Section 1',
        },
        {
          type: 'doc',
          docId: 'section-2/overview',
          position: 'left',
          label: 'Section 2',
        },
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
              href: 'https://github.com/tmea-tlip/docs.tlip.io',
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
            'https://github.com/tmea-tlip/docs.tlip.io/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
