// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agentic Development Docs',
  tagline: 'Modern Documentation Management for Agile/Agentic Development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://endearing-chimera-5c0e1e.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Netlify deployment, this should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NSChristopher', // Usually your GitHub org/user name.
  projectName: 'agentic-development-docs', // Usually your repo name.

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
            'https://github.com/NSChristopher/agentic-development-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NSChristopher/agentic-development-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Agentic Development Docs',
        logo: {
          alt: 'Agentic Development Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidelinesSidebar',
            position: 'left',
            label: 'Guidelines',
          },
          {
            type: 'docSidebar',
            sidebarId: 'planningSidebar',
            position: 'left',
            label: 'Planning',
          },
          {
            type: 'docSidebar',
            sidebarId: 'templatesSidebar',
            position: 'left',
            label: 'Templates',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/NSChristopher/agentic-development-docs',
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
                label: 'Getting Started',
                to: '/docs/docs/getting-started',
              },
              {
                label: 'Templates',
                to: '/docs/templates/issue-template',
              },
            ],
          },
          {
            title: 'Guidelines',
            items: [
              {
                label: 'Issue Guidelines',
                to: '/docs/guidelines/issue-generation-guidelines',
              },
              {
                label: 'Sprint Planning',
                to: '/docs/guidelines/sprint-generation-guidelines',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Template Browser',
                to: '/templates',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NSChristopher/agentic-development-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agentic Development Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
