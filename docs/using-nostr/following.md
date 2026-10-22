---
sidebar_position: 2
title: Following
description: Find people to follow, shape your feed and keep spam out
---

# Following & Discovery

An empty feed is the number one reason people give up on Nostr. Nostr has no algorithm by default: the people you follow *are* your feed, in time order. It stays quiet until you follow 20 to 50 people, so start there.

## How following works

- When you follow someone, your app adds them to your **follow list** and fetches their posts from relays.
- Your follow list is saved on relays, not in the app. Follow someone in Damus, open Primal with the same account, and they're already in your feed.
- Your follow list is **public**. Anyone can see who you follow.

Modern apps find out which relays each person posts to (this is called the *outbox model*) and fetch from there automatically. You don't need to add relays to see someone's posts.

## Finding people to follow

### During sign-up

Many apps show ready-made lists of people by topic while you set up your account. Follow a whole topic in one tap, and unfollow anyone later.

### Search

Search in your app for:

- a **name**
- an **npub** (their public key, starting `npub1…`)
- a **readable handle** such as `alice@example.com` (NIP-05)
- a **hashtag** such as `#photography`, `#books`, `#gardening` or `#music`

To search across all of Nostr from a browser, try [nos.today](https://nos.today) or [ants.sh](https://ants.sh).

### Your friends

- Ask them for their **npub** and paste it into search.
- Look for an `npub…` in their X, Bluesky or Instagram bio.
- Post *your* npub on your other accounts so people can find you.

### Other people's follows

Open the profile of someone you like and browse who they follow. Their follows often turn out to be your people too.

### People on Mastodon and Bluesky

- **Mastodon and the fediverse:** you can follow them through [Mostr](https://mostr.pub). Fediverse accounts show up as Nostr profiles you can follow and reply to. Some Mastodon servers block the bridge, so not every account will appear.
- **Bluesky:** not right now. There's no maintained bridge.

### Introduce yourself

Post an introduction with `#introductions`. People really do say hello, and it's a quick way to find others who are new.

## Feeds beyond "Following"

Most apps have tabs besides your *Following* feed:

| Feed | What it shows |
|---|---|
| **Trending / popular** | What lots of people are reacting to right now |
| **Popular with your follows** | Posts your follows liked or reposted |
| **Topic or hashtag** | Posts with a particular tag |
| **Relay feed** | Everything posted to one relay, often a community |

Primal, Jumble and Coracle are especially good at this. Some apps also let you make your own lists of people and use each list as a feed.

## Muting and spam

Moderation on Nostr is lighter than on X, and it's more in your hands. Spend two minutes on it and your feed gets much calmer.

- **Mute a person:** open their profile, tap **⋯**, then *Mute*. You won't see them anywhere in that app, and many apps share your mute list with your other Nostr apps.
- **Mute words, hashtags or threads:** look in **Settings → Muted** (or *Content filters*).
- **Report:** use **⋯** then *Report* on a post or profile. Apps and relays use reports to filter spam and illegal content.
- **Turn on spam filtering:** look in settings for *web of trust* or *trusted network*. It hides accounts that nobody you follow is connected to.
- **Still too much spam?** A paid relay such as [nostr.wine](https://nostr.wine) only accepts posts from members, so it's much cleaner.

:::note Muting isn't blocking
Posts are public, so a muted person can still see your posts and reply to them. You just won't see them.
:::

## Following etiquette

- Follow people whose posts you enjoy, and reply to them.
- Don't expect everyone to follow back.
- **Don't follow back strangers who zap you tiny amounts.** That's a common bot trick to get attention.
- Anyone can copy a name and photo. Check the **npub** or readable handle before trusting an account, never just the display name.

## Getting followers

- Add a picture and a short bio. Accounts without a picture look like spam bots, and fewer people follow them back. See [Profile Setup](../account/profile-setup.md).
- Reply to others more than you post.
- Use a few relevant hashtags.
- Be patient. Nostr is small enough that conversations turn into friendships.

## Troubleshooting

**I can't see someone's posts.**
Each app talks to its own mix of relays and has its own spam filters. Try another app, or open their profile at [njump.me](https://njump.me). If you turned on web-of-trust filtering, it may be hiding them.

**My follows disappeared in a new app.**
Make sure you logged in with the same key (check that the npub matches). Give the app a moment to load your follow list from relays.

## Next steps

- [Messaging](./messaging.md)
- [Zaps & Lightning](./zaps.md)
- [Relays](./relays.md)
