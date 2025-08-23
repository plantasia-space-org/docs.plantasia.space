// @ts-check
// Docusaurus configuration file
// For more information, visit: https://docusaurus.io/docs/configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'plantasia.space',
  tagline: 'Comprehensive Documentation',
  favicon: 'img/favico.ico',

  // Production URL of your site
  url: 'https://docs.plantasia.space',
  // Base URL pathname
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you're not using GitHub pages, you can remove these.
  organizationName: 'plantasia-space', // Your GitHub org/user name.
  projectName: 'docs.plantasia.space', // Your repository name.

  // Handle broken links and markdown links
  onBrokenLinks: 'warn', // 'throw' for production builds
  onBrokenMarkdownLinks: 'warn', // 'warn' allows the build to proceed

  // Internationalization configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Presets for Docusaurus
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          // Path to your docs directory
          path: 'docs',
          // Path to your sidebar configuration
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL for the documentation pages
          editUrl: 'https://github.com/plantasia-space/docs.plantasia.space/edit/main/', // Update to your GitHub repo
          routeBasePath: 'docs', // Base path for documentation
          remarkPlugins: [require("remark-breaks")],
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/plantasia-space/docs.plantasia.space/edit/main/blog/', // Update to your GitHub repo
          path: './blog',
          routeBasePath: 'blog', // Base path for blog
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // Theme configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image for meta tags
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'plantasia.space Docs',
        logo: {
          alt: 'plantasia.space Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userGuideSidebar',
            position: 'left',
            label: '👨🏿‍🏫 User Guide',
          },
          {
            type: 'dropdown',
            label: '👩🏻‍💻 Developer’s Guide',
            position: 'left',
            items: [
              { to: '/docs/developers-guide', label: 'Developers-Wiki' },
              { to: '/docs/api/CoreModule', label: 'Interplanetary Players API' }, // Link to the API docs
            ],
          },
              {
            href: 'https://github.com/plantasia-space/docs.plantasia.space',
            label: 'GitHub',
            position: 'right',
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
                label: 'User Guide',
                to: '/docs/user-guide', // Auto-generated sidebar link
              },
              {
                label: 'Developers Guide',
                to: '/docs/developers-guide', // Auto-generated sidebar link
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Esnvk2MMne',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/maar_world_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // Uncomment the blog link if you have a blog
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/plantasia-space/docs.plantasia.space',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} plantasia.space Docs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),


  // Add the search plugin to the theme
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true, // Optional: recommended for better caching
        docsRouteBasePath: '/docs', // The route base path for docs
        indexDocs: true, // Index docs (default: true)
        indexPages: true, // Index pages other than docs (default: false)
        language: ['en'], // Specify the language(s) to be indexed
        highlightSearchTermsOnTargetPage: true, // Highlight search terms on the target page
        explicitSearchResultPath: true, // Explicitly define search result paths
      },
    ],
  ],


};

export default config;