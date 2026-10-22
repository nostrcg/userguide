---
sidebar_position: 3
title: Quick Start
description: Your first Nostr post in about 10 minutes
---

# Quick Start

No email, no phone number, no ID. Just an app and about **10 minutes**.

**The one idea you need:** your account is a **key** that *you* hold. Any Nostr app can open it, so you can switch apps whenever you like and keep your name, posts and followers.

## Step 1: Get an app

Pick either app for your device. The same account works in both, and in every other Nostr app.

| On… | Pick either one |
|---|---|
| **iPhone** | [Damus](https://apps.apple.com/app/damus/id1628663131) or [Primal](https://apps.apple.com/app/primal/id1673134518) |
| **Android** | [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst) or [Primal](https://play.google.com/store/apps/details?id=net.primal.android) |
| **Computer** | [jumble.social](https://jumble.social) or [primal.net](https://primal.net), right in your browser |

More choices, such as Ditto, YakiHonne and Nostur, are in [Clients](../clients/overview.md).

## Step 2: Create your account

Tap **Create account**, pick a name and a picture, and you're in. Behind the scenes, the app has made your two keys:

- **npub** (public key): like your **username**. Share it freely.
- **nsec** (private key): like your **password**, except it can **never be reset**. Keep it secret.

:::tip Optional, for extra safety
Create your key at [nstart.me](https://nstart.me) instead. It walks you through a safe backup, then you log into your app with it.
:::

## Step 3: Save your key (2 minutes)

This is the one step you can't skip. In the app, open **Settings → Keys** (sometimes *Account* or *Backup*), copy your **nsec**, and save it in **two places**:

1. A **password manager** (Bitwarden, 1Password, Proton Pass, your phone's built-in one…)
2. **On paper**, kept somewhere safe

If your app also offers an *encrypted backup* (starts `ncryptsec1…`), save that too, but keep your plain nsec backup as well. Some apps, including Primal and Damus, can't log in with the encrypted one yet.

:::danger Don't log out yet
Never log out (or "sign out"), delete the app or reset your phone until you've saved your nsec. If you pasted your key into an app, logging out erases it from that device, and nobody can recover it for you.
:::

More detail: [Backup Your Keys](../account/backup-keys.md).

## Step 4: Fill in your profile

In **Edit profile**, add:

- **A picture and a short bio.** Accounts without a picture look like spam bots, and fewer people follow them back.
- **A Lightning address** *(optional)* so people can send you tips. See [Zaps](../using-nostr/zaps.md).
- **A readable handle** *(optional)* like `you@example.com` (techies call this NIP-05). See [Verification](../account/verification.md).

More detail: [Profile Setup](../account/profile-setup.md).

## Step 5: Follow at least 20 people

An empty feed is the main reason people give up. Fix it fast:

- **Accept your app's suggestions** during sign-up. Many apps offer ready-made lists of people by topic, which you can follow in one tap.
- **Search for things you love**, such as `#photography`, `#books`, `#gardening` or `#music`.
- **Bring your friends.** Search their name, look for an `npub…` in their X, Bluesky or Instagram bio, or just ask them for it. Post *your* npub on your old accounts so people can find you.

## Step 6: Say hello

Write a first post introducing yourself and add **`#introductions`**. People really do welcome newcomers, and some will send a small tip to say hi. Have a question? Add **`#asknostr`**.

## What it's like

- **No algorithm by default.** The people you follow *are* your feed, in time order. It's quiet until you follow 20 to 50 people.
- **Strangers reply.** That's normal and usually friendly.
- **Lots of ⚡ numbers.** Those are tips, used like applause. You can ignore them completely.
- **A strong bitcoin crowd.** You'll see plenty of bitcoin talk and "GM" (good morning) posts. Follow what you like and mute what you don't.
- **Some rough edges.** If something's broken, try another app with the same account.

## Using a second app or device

In the new app, choose **Log in** (not *Create account*), then pick the safest option it offers:

1. **Log in with a signer** (Amber on Android, a browser extension on a computer). Best, because the app never sees your key.
2. **Paste your nsec.** Fine in well-known apps you installed yourself, or well-known sites like jumble.social or primal.net that you typed in yourself. Never on a site someone sent you a link to.

See [Multiple Clients](../account/multiple-clients.md).

## First-week checklist

- [ ] nsec saved in **two** places
- [ ] Picture, name and bio set
- [ ] Following 20+ accounts
- [ ] Posted an `#introductions` note
- [ ] Replied to 5 posts (replies get you noticed far more than posts)
- [ ] Logged in on a second device or app with your saved key
- [ ] *(Optional)* Sent your first zap

## Need help?

- [FAQ](../help/faq.md)
- [Troubleshooting](../help/troubleshooting.md)
- Ask on Nostr with **#asknostr**
