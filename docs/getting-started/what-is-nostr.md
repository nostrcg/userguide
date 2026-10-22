---
sidebar_position: 1
title: What is Nostr?
description: A plain-English introduction to the social network that no one owns
slug: /
---

# What is Nostr?

Nostr is a **social network that no one owns**. Your account is a key that *you* hold, not a login on a company's server. You can use it in any of many apps, take your followers with you, and never get locked out by a platform.

Technically, Nostr is an **open protocol**: a shared set of rules, like email or the web, that anyone can build apps and servers for. There is no Nostr company, no CEO and no shareholders. The name is short for *Notes and Other Stuff Transmitted by Relays*.

## The basics

Think of Nostr like email, but for social media:

- **You own your account.** No single company can delete it or take it away. Apps and servers can refuse to show you, but you can just use others.
- **You choose your app.** Many different apps (called **clients**) work with the same account.
- **Switch apps, keep everything.** Your followers, posts and profile come with you to every Nostr app.
- **No phone number or email.** You sign up in seconds without handing over personal details.

## How it works

![How Nostr works: you publish from your app to relays, which pass your posts on to other people's apps](/img/diagrams/nostr-flow.svg)

1. **You** write a post in a Nostr app. The app signs it with your key, which proves it came from you.
2. The app sends the post to several **relays**. Relays are servers that store and pass on posts.
3. **Your followers** read it from those relays, in whatever app they like.

If one relay goes down or refuses your posts, the others carry on. That's what makes Nostr hard to silence.

## What makes Nostr different?

| | Typical social media | Nostr |
|---|---|---|
| Your account lives… | On the company's servers | In a key you hold |
| Switch apps, keep followers? | No | Yes |
| Needs phone or email? | Usually | No |
| Who can remove you? | The company, everywhere | Each app or relay only for itself |
| Your feed | Chosen by an algorithm | The people you follow, in time order, by default |
| If you forget your password | "Forgot password" link | No reset: you look after your key yourself |

## A real-world picture

Imagine you could:

- Write a letter once and have it delivered to several post offices at the same time
- Let anyone collect it from whichever post office they trust
- Seal every letter with a stamp that nobody else can forge
- Keep sending mail even if one post office stops serving you

That's roughly how Nostr works.

## What you need to start

1. **An app.** iPhone: Damus or Primal. Android: Amethyst or Primal. Computer: jumble.social or primal.net. See the [Quick Start](./quick-start.md).
2. **Your key.** The app creates it for you in one tap. You just need to back it up.
3. **Relays.** Your app picks sensible ones automatically.

:::note Honest expectations
Nostr is much smaller than X or Instagram. The early crowd leans towards tech and bitcoin, but art, photography, music and local communities are growing. And there's no "forgot password": you look after one key yourself. This guide shows you how.
:::

:::info Not a cryptocurrency
Nostr has no coin or token, and you don't need bitcoin to use it. Many users send optional bitcoin tips called *zaps*, but you can ignore them. Anything selling a "Nostr token" is a scam.
:::

## Next steps

- [Why Nostr?](./why-nostr.md): the benefits, and the trade-offs
- [Quick Start](./quick-start.md): your first post in about 10 minutes
- [Your Identity](./your-identity.md): how your keys work
