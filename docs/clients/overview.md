---
sidebar_position: 1
title: Clients Overview
description: Understanding Nostr clients and how to choose one
---

# Nostr Clients

A **client** is an app you use to access Nostr. Unlike traditional social media where you're locked into one app, Nostr gives you the freedom to choose from many different clients.

## What is a Client?

A client is any application that:
- Connects to Nostr relays
- Lets you read and write posts
- Manages your keys (or works with a signer)
- Displays content in its own unique way

## One Identity, Many Experiences

```
                    ┌─────────────┐
                    │  Your Keys  │
                    │  (Identity) │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│    Damus      │  │    Primal     │  │   Amethyst    │
│  (iPhone)     │  │  (Web/Mobile) │  │  (Android)    │
└───────────────┘  └───────────────┘  └───────────────┘
```

Your followers, posts, and identity work across ALL clients!

## Types of Clients

### By Platform

| Platform | Best For |
|----------|----------|
| [Mobile](/clients/mobile) | On-the-go posting, notifications |
| [Web](/clients/web) | No download, works anywhere |
| [Desktop](/clients/desktop) | Power users, long-form content |

### By Focus

| Type | Examples | Best For |
|------|----------|----------|
| **Twitter-style** | Damus, Primal, Amethyst | Microblogging, social feed |
| **Long-form** | Habla, Yakihonne | Blog posts, articles |
| **Media** | Olas, Nostragram | Photos, visual content |
| **Chat** | 0xchat | Private messaging |
| **Streaming** | Zap.stream | Live video |
| **Audio** | Fountain | Podcasts |

→ See [Specialized Clients](/clients/specialized) for more

## Choosing Your First Client

### Beginners: Start Here

| Platform | Recommended | Why |
|----------|-------------|-----|
| **iPhone** | Damus | Beautiful, intuitive |
| **Android** | Amethyst | Feature-rich |
| **Web** | Primal | Clean, works anywhere |

### Questions to Consider

1. **What device do you use most?**
   - Phone → Mobile client
   - Computer → Web or desktop client

2. **What do you want to do?**
   - Microblog → Damus, Primal, Amethyst
   - Write articles → Habla
   - Share photos → Olas

3. **How technical are you?**
   - Beginner → Primal (simple, clean)
   - Intermediate → Damus/Amethyst (more features)
   - Advanced → Gossip, Coracle (customizable)

## Using Multiple Clients

One of Nostr's best features is client portability. You can:

- Use **Damus** on your iPhone
- Use **Primal** on the web at work
- Use **Amethyst** on your Android tablet

All from the **same account**!

### How to Use Multiple Clients

1. Open the new client
2. Choose "Login" or "Use existing account"
3. Enter your private key (nsec) or use a signer
4. Your account loads automatically!

:::warning Using Your nsec
When entering your private key into a new client, make sure:
- You trust the app
- You're on the official website (not a fake)
- You're on a secure connection (https)

Better yet: use a [signer app](/getting-started/your-identity#signer-apps-advanced)
:::

## Client Comparison

| Feature | Damus | Primal | Amethyst |
|---------|-------|--------|----------|
| Platform | iOS | All | Android |
| Zaps | ✅ | ✅ | ✅ |
| DMs | ✅ | ✅ | ✅ |
| Media | ✅ | ✅ | ✅ |
| Beginner-friendly | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Customization | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Price | Free | Free | Free |

## Switching Clients

Switching is easy:
1. Back up your private key
2. Download the new client
3. Import your account
4. Done!

Your followers, posts, and everything else comes with you.

## Next Steps

- [Mobile Clients](/clients/mobile) - Best apps for phone
- [Web Clients](/clients/web) - Browser-based options
- [Desktop Clients](/clients/desktop) - Computer applications
- [Specialized Clients](/clients/specialized) - Unique experiences
