---
sidebar_position: 2
title: Mobile Clients
description: Nostr apps for iPhone and Android
---

# Mobile Clients

Phone apps are the most popular way to use Nostr. All of them are free, and the same account works in every one.

## Start here

| Your phone | Pick either one |
|---|---|
| **iPhone** | [Damus](https://damus.io) or [Primal](https://primal.net) |
| **Android** | [Amethyst](https://amethyst.social) or [Primal](https://primal.net) |

Not sure? Install one, and try the other later with the same account.

## iPhone

### Damus

The original iPhone app: simple and clean.

- **Get it:** [App Store](https://apps.apple.com/app/damus/id1628663131) · [damus.io](https://damus.io)
- **Also on:** Mac and Android

**Good at:** a calm timeline, zaps, private messages. Damus is switching its messages to the newer, more private NIP-17 standard in its next update.

---

### Primal

Fast and polished, with discovery feeds and a built-in wallet.

- **Get it:** [App Store](https://apps.apple.com/app/primal/id1673134518) · [primal.net](https://primal.net)
- **Also on:** Android and the web

**Good at:** finding interesting people quickly, and zapping without setting up a separate wallet.

:::caution Primal's wallet has its own backup
The wallet in the Primal phone apps has its own recovery phrase (12 to 24 words), separate from your Nostr key. Saving your nsec does **not** save your sats, so write those words down too. See [Zaps](../using-nostr/zaps.md).
:::

---

### Nostur

A power-user app for iPhone and Mac with lots of options.

- **Get it:** [nostur.com](https://nostur.com)

**Good at:** multiple accounts, custom feeds and fine-grained settings.

---

### Ditto

A friendly all-rounder made for people new to Nostr.

- **Get it:** [ditto.pub](https://ditto.pub)
- **Also on:** Android and the web

---

## Android

### Amethyst

The most feature-packed Android app. It supports almost everything Nostr can do.

- **Get it:** [Google Play](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) · [amethyst.social](https://amethyst.social) · [Zapstore](https://zapstore.dev)
- **Also on:** Desktop

**Good at:** private messages (NIP-17), relay settings, live streams, communities, and working with the Amber signer.

---

### Primal

The same app as on iPhone, with the built-in wallet.

- **Get it:** [Google Play](https://play.google.com/store/apps/details?id=net.primal.android) · [primal.net](https://primal.net)

Primal still sends private messages with the older NIP-04 standard (as of October 2026). Some newer apps may hide those messages.

---

### Damus, Ditto and YakiHonne

- [**Damus**](https://damus.io) is now on Android too.
- [**Ditto**](https://ditto.pub): a friendly all-rounder for newcomers.
- [**YakiHonne**](https://yakihonne.com): a social feed plus long-form articles and creator tools.

---

## Chat apps for your phone

If private messages matter most to you:

- [**0xchat**](https://0xchat.com) (iPhone, Android, Desktop): Telegram-style private messages, group chats and calls.
- [**White Noise**](https://whitenoise.chat) (Android, iPhone): strongly encrypted messenger, like Signal, with no phone number needed. In beta.
- [**Keychat**](https://keychat.io) (iPhone, Android, Desktop): private chat with a bitcoin wallet built in.
- [**Flotilla**](https://flotilla.social) (iPhone, Android, Web): Discord-style community spaces.

See [Direct messages](../using-nostr/messaging.md) for which apps can read which messages.

## Other phone apps

- [**Divine**](https://divine.video) (iPhone, Android): six-second looping videos, the Vine reboot.
- [**Fountain**](https://fountain.fm) (iPhone, Android): a podcast app with Nostr comments, profiles and tips.
- [**Wavlake**](https://wavlake.com) (iPhone, Android, Web): stream music, and artists get paid directly.
- [**Zapstore**](https://zapstore.dev) (Android): an app store full of Nostr apps, where developers sign every release.

## Keep your key safe on your phone

### Android: Amber

[**Amber**](https://github.com/greenart7c3/Amber) is a signer. It holds your key, and other apps ask it for permission, as in *"Allow Primal to post this note?"* Amethyst, Primal and many other apps have a *Log in with Amber* button. Get it from [Zapstore](https://zapstore.dev) or GitHub.

### iPhone: Aegis

[**Aegis**](https://github.com/ZharlieW/Aegis) is a signer in beta, installed through TestFlight. An Android version is on its GitHub page too. iPhone apps can't talk to each other directly, so it works as a *bunker*: the app connects with a `bunker://…` or `nostrconnect://…` link or QR code. Fewer iPhone apps support this so far.

See [Your identity](../getting-started/your-identity.md) for more on signers.

## Comparison

| App | Phone | Built-in wallet | Private messages | Difficulty |
|---|---|---|---|---|
| Damus | iPhone, Android | No | Yes (moving to NIP-17) | Easy |
| Primal | iPhone, Android | Yes | Yes (older NIP-04) | Easy |
| Ditto | iPhone, Android | No | Not checked | Easy |
| Amethyst | Android | No | Yes (NIP-17) | Medium |
| Nostur | iPhone | No | Yes | Medium |

## First-time setup

1. **Install** your chosen app from the official store or website.
2. **Create an account.** Many apps offer ready-made topic lists of people to follow during sign-up.
3. **Back up your private key (nsec).** In most apps it's in *Settings → Keys*. Save it in a password manager and on paper. If the app offers an encrypted backup (`ncryptsec1…`), save that **as well**, not instead: Primal and Damus can't log in with ncryptsec yet.
4. **Set up your profile:** name, picture, bio. See [Profile setup](../account/profile-setup.md).

:::caution Don't test your backup by logging out
If you pasted your nsec into an app, logging out erases it from that phone. Test your backup by logging into a **second** app instead, for example [jumble.social](https://jumble.social) in a browser. If your profile appears, you're safe.
:::

### Logging in with an existing account

1. Open the app and choose *Log in* or *I have an account*.
2. On Android, tap *Log in with Amber* if you use it. Otherwise paste your nsec.
3. Your profile and follows load.

Only paste your nsec into an app you installed yourself. Never give it to a person or a website someone sent you.

## Notifications

Most phone apps can notify you about new followers, mentions, replies and zaps. Turn them on in the app's *Settings → Notifications*. Many apps run their own notification service so alerts arrive reliably.

## Tips

- **Battery and data:** images and videos use the most data. Use Wi-Fi for media-heavy browsing.
- **Multiple accounts:** Nostur and Amethyst make switching accounts easy.
- **Media uploads:** apps upload your pictures to media servers for you. Some let you add a backup server in *Settings → Media*.

## Next steps

- [Web clients](./web.md): use Nostr in a browser
- [Desktop clients](./desktop.md): apps for your computer
- [Set up your profile](../account/profile-setup.md)
