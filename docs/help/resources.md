---
sidebar_position: 4
title: Resources
description: Helpful resources for learning and using Nostr
---

# Resources

Places to learn more, find apps and get help.

:::note Checked 22 October 2026
Every link on this page was checked on 22 October 2026. We removed many links from the older version of this page because they had died, and several old Nostr web addresses now lead to spam or gambling sites. If an old tutorial sends you somewhere not listed here, be careful.
:::

## Beginner guides

| Resource | What it's for |
|---|---|
| [nostr.how](https://nostr.how/en/get-started) | Clear, illustrated guides in many languages |
| [usenostr.org](https://usenostr.org) | A simple explainer to send a friend |
| [nostr.com](https://nostr.com) | The protocol's home page |
| [whynostr.com](https://whynostr.com) | The case for Nostr in plain language |
| [nstart.me](https://nstart.me) | Guided account creation with a safe backup. Great for helping a friend join. |

## Find apps

| Resource | What it's for |
|---|---|
| [nostrapps.com](https://nostrapps.com) | A catalogue of Nostr apps by category |
| [Zapstore](https://zapstore.dev) | An Android app store full of Nostr apps, where developers sign every release |

Our own picks are in [Clients Overview](../clients/overview.md). In short: **iPhone** [Damus](https://damus.io) or [Primal](https://primal.net); **Android** [Amethyst](https://amethyst.social) or [Primal](https://primal.net); **computer** [Jumble](https://jumble.social) or [primal.net](https://primal.net).

## Find people and posts

| Tool | What it's for |
|---|---|
| [nos.today](https://nos.today) | Search across Nostr |
| [ants.sh](https://ants.sh) | Search across Nostr |
| [njump.me](https://njump.me) | Opens any Nostr post or profile as a normal web page, so you can share it with people who aren't on Nostr |

The easiest way to find people is still inside your app: accept the topic lists it offers during sign-up, and search hashtags you care about.

## Keep your key safe

| Device | Signer |
|---|---|
| Android | [Amber](https://github.com/greenart7c3/Amber) (also on [Zapstore](https://zapstore.dev)) |
| Computer | [Alby](https://getalby.com), [nos2x](https://github.com/fiatjaf/nos2x) (Chrome), [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) (Firefox) |
| iPhone | [Aegis](https://github.com/ZharlieW/Aegis) (beta via TestFlight; Android version on GitHub too) |
| Power users | [`nak bunker`](https://github.com/fiatjaf/nak), a remote signer you run yourself |

For backups, use a password manager (Bitwarden, 1Password, Proton Pass or your phone's built-in one) plus a paper copy. See [Backup Your Keys](../account/backup-keys.md).

## Wallets for zaps

Zaps are optional. If you want them:

| Wallet | Type | Notes |
|---|---|---|
| [Alby Hub](https://getalby.com/alby-hub) + [Alby Go](https://getalby.com/alby-go) | Self-custody | The reference wallet for connecting to Nostr apps |
| Primal wallet | Self-custody | Built into the Primal phone apps (not the website). Has its own recovery phrase, separate from your nsec. |
| [Zeus](https://zeusln.com) | Self-custody | More control, a bit more to learn |
| [Coinos](https://coinos.io) | Custodial | Free and web-based. Disclosed a credential leak in August 2026, so pocket money only. |
| [Minibits](https://minibits.cash), [Cashu.me](https://cashu.me) | Ecash (custodial) | The mint holds the funds. Pocket money only. |

[nwc.dev](https://nwc.dev) lists the wallets and apps that support Nostr Wallet Connect. More in [Zaps & Lightning](../using-nostr/zaps.md).

## Readable handles (NIP-05)

| Option | Notes |
|---|---|
| Your own domain | Free if you already own one, and nobody can take it away. See [Verification](../account/verification.md). |
| [nostrplebs.com](https://nostrplebs.com) | Paid, long-running provider |
| [nostrcheck.me](https://nostrcheck.me) | Free and paid options |
| [iris.to](https://iris.to) | Free `you@iris.to` |
| [Primal Premium](https://primal.net) | Paid, gives you `you@primal.net` |

## Media hosting

Most apps upload pictures for you. If you need to upload directly, use [nostr.build](https://nostr.build) or [nostrcheck.me](https://nostrcheck.me). The standard for Nostr media servers is called *Blossom*.

## Relays

| Resource | What it's for |
|---|---|
| [nostr.watch](https://nostr.watch) | Live relay status |
| [nostr.wine](https://nostr.wine) | A paid relay that only accepts posts from members, so it's much cleaner |

Most people never need to change relays. See [Understanding Relays](../using-nostr/relays.md).

## Other networks

- [Mostr](https://mostr.pub) bridges Nostr and the fediverse (Mastodon and friends).
- There is no maintained bridge to Bluesky.

## Stay up to date

- [Nostr Compass](https://nostrcompass.org): a newsletter on what's new across Nostr.
- Follow `#nostr` and `#asknostr` in any app.

## Community

| Hashtag | For |
|---|---|
| `#introductions` | Saying hi when you're new |
| `#asknostr` | Asking anything |
| `#nostr` | News and talk about Nostr itself |
| `#photography` `#art` `#music` `#books` | Finding your people |

:::caution Scams
Nostr has no token, so any "Nostr token" offer is a scam. Nostr also has no support desk: nobody legitimate will ever ask for your nsec.
:::

## Going deeper (technical)

| Resource | What it's for |
|---|---|
| [NIPs](https://github.com/nostr-protocol/nips) | The official specs. How everything actually works. |
| [nips.nostr.com](https://nips.nostr.com) | The NIPs in an easier-to-read format |
| [Nostr protocol repository](https://github.com/nostr-protocol/nostr) | The original protocol description |
| [Nostr Developer Guide](https://nostrcg.github.io/devguide/) | Our companion guide for building apps and running relays |
| [nostr-tools](https://github.com/nbd-wtf/nostr-tools) | A popular JavaScript library |
| [awesome-nostr](https://github.com/aljazceru/awesome-nostr) | A huge list of projects, libraries and tools |
| [nostr.net](https://nostr.net) | Another large index of resources |
| [gitworkshop.dev](https://gitworkshop.dev) | Git repositories, issues and patches over Nostr |
| [W3C Nostr Community Group](https://www.w3.org/community/nostr/) | Web standards work around Nostr |

## Contribute

- **Help newcomers.** Answer `#asknostr` questions.
- **Report bugs** to the apps you use.
- **Improve this guide.** Know a great resource we're missing, or found a dead link? [Open an issue](https://github.com/nostrcg/userguide/issues).
