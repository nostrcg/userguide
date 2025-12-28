import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Nostr User Guide',
  tagline: 'Your friendly guide to the decentralized social network',
  favicon: 'img/favicon.ico',

  url: 'https://nostrcg.github.io',
  baseUrl: '/userguide/',

  organizationName: 'nostrcg',
  projectName: 'userguide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/nostrcg/userguide/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/nostr-social-card.jpg',
    navbar: {
      title: 'Nostr User Guide',
      logo: {
        alt: 'Nostr Logo',
        src: 'img/logo.jpg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/clients/overview',
          label: 'Clients',
          position: 'left',
        },
        {
          to: '/help/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://nostrapps.com',
          label: 'Apps Directory',
          position: 'left',
        },
        {
          href: 'https://nostrcg.github.io/devguide/',
          label: 'Developer Guide',
          position: 'right',
        },
        {
          href: 'https://github.com/nostrcg/userguide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Choose a Client',
              to: '/clients/overview',
            },
            {
              label: 'Specialized Apps',
              to: '/clients/specialized',
            },
            {
              label: 'FAQ',
              to: '/help/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'W3C Nostr CG',
              href: 'https://www.w3.org/community/nostr/',
            },
            {
              label: 'Nostr Apps Directory',
              href: 'https://nostrapps.com',
            },
            {
              label: 'Find Relays',
              href: 'https://nostr.watch',
            },
            {
              label: 'Search Nostr',
              href: 'https://nostr.band',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Developer Guide',
              href: 'https://nostrcg.github.io/devguide/',
            },
            {
              label: 'NIPs Reference',
              href: 'https://nips.nostr.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nostrcg/userguide',
            },
          ],
        },
      ],
      copyright: `Built with love for the Nostr community.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
