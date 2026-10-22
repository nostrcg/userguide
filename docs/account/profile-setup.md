---
sidebar_position: 1
title: Profile Setup
description: Setting up your Nostr profile
---

# Profile Setup

Your profile is how others see you on Nostr. A picture and a short bio make a big difference: accounts without a picture look like spam bots, and fewer people follow them back.

## What you can fill in

| Field | What it's for | Needed? |
|---|---|---|
| Display name | The name shown on your posts | Recommended |
| Username | A short name some apps show as @name | Optional |
| Picture | Your profile photo | Recommended |
| Banner | The wide header image on your profile | Optional |
| Bio (About) | A few lines about you | Recommended |
| Website | A link to your site or other profiles | Optional |
| Lightning address | Lets people send you zaps (tips) | Optional |
| Readable handle (NIP-05) | Shows `you@example.com` instead of your npub | Optional |

Different apps label these slightly differently.

## Step by step

### 1. Open the profile editor

Tap your profile picture or open your profile, then look for **Edit profile**.

### 2. Display name

The name shown on your posts. It can be your real name, a nickname or include emoji. You can change it any time.

:::note Names aren't unique
Anyone can use any display name. People tell accounts apart by the **npub** or the readable handle, not the display name.
:::

### 3. Picture

- Square images work best.
- Use something clear and recognisable, even at a small size.
- Most apps upload the image for you.

Images you post live on media servers (the standard is called *Blossom*). If your app can't upload, you can use [nostr.build](https://nostr.build) or [nostrcheck.me](https://nostrcheck.me) and paste the image link. Some apps let you add a backup media server in *Settings → Media*, so your pictures survive if one shuts down.

### 4. Banner (optional)

A wide header image. Nice to have, not essential.

### 5. Bio

Keep it short. Say what you're into, so people with the same interests follow you.

```
Gardener, film photographer and bad guitarist.
Here for #photography and #gardening.
```

### 6. Website (optional)

Your own site, blog or portfolio.

### 7. Lightning address (optional)

An email-style address, such as `you@coinos.io`, that your wallet gives you. Paste it into **Lightning address** (sometimes *LN address*), and a ⚡ button appears on your posts so people can zap you.

→ [Zaps](../using-nostr/zaps.md)

### 8. Readable handle (optional)

A handle like `you@example.com` (techies call it NIP-05) that most apps show next to your name.

→ [Verification](./verification.md)

### 9. Save

Tap **Save**. Your app publishes the profile to your relays.

## Everything is public

Your profile is public, permanent and visible in every Nostr app. If you'd like more privacy:

- Use a nickname
- Leave out your location and other personal details
- Use an avatar instead of a photo

## One profile, every app

Edit your profile in one app, and it shows up in all the others:

```
Edit in Damus  →  saved to your relays  →  shows in Primal, Amethyst, Jumble…
```

Other apps may take a moment to pick up the change.

## Troubleshooting

### Changes don't seem to save

1. Check your internet connection.
2. Save again, then refresh.
3. Check *Settings → Relays* has at least one relay you write to.

### Picture won't upload

1. Try a smaller image, or JPG or PNG.
2. Upload it at [nostr.build](https://nostr.build) or [nostrcheck.me](https://nostrcheck.me) and paste the link instead.

### Profile looks blank in another app

1. Wait a moment and refresh.
2. Make sure you chose **Log in** in the other app, not *Create account*, which makes a new, empty account.

## Examples

### Simple

```
Name: Alice
Picture: [friendly photo]
Bio: New to Nostr. Into books and hiking.
```

### Complete

```
Name: Alice Anderson
Picture: [clear headshot]
Banner: [mountain photo]
Bio: Writer and hiker. Posting about #books and the outdoors.
Website: https://alice.example.com
Lightning address: alice@coinos.io
Readable handle: alice@example.com
```

## Next steps

- [Verification](./verification.md): get a readable handle
- [Backup Your Keys](./backup-keys.md): if you haven't yet
- [Zaps](../using-nostr/zaps.md): receive tips
