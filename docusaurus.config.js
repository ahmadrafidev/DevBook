// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DevBook",
  tagline: 'Code, Product, Design, and Everything Between',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://devnook.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ahmadrafidev', // Usually your GitHub org/user name.
  projectName: 'DevBook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ahmadrafidev/DevBook/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ahmadrafidev/DevBook/tree/master/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "DevBook",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/ahmadrafidev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learning',
            items: [
              {
                label: 'Notes',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Personal Website',
                href: 'https://www.rafiwirana.co/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ahmadrafiwirana/',
              },
              {
                label: 'X',
                href: 'https://x.com/rafiwiranaa',
              },
              {
                label: 'Medium',
                href: 'https://ahmadrafi.medium.com/'
              },
              {
                label: 'Substack',
                href: 'https://ahhmadrafi.substack.com/'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ahmadrafidev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevBook. Built with Docusaurus. Customized by Rafi.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
