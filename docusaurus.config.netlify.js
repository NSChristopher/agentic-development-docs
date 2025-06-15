// Netlify-specific Docusaurus config
// Use this for Netlify deployment

// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agentic Development Docs',
  tagline: 'Modern Documentation Management for Agile/Agentic Development',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // For Netlify deployment - use your actual Netlify URL
  url: 'https://your-site-name.netlify.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Ensure static directory is included
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/NSChristopher/agentic-development-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/NSChristopher/agentic-development-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Agentic Development Docs',
      logo: {
        alt: 'Agentic Development Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/templates',
          label: 'Templates',
          position: 'left'
        },
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
              label: 'Guidelines',
              to: '/docs/guidelines',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Templates',
              to: '/templates',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'More',
          items: [
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
  },
};

export default config;
