---
sidebar_position: 3
title: Web Clients
description: Browser-based Nostr clients
---

# Web Clients

Web clients let you access Nostr from any browser without downloading an app. They're perfect for quick access or when using shared computers.

## Popular Web Clients

### Primal

The most polished web experience.

- **URL:** [primal.net](https://primal.net)
- **Cost:** Free

**Features:**
- Beautiful, responsive design
- Built-in Lightning wallet
- Advanced search
- Trending content
- Caching for faster loads

**Best for:** Everyone, especially beginners

---

### Snort

A fast, lightweight client.

- **URL:** [snort.social](https://snort.social)
- **Cost:** Free

**Features:**
- Fast and responsive
- Clean interface
- Good for microblogging
- Supports most NIPs

**Best for:** Quick, no-frills experience

---

### Coracle

A privacy-focused client with advanced features.

- **URL:** [coracle.social](https://coracle.social)
- **Cost:** Free

**Features:**
- Privacy-conscious design
- Advanced relay management
- Group features (NIP-29)
- Customizable feeds

**Best for:** Privacy-focused users

---

### Nostrudel

A feature-rich, community-focused client.

- **URL:** [nostrudel.ninja](https://nostrudel.ninja)
- **Cost:** Free

**Features:**
- All the features
- Community support
- Advanced tools
- Open development

**Best for:** Power users

---

### Iris

An experimental client with unique features.

- **URL:** [iris.to](https://iris.to)
- **Cost:** Free

**Features:**
- Unique social graph features
- Offline support
- Peer-to-peer connections

**Best for:** Trying something different

---

## Long-Form Content

For blog posts and articles:

### Habla

- **URL:** [habla.news](https://habla.news)
- Write and read long-form content (NIP-23)
- Clean reading experience
- Markdown support

### Yakihonne

- **URL:** [yakihonne.com](https://yakihonne.com)
- Beautiful article layouts
- Publication features
- Newsletter-style content

---

## Comparison Table

| Client | Speed | Features | Privacy | Best For |
|--------|-------|----------|---------|----------|
| Primal | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | General use |
| Snort | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | Quick access |
| Coracle | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Privacy |
| Nostrudel | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Power users |

## Browser Extensions

Using a browser extension keeps your keys more secure:

### Nos2x

- **Browser:** Chrome, Firefox
- **Get it:** [GitHub](https://github.com/fiatjaf/nos2x)
- Simple key storage
- Signs events for web clients

### Alby

- **Browser:** Chrome, Firefox, Safari
- **Get it:** [getalby.com](https://getalby.com)
- Key storage
- Lightning wallet
- One-click zaps

### How Extensions Work

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Web Client  │────▶│  Extension  │────▶│   Relay     │
│ (primal.net)│ ask │ (nos2x/Alby)│sign │  (Server)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

1. Web client asks to sign something
2. Extension shows you what it wants to sign
3. You approve
4. Extension signs without exposing your key

:::tip Recommended Setup
Use a web client + browser extension (Alby or nos2x) for the best balance of convenience and security.
:::

## Logging In

### With Extension (Recommended)

1. Install nos2x or Alby
2. Add your private key to the extension
3. Visit a web client
4. Click "Login with Extension"
5. Approve the connection

### Without Extension

1. Visit the web client
2. Click "Login" or "I have an account"
3. Enter your nsec (private key)

:::warning Security Note
When entering your nsec directly into a website:
- Make sure you're on the official URL
- Check for https (secure connection)
- Don't use on shared/public computers
:::

## Tips for Web Users

### Bookmarks
Save your favorite clients for quick access:
- primal.net
- snort.social
- coracle.social

### Private Browsing
- Use incognito/private mode on shared computers
- Consider using an extension for key storage
- Log out when done

### Multiple Accounts
Most web clients support account switching:
1. Log out of current account
2. Log in with different nsec
3. Or use extension with multiple keys

## Mobile Web

All these clients work on mobile browsers too:
- Good for quick checks
- May lack push notifications
- Consider native app for regular use

## Recommended Starting Point

| Situation | Use |
|-----------|-----|
| General browsing | Primal |
| Privacy important | Coracle |
| Want all features | Nostrudel |
| Quick check | Snort |
| Writing articles | Habla |

## Next Steps

- [Desktop Clients](/clients/desktop) - Computer applications
- [Mobile Clients](/clients/mobile) - Phone apps
- [Understanding Relays](/using-nostr/relays)
