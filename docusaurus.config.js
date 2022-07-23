// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'servicepong.io docs',
  tagline: 'Dinosaurs are cool',
  url: process.env.RENDER_EXTERNAL_URL || 'http://localhost:3000/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'servicepong',
  projectName: 'servicepong-docs',
  trailingSlash: false,
  scripts: [{
    src: 'https://plausible.io/js/script.js',
    defer: true,
    'data-domain': 'docs.servicepong.io'
  }],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/servicepong/servicepong-docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'release-1',
      //   content: `⭐️ servicepong was released.`,
      // },
      colorMode: {
        respectPrefersColorScheme: true
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'servicepong.io Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/servicepong/servicepong-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'HPQM2O02SQ',
        apiKey: '8f736ecf66de4969b27c3e4f277e6fe3',
        indexName: 'docs-test',
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Docs',
            items: [{
                label: 'Integrations',
                to: '/integrations',
              }, {
                label: 'GraphQL',
                to: '/graphql',
              },
              {
                label: 'REST API',
                to: '/rest-api',
              },
            ],
          }, {
            title: 'servicepong.io',
            items: [{
                label: 'Blog',
                href: 'https://servicepong.io/blog',
              },
              {
                label: 'Pricing',
                href: 'https://servicepong.io/pricing',
              },
              {
                label: 'Sign up',
                href: 'https://app.servicepong.io/signup',
              },
            ],
          },
          {
            title: 'Community',
            items: [{
                label: 'Twitter',
                href: 'https://twitter.com/servicepong',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/servicepong',
              },
              {
                label: 'Community',
                href: 'https://community.servicepong.io.com',
              },
            ],
          },
          {
            title: 'More',
            items: [{
                label: 'Imprint',
                href: 'https://servicepong.io/imprint',
              },
              {
                label: 'Privacy policy',
                href: 'https://servicepong.io/privacy-policy',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/servicepong/servicepong-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} servicepong.io. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
