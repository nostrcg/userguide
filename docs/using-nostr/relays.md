---
sidebar_position: 5
title: Relays
description: What relays are, and the few times you might want to change them
---

# Understanding Relays

Relays are the servers that store and pass on posts. Your app sends each post to several relays, and your followers' apps read it from there.

:::tip The short version
Your app picks sensible relays, and modern apps find your friends' posts automatically. For most people, that's all you need. Only tinker if something isn't working.
:::

![Relay network](/img/diagrams/relay-network.svg)

## Why several relays?

You use several relays at once, so no single one can silence you.

| Benefit | Why |
|---|---|
| **Reliability** | If one relay goes down, the others still have your posts. |
| **Reach** | Different people's apps read from different relays. |
| **Choice** | Relays set their own rules. Some are free and open, some paid, some for one community. |

## How apps find posts: the outbox model

Your app publishes a small **relay list** saying which relays you write to (technically, a NIP-65 event). When someone follows you, their app reads that list and fetches your posts from those relays. This happens automatically, so you don't need to add someone's relays to see their posts.

Your relay settings usually have two lists that matter:

- **Write / outbox:** where your posts go.
- **DM inbox:** where private messages reach you.

Many apps set both up for you.

## Kinds of relays

- **Free public relays:** open to everyone. Your app's defaults are usually these, such as `wss://relay.damus.io`.
- **Paid relays:** only accept posts from paying members, so they're much cleaner. [nostr.wine](https://nostr.wine) is a long-running example.
- **Community relays:** run for a group or topic. Some apps, such as Jumble and Coracle, can show a feed of everything on one relay.

## When to change your relays

**Your posts or messages don't show up elsewhere.**
In **Settings → Relays**, check you have a **write/outbox** list and a **DM inbox** list. If either is empty, add a big public relay such as `wss://relay.damus.io`.

**You want less spam.**
Add a paid relay such as [nostr.wine](https://nostr.wine).

**You're curious.**
Browse relays and their status at [nostr.watch](https://nostr.watch).

:::note How many?
Three to six relays is plenty. More just slows your app down.
:::

## Adding or removing a relay

1. Open **Settings → Relays**.
2. To add one, enter its address. Relay addresses start with `wss://`.
3. To remove one, delete or switch it off.

Remove a relay if it's always offline, very slow, or full of spam.

## What relays can see

- **Your posts, profile and follow list:** these are public anyway.
- **Your IP address:** like any website you visit. Use a VPN or Tor if that matters to you.
- **Private messages:** relays can't read them. With older-style DMs (NIP-04), anyone can see who messaged whom and when. With modern NIP-17 messages, the relay that stores one can still see roughly who it's for and when. See [Messaging](./messaging.md).

## Troubleshooting

| Problem | Try |
|---|---|
| A relay won't connect | Check the address is right and starts with `wss://`. It may be down; check [nostr.watch](https://nostr.watch). |
| App is slow | Remove slow or offline relays. Keep three to six. |
| A post is missing in one app | Apps use different relays and filters. Try another app, or open the post at [njump.me](https://njump.me). |
| Friends don't get my messages | Make sure your DM inbox relay list isn't empty. |

## Running your own relay

You can run your own relay, but you don't need to. It's a project for technical users. The [NIPs](https://github.com/nostr-protocol/nips) describe how relays work.

## Next steps

- [Profile Setup](../account/profile-setup.md)
- [Troubleshooting](../help/troubleshooting.md)
- [FAQ](../help/faq.md)
