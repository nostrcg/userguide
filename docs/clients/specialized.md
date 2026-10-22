---
sidebar_position: 5
title: Specialized Clients
description: Nostr apps for specific use cases
---

# Specialized Clients

Nostr isn't only for short posts. The same account works in apps for chat, video, music, writing, shopping and more.

![One identity, many apps](/img/diagrams/one-identity-many-apps.svg)

## Chat and groups

### 0xchat

Telegram-style private messages, group chats and calls.

- **Platforms:** iPhone, Android, Desktop
- **Get it:** [0xchat.com](https://0xchat.com)

### White Noise

A strongly encrypted messenger, like Signal, with no phone number needed. Still in beta.

- **Platforms:** Android, iPhone
- **Get it:** [whitenoise.chat](https://whitenoise.chat)

### Keychat

Private chat with a bitcoin wallet built in.

- **Platforms:** iPhone, Android, Desktop
- **Get it:** [keychat.io](https://keychat.io)

### Flotilla

Discord-style community spaces with channels, chat and events.

- **Platforms:** Web, iPhone, Android
- **Get it:** [flotilla.social](https://flotilla.social)

Flotilla treats a relay as a community "space". Inside a space you get rooms (channels) for chat, plus events. Because the group lives on a relay rather than inside one company's app, its members aren't locked into a single client.

**Getting started with Flotilla:**

1. Visit [flotilla.social](https://flotilla.social) or install the phone app.
2. Log in with a browser extension, a signer or your key.
3. Join a space someone has shared with you.
4. Pick a room and start chatting.

**Good for:** open source projects, local meetups, topic communities and small teams.

:::tip Which apps keep messages most private?
Amethyst, 0xchat, Keychat, Coracle and Flotilla use the newer NIP-17 standard, which hides who is talking to whom. Damus is switching over in its next update. Primal still uses the older NIP-04 (as of October 2026), which leaks who messaged whom, and when. For anything sensitive, use a NIP-17 app or White Noise. See [Direct messages](../using-nostr/messaging.md).
:::

---

## Video and live

- [**Divine**](https://divine.video) (iPhone, Android): six-second looping videos, the Vine reboot.
- [**zap.stream**](https://zap.stream) (Web): live video streaming where viewers tip with zaps.
- [**Nostr Nests**](https://nostrnests.com) and [**Corny Chat**](https://cornychat.com) (Web): live audio rooms, like Twitter Spaces.

---

## Music and podcasts

- [**Wavlake**](https://wavlake.com) (Web, iPhone, Android): stream music, and artists get paid directly.
- [**Fountain**](https://fountain.fm) (iPhone, Android): a podcast app with Nostr comments, profiles and tips.

---

## Writing and reading

- [**YakiHonne**](https://yakihonne.com) (Web, iPhone, Android): write and read long-form articles, plus a social feed and creator tools.
- [**Pareto**](https://pareto.space) (Web): blogs and newsletters for independent journalists.
- [**Wikifreedia**](https://wikifreedia.xyz) (Web): a wiki where anyone can write their own version of an article.

---

## Buy and sell

- [**Shopstr**](https://shopstr.market), [**Plebeian Market**](https://plebeian.market) and [**Conduit**](https://conduit.market) (Web): marketplaces paid in bitcoin.

---

## Get things done

- [**Formstr**](https://formstr.app) (Web): forms and surveys, like Google Forms. The same team makes [Pages](https://pages.formstr.app) (shared docs) and [Calendar](https://calendar.formstr.app).

---

## Developers

- [**gitworkshop.dev**](https://gitworkshop.dev) (Web): Git repositories, issues and patches over Nostr.

---

## Also useful

- [**Zapstore**](https://zapstore.dev) (Android): an app store full of Nostr apps, where developers sign every release.
- [**Stacker News**](https://stacker.news) (Web): a Bitcoin forum that pays in sats. It isn't a Nostr app, but you can log in with Nostr and cross-post.

---

## Handy tools

- [**nstart.me**](https://nstart.me): guided account creation with a safe backup. Great for helping a friend join.
- [**njump.me**](https://njump.me): opens any Nostr post or profile as a normal web page, so you can share it with people who aren't on Nostr.
- [**nos.today**](https://nos.today) and [**ants.sh**](https://ants.sh): search across Nostr.
- [**Mostr**](https://mostr.pub): a bridge to the fediverse (Mastodon and friends). There is no maintained bridge to Bluesky.

### Media hosting

Images and videos you post live on media servers. The standard for these is called **Blossom**, so your files aren't tied to one app. Most apps pick a server for you. Some let you add a backup server in *Settings → Media*, so your pictures survive if one shuts down.

- [**nostr.build**](https://nostr.build) and [**nostrcheck.me**](https://nostrcheck.me): upload images and video.

---

## Find more apps

- [**nostrapps.com**](https://nostrapps.com): a much bigger directory of apps.
- [**nostr.net**](https://nostr.net): another list of Nostr projects.

---

## Summary

| Category | Apps | Platforms |
|---|---|---|
| Chat | 0xchat, White Noise, Keychat | Phone, Desktop |
| Communities | Flotilla | Web, Phone |
| Short video | Divine | Phone |
| Live video and audio | zap.stream, Nostr Nests, Corny Chat | Web |
| Music | Wavlake | Web, Phone |
| Podcasts | Fountain | Phone |
| Writing | YakiHonne, Pareto, Wikifreedia | Web (YakiHonne also Phone) |
| Marketplaces | Shopstr, Plebeian Market, Conduit | Web |
| Forms and docs | Formstr | Web |
| Code | gitworkshop.dev | Web |

## Apps from older guides that have closed or gone quiet

If an old tutorial sends you to one of these, pick an alternative instead.

:::danger Don't visit their old addresses
Several of these apps' old web addresses now host gambling or spam sites.
:::

| Closed or stalled | Try instead |
|---|---|
| Habla, Blogstack, Flycat, Highlighter | YakiHonne, Pareto |
| Olas, Pinstr, Memestr | Divine, Primal |
| Chachi, Satellite, Zapddit, nostr.kiwi | Flotilla |
| Nostr Chat, Blowater, Anigma, Nostrgram | 0xchat, White Noise |
| Stemstr, Vida | Wavlake, zap.stream |
| Docstr, Sheetstr, Flockstr | Formstr |
| nostr.band (search) | nos.today, ants.sh |
| void.cat (uploads) | nostr.build, nostrcheck.me |

## Next steps

- [Using zaps](../using-nostr/zaps.md): tip with bitcoin
- [Direct messages](../using-nostr/messaging.md): private conversations
- [Understanding relays](../using-nostr/relays.md)
