---
sidebar_position: 5
title: Specialized Clients
description: Nostr apps for specific use cases
---

# Specialized Clients

Beyond general social media, Nostr powers many specialized applications. Here's what's available.

## Long-Form Content

For writers, bloggers, and journalists.

### Habla

- **URL:** [habla.news](https://habla.news)
- Write and publish articles (NIP-23)
- Markdown support
- Clean reading experience
- Comments via Nostr

### Yakihonne

- **URL:** [yakihonne.com](https://yakihonne.com)
- Beautiful article layouts
- Newsletter features
- Curated content
- Publication tools

**Best for:** Writers who want a Medium-like experience

---

## Media & Photography

For visual content.

### Olas

- **URL:** [olas.app](https://olas.app)
- Instagram-style photo sharing
- Gallery views
- Photo stories
- Mobile-first design

### Nostragram

- Photo sharing focused
- Grid layouts
- Visual discovery

**Best for:** Photographers, visual creators

---

## Live Streaming

For content creators who stream.

### Zap.stream

- **URL:** [zap.stream](https://zap.stream)
- Live video streaming
- Zaps during streams
- Chat integration
- VOD (video on demand)

**Best for:** Streamers, live content creators

---

## Audio & Podcasts

For listeners and audio creators.

### Fountain

- **URL:** [fountain.fm](https://fountain.fm)
- Podcast app with Nostr integration
- Zap clips to podcasters
- Social features
- Episode comments

### Wavlake

- **URL:** [wavlake.com](https://wavlake.com)
- Music streaming
- Artist payments via Lightning
- Nostr comments and discovery

**Best for:** Podcast listeners, music fans

---

## Chat & Messaging

For private and group conversations.

### 0xchat

- **Download:** [0xchat.com](https://0xchat.com)
- Encrypted private messaging
- Group chats
- Voice messages
- Mobile-first

### Blowater

- Private messaging
- Clean interface
- Focus on conversation

**Best for:** Direct messaging, group chats

---

## Communities & Forums

For group discussions.

### Flotilla

- **URL:** [flotilla.social](https://flotilla.social)
- Discord-like experience on Nostr
- "Relays as groups" concept
- Rooms, channels, and chat
- DM alerts and notifications

### Satellite

- **URL:** [satellite.earth](https://satellite.earth)
- Reddit-style communities (NIP-72)
- Topic-based discussions
- Moderated spaces

### Chachi

Chachi is a **relay-based group chat client** implementing NIP-29, built by [Verbiricha](https://njump.me/npub107jk7htfv243u0x5ynn43scq9wrxtaasmrwwa8lfu2ydwag6cx2quqncxg) (creator of Habla.news). It's designed to be mobile-friendly, bandwidth efficient, and interoperable with all kinds of content.

- **URL:** [chachi.chat](https://chachi.chat)
- **Source:** [git.v0l.io/verbiricha/chachi](https://git.v0l.io/verbiricha/chachi)
- **License:** MIT (Open Source)

#### What Makes Chachi Different

Unlike traditional chat apps, Chachi uses **NIP-29 relay-based groups**:

| Traditional Chat | Chachi (NIP-29) |
|-----------------|-----------------|
| Company controls your data | Community chooses where data lives |
| Locked to one platform | Interoperable with other NIP-29 clients |
| Lose access if banned | Move groups to different relays |
| Centralized servers | Decentralized relay infrastructure |

#### Core Features

**Group Management:**
- Create, edit, join, and leave groups
- Bookmark favorite groups
- Accept/reject membership requests (for admins)
- Delete events and moderate content
- Role-based administration

**Chat & Content:**
- Real-time messaging with threading
- Posts with NIP-22 comment support
- Unread message counters
- Support for text notes, polls, highlights
- Custom emoji support

**Planned Features (OpenSats Grant):**
- Long-form content, video, audio, wikis
- Calendar events for group scheduling
- NIP-17 direct messages
- PWA for mobile installation
- Zaps integration
- NIP-46/NIP-55 login methods

#### How NIP-29 Groups Work

Groups are hosted on relays and identified like: `groups.0xchat.com'groupname`

**Group Types:**
- **Public/Open** — Anyone can read and join freely
- **Public/Closed** — Anyone can read, but joining requires approval
- **Private/Open** — Members only read, anyone can request to join
- **Private/Closed** — Members only, admin approval required

#### Getting Started with Chachi

1. Visit [chachi.chat](https://chachi.chat)
2. Login with your Nostr key (or browser extension)
3. Browse available groups or create your own
4. Join the official Chachi group: `chachi.chat/groups.0xchat.com/chachi`

#### Use Cases

- **Open source projects** — Coordinate development
- **Local meetups** — Organize events and discussions
- **Topic communities** — Create spaces around interests
- **Private teams** — Secure team communication
- **Study groups** — Collaborative learning

:::tip Blossom Integration
Chachi uses [Blossom](/clients/specialized#blossom) for file hosting, so your media is also decentralized and censorship-resistant.
:::

### Zapddit

- Reddit-style client for Nostr
- Follow topics like subreddits
- Upzap/downzap with sats
- Mute topics you don't like

**Best for:** Group discussions, forums, team chat

---

## Marketplaces

For buying and selling.

### Shopstr

- **URL:** [shopstr.store](https://shopstr.store)
- Peer-to-peer marketplace
- Bitcoin/Lightning payments
- Direct seller contact

### Plebeian Market

- Decentralized marketplace
- Auction support
- Escrow features

**Best for:** Buying/selling goods

---

## Games & Entertainment

### Jester (Chess)

- **URL:** [jesterui.github.io](https://jesterui.github.io)
- Play chess with anyone over Nostr
- No account needed - just share a link
- Decentralized game state

### POGN (Poker)

- **URL:** [GitHub](https://github.com/jalToorey/pogn)
- Poker and other games on Nostr
- Peer-to-peer card games
- Mental poker implementation

### Nostr Nests

- Audio spaces (like Twitter Spaces/Clubhouse)
- Live audio conversations
- Zap speakers in real-time

**Best for:** Gaming and social audio

---

## P2P Exchange

### Mostro

- **URL:** [mostro.network](https://mostro.network)
- Lightning Network P2P exchange
- No KYC required
- Censorship-resistant trading
- Escrow protection
- Buy/sell Bitcoin for any currency

**Best for:** Private, decentralized Bitcoin trading

---

## Media Hosting

### Blossom

Blossom is a protocol for decentralized media hosting on Nostr.

**How it works:**
- Upload images/videos to Blossom-compatible servers
- Files are addressed by sha256 hash
- Mirror to multiple servers for redundancy
- If one server censors you, switch to another

**Blossom Servers:**
- [nostr.build](https://nostr.build) - Popular, free hosting
- [blosstr.com](https://blosstr.com) - Enterprise-grade hosting
- [nostrmedia.com](https://nostrmedia.com) - Image & video hosting

**Best for:** Censorship-resistant media storage

---

## Code Collaboration

### GitWorkshop

- **URL:** [gitworkshop.dev](https://gitworkshop.dev)
- Decentralized GitHub alternative
- Issues and pull requests over Nostr
- Repository discovery
- NIP-34 compliant

### Gitstr

- **URL:** [GitHub](https://github.com/fiatjaf/gitstr)
- Send and receive git patches over Nostr
- No central server needed
- Announce repos to relays

**Best for:** Developers wanting decentralized code collaboration

---

## Developer Tools

### Njump

- **URL:** [njump.me](https://njump.me)
- View any Nostr event
- Share links to non-Nostr users
- Event inspector

### Nostr.band

- **URL:** [nostr.band](https://nostr.band)
- Search engine for Nostr
- Statistics and trends
- API access

---

## Client Directory

For a complete list of Nostr apps:

- **Nostr Apps:** [nostrapps.com](https://nostrapps.com)
- **Nostr.net:** [nostr.net](https://nostr.net)

---

## Summary Table

| Category | App | Platform |
|----------|-----|----------|
| Long-form | Habla, Yakihonne | Web |
| Photos | Olas | Mobile/Web |
| Streaming | Zap.stream | Web |
| Podcasts | Fountain | Mobile |
| Music | Wavlake | Web |
| Chat | 0xchat, Flotilla | Mobile/Web |
| Group Chat | Chachi (NIP-29) | Web/PWA |
| Communities | Satellite, Zapddit | Web |
| Marketplace | Shopstr, Mostro | Web |
| Gaming | Jester, POGN | Web |
| Media Hosting | Blossom servers | Web |
| Code | GitWorkshop | Web |

## One Account for Everything

Remember: your Nostr keys work in **all** these apps!

![One Identity, Many Apps](/img/diagrams/one-identity-many-apps.svg)

- Post on Damus
- Write on Habla
- Share photos on Olas
- Chat on 0xchat
- Stream on Zap.stream
- Listen on Fountain

**All with the same identity!**

## Next Steps

- [Using Zaps](/using-nostr/zaps) - Lightning payments
- [Direct Messages](/using-nostr/messaging) - Private communication
- [Understanding Relays](/using-nostr/relays)
