import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/what-is-nostr',
        'getting-started/why-nostr',
        'getting-started/quick-start',
        'getting-started/your-identity',
      ],
    },
    {
      type: 'category',
      label: 'Clients',
      collapsed: true,
      items: [
        'clients/overview',
        'clients/mobile',
        'clients/web',
        'clients/desktop',
        'clients/specialized',
      ],
    },
    {
      type: 'category',
      label: 'Using Nostr',
      collapsed: true,
      items: [
        'using-nostr/posting',
        'using-nostr/following',
        'using-nostr/messaging',
        'using-nostr/zaps',
        'using-nostr/wallet-connect',
        'using-nostr/relays',
      ],
    },
    {
      type: 'category',
      label: 'Your Account',
      collapsed: true,
      items: [
        'account/profile-setup',
        'account/verification',
        'account/backup-keys',
        'account/multiple-clients',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      collapsed: true,
      items: [
        'help/faq',
        'help/troubleshooting',
        'help/glossary',
        'help/resources',
      ],
    },
  ],
};

export default sidebars;
