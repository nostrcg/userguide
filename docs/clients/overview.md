---
sidebar_position: 1
title: Clients Overview
description: Understanding Nostr clients and how to choose one
---

# Nostr Clients

Nostr apps are called **clients**. Every one of them works with the same account, so you can try a few. Your profile, followers and posts come with you.

## What is a client?

A client is any app that:

- Connects to Nostr relays (the servers that store and pass on posts)
- Lets you read and write posts
- Uses your key to sign what you post, or asks a signer to do it
- Shows content in its own way

## One identity, many apps

![One identity, many apps](/img/diagrams/one-identity-many-apps.svg)

Your account is your key, not an app. Close one app, open another, log in with the same key, and your profile and follows are there.

## Just tell me what to install

| Your device | Pick either one | Then explore |
|---|---|---|
| **iPhone** | [Damus](https://damus.io) or [Primal](https://primal.net) | [Nostur](https://nostur.com), [Ditto](https://ditto.pub) |
| **Android** | [Amethyst](https://amethyst.social) or [Primal](https://primal.net) | [Ditto](https://ditto.pub), [YakiHonne](https://yakihonne.com) |
| **Computer** | [Jumble](https://jumble.social) or [primal.net](https://primal.net) | [Ditto](https://ditto.pub), [Nostria](https://nostria.app) |

**How we choose:** free, actively updated, easy sign-up, and your account works in any other app. We list two per device so no single company becomes the front door.

:::note Checked 22 October 2026
Every app on these pages had a working website and recent updates when we checked. Found a broken link? [Tell us](https://github.com/nostrcg/userguide/issues).
:::

## Types of clients

### By device

| Device | Good for | Page |
|---|---|---|
| Phone | Everyday use, notifications, zaps on the go | [Mobile clients](./mobile.md) |
| Browser | No download, works on any computer | [Web clients](./web.md) |
| Computer app | Big screens, multi-column layouts | [Desktop clients](./desktop.md) |

### By what you want to do

| Type | Examples |
|---|---|
| **Social feed** (like X/Twitter) | Primal, Damus, Amethyst, Jumble, Ditto |
| **Long-form writing** | YakiHonne, Pareto |
| **Chat and groups** | 0xchat, White Noise, Flotilla, Keychat |
| **Short video and live** | Divine, zap.stream |
| **Music and podcasts** | Wavlake, Fountain |
| **Buy and sell** | Shopstr, Plebeian Market, Conduit |

See [Specialized clients](./specialized.md) for more.

## Questions to ask yourself

1. **What device do you use most?** Phone: pick from the [mobile](./mobile.md) list. Computer: start with a [web client](./web.md).
2. **What do you want to do?** Chat with friends, read articles, or just scroll a feed? Each has apps built for it.
3. **How much do you like to tinker?** Primal, Damus and Ditto keep things simple. Amethyst, Coracle, noStrudel and Nostur give you many more settings.

## Using more than one app

You can use Damus on your iPhone, Jumble on your work computer and Amethyst on an Android tablet, all with the same account.

To log into a second app:

1. Open the new app.
2. Choose *Log in* or *I have an account*.
3. Use a signer if the app supports one, or paste your private key (nsec).
4. Your profile and follows load.

:::danger Where to type your nsec
Never give your nsec to a person, or to a website someone sent you. Type it only into an app you installed yourself, or a well-known Nostr site you typed in yourself. Better still, use a [signer](../getting-started/your-identity.md), so apps never see your key.
:::

:::caution Logging out deletes the key
If you pasted your nsec into an app, logging out erases it from that device. Save your backup first, and test it by logging into a **second** app, not by logging out. See [Back up your keys](../account/backup-keys.md).
:::

## Comparing the main picks

| | Damus | Primal | Amethyst | Jumble |
|---|---|---|---|---|
| Devices | iPhone, Mac, Android | iPhone, Android, Web | Android, Desktop | Web |
| Zaps | Yes | Yes | Yes | Yes |
| Built-in wallet | No | Yes (phone apps only) | No | No |
| Private messages | Yes (moving to NIP-17) | Yes (older NIP-04) | Yes (NIP-17) | Not checked |
| Lots of settings | Some | Some | Many | Some |
| Price | Free | Free | Free | Free |

For the difference between the two kinds of private messages, see [Direct messages](../using-nostr/messaging.md).

## Switching apps

1. Make sure your key is backed up.
2. Install the new app.
3. Log in with your signer or key.
4. Done. Your followers and posts come with you.

## Next steps

- [Mobile clients](./mobile.md): apps for your phone
- [Web clients](./web.md): use Nostr in a browser
- [Desktop clients](./desktop.md): apps for your computer
- [Specialized clients](./specialized.md): chat, video, music, writing and more
