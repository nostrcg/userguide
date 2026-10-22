---
sidebar_position: 4
title: Zaps & Lightning
description: Sending and receiving small bitcoin tips on Nostr
---

# Zaps & Lightning

:::note Zaps are optional
You can use Nostr for years without touching bitcoin. Nostr itself has no coin or token. Skip this page if it's not for you.
:::

A **zap** is a small tip in bitcoin that you send to a post or a person. It travels over the Lightning Network, arrives in seconds and works worldwide. Zaps are usually tiny: 21 sats (a couple of cents) is the classic "nice post". They're how many writers, artists and developers on Nostr get paid directly, with no ads and no platform taking a cut.

*Sats* (satoshis) are the smallest unit of bitcoin. 100,000,000 sats make one bitcoin.

## How a zap works

![How a zap works](/img/diagrams/zap-flow.svg)

1. You tap the ⚡ button on a post.
2. Your connected wallet pays.
3. The sats arrive at the creator's **Lightning address** in seconds.
4. The zap shows up on the post, with the amount and your comment.

## Pick your path

| You want to… | Do this |
|---|---|
| **Zap with the least setup** | Use the wallet built into the **Primal** phone app. |
| **Use one wallet in every app** | Get a wallet that supports **Nostr Wallet Connect (NWC)** and link it to each app. See [Wallet Connect](./wallet-connect.md). |
| **Only receive** | Get any wallet with a **Lightning address** and paste it into your profile. |

:::caution Primal wallet has its own recovery phrase
Primal's wallet lives in the Primal **phone apps** (not on the primal.net website). It has its own recovery phrase of 12 to 24 words, separate from your Nostr key. Saving your nsec does *not* save your sats, so write those words down too.
:::

## Wallets that work well with Nostr

| Wallet | Devices | Type | Notes |
|---|---|---|---|
| [Alby Hub](https://getalby.com/alby-hub) + [Alby Go](https://getalby.com/alby-go) | Web, iPhone, Android | Self-custody | The reference wallet for connecting to Nostr apps. Run it yourself, or let Alby host it for a monthly fee. |
| [Primal wallet](https://primal.net) | iPhone, Android | Self-custody | Built on Spark. Zero setup if you already use Primal. Back up its recovery phrase. |
| [Coinos](https://coinos.io) | Web | Custodial | Free and web-based. Gives you a Lightning address and NWC in a minute. It disclosed a credential leak in August 2026, so pocket money only. |
| [Zeus](https://zeusln.com) | iPhone, Android | Self-custody | More control, with a bit more to learn. |
| [Minibits](https://minibits.cash) · [Cashu.me](https://cashu.me) | Android, iPhone · Web | Ecash | Private, lightweight wallets using Cashu tokens. Pocket money only. |

**What those types mean:**

- **Self-custody:** only you control the money. Lose your recovery words and it's gone, just like your nsec.
- **Custodial:** a company holds it for you. Easy, but they can freeze it, block your country or shut down.
- **Ecash:** tokens issued by a "mint" you choose. Private and simple, but the mint holds the actual bitcoin, so it's custodial too. A zap paid in ecash is sometimes called a *nutzap*.

:::caution
Keep only pocket money in custodial or ecash wallets. Wallet services change often, so if an older guide names a wallet that isn't listed here, it may have closed or changed how it works.
:::

## Receiving zaps

1. Get a wallet that gives you a **Lightning address**. It looks like an email, such as `you@coinos.io`.
2. In your Nostr app, open **Edit profile** and paste it into **Lightning address** (sometimes labelled *LN address*).
3. Save. A ⚡ button now appears on your posts and profile, and anyone can zap you.

See [Profile Setup](../account/profile-setup.md) for the rest of your profile.

## Sending zaps

1. Connect a wallet to your app with NWC, or set up Primal's built-in wallet. See [Wallet Connect](./wallet-connect.md).
2. Tap ⚡ on a post to send your default amount.
3. **Long-press** ⚡ in most apps to pick a custom amount and add a comment.
4. Set a **default zap amount** in settings. 21 sats is the classic.

Without a connected wallet, many apps show a Lightning invoice or QR code instead, which you can pay from any Lightning wallet.

To get sats in the first place, receive some zaps, or buy bitcoin from an exchange and send it to your wallet.

## Zap etiquette

- **21 sats** means "nice". **100 to 1,000** means "this made my day". There's no wrong amount.
- **Add a comment.** It shows up publicly and creators love it.
- **Zaps are public.** Everyone can see who zapped what, and how much.
- Don't feel you have to zap everything, and don't expect zaps back.
- **Don't follow back strangers who zap you tiny amounts.** That's a common bot trick.

## Scams to ignore

- **"Double your money" offers and giveaway DMs.** Always scams.
- **"You've been zapped! Claim your sats here" links.**
- **Anything selling a "Nostr token".** Nostr has no token.

## Zaps beyond tips

- **Live streams:** viewers tip streamers with zaps on [zap.stream](https://zap.stream).
- **Music and podcasts:** [Wavlake](https://wavlake.com) pays artists directly, and [Fountain](https://fountain.fm) is a podcast app with Nostr tips.
- **Marketplaces:** [Shopstr](https://shopstr.market), [Plebeian Market](https://plebeian.market) and [Conduit](https://conduit.market) are paid in bitcoin.

## Troubleshooting

| Problem | Try |
|---|---|
| No ⚡ button on my posts | Add a Lightning address to your profile and save. |
| Zap button does nothing, or asks for an invoice | Connect a wallet in **Settings → Wallet** (or *Zaps*). |
| Zap fails | Check your wallet balance and your NWC spending budget. |
| My sats vanished after reinstalling Primal | Restore the Primal wallet with its **own** recovery phrase, not your nsec. |
| Someone's zap didn't reach me | Check the Lightning address in your profile is spelled exactly right. |

## Next steps

- [Wallet Connect (NWC)](./wallet-connect.md): link one wallet to every app
- [Profile Setup](../account/profile-setup.md): add your Lightning address
- [FAQ](../help/faq.md)
