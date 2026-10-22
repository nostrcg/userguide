---
sidebar_position: 1
title: Posting
description: How to write posts, reply, share pictures and delete things on Nostr
---

# Posting on Nostr

Posting on Nostr works much like any social app. The difference is that your post is signed with your key and sent to several relays, so anyone can read it in whatever Nostr app they like.

## Your first post

1. Open your app and tap the compose button (usually a **+** or a pencil).
2. Write your message.
3. Tap **Post**.

Your post goes out to your relays straight away. A good first post introduces yourself and adds **`#introductions`**. People really do welcome newcomers.

:::tip
Reply more than you post. Thoughtful replies are the fastest way to get noticed and make friends.
:::

## Kinds of posts

| Type | What it is | Where to write it |
|---|---|---|
| **Note** | A short post, like a tweet. Can include links, pictures and mentions. | Any social app |
| **Reply** | A response to someone's note. It joins the thread and the author gets notified. | Any social app |
| **Repost** | Shares someone's note with your followers as-is, like a retweet. | Any social app |
| **Quote** | Shares a note with your own comment on top, like a quote-tweet. | Any social app |
| **Article** | A long post with a title and formatting, like a blog post. | [YakiHonne](https://yakihonne.com), [Pareto](https://pareto.space) |

Because every app uses the same account, you don't need to cross-post between Nostr apps. Post in Damus and your followers see it in Primal, Amethyst, Jumble or anywhere else.

## Reactions and zaps

- **Likes** (reactions) are usually a heart. Some apps let you react with any emoji.
- **Zaps** are optional tips in bitcoin, shown as ⚡. You can ignore them completely. See [Zaps & Lightning](./zaps.md).

## Formatting your posts

### Mentions

Type `@` and start typing a name. Most apps suggest matching people and turn your pick into a link to their profile. If that doesn't work, paste their `npub…` instead.

### Hashtags

Add `#` before a word so people browsing that topic can find your post:

```
Just found Nostr and I'm loving it! #introductions
```

A couple of relevant tags is plenty.

### Links

Paste a web address and most apps show a preview. To link to something on Nostr itself, paste its `npub…`, `nevent…` or `naddr…` code and apps turn it into a link.

### Pictures and video

Most apps have an attach button and upload for you. Your files live on **media servers** (the standard is called *Blossom*), not inside the post.

- Your app picks a media server for you. Some let you add a backup server in **Settings → Media**, so your pictures survive if one shuts down.
- If your app can't upload, try [nostr.build](https://nostr.build) or [nostrcheck.me](https://nostrcheck.me), then paste the link they give you.

:::note
Some posts are marked as sensitive (NSFW), and most apps hide or blur them by default. If you post something that isn't for everyone, check whether your app offers a content warning.
:::

## Hashtags worth knowing

| Tag | For |
|---|---|
| `#introductions` | Saying hi when you're new |
| `#asknostr` | Asking anything |
| `#nostr` | News and talk about Nostr itself |
| `#photography` `#art` `#music` `#books` | Finding your people |

## Everything you post is public

Notes, replies, likes, reposts and zaps can be seen by everyone, and they spread across many relays run by different people. Treat every note like a postcard.

For private conversations, use direct messages. See [Messaging](./messaging.md).

## Deleting a post

Look for **Delete** in the post's **⋯** menu. Your app then sends a *deletion request* (NIP-09).

- Most apps and relays honour it.
- Relays are run by many different people, and someone may already have a copy. Treat every post as permanent.
- To leave Nostr altogether, clear your profile, post a goodbye and stop using the key. Some apps can also send a *request to vanish* (NIP-62), which asks relays to drop everything from your key. Only relays that support it will comply, and copies may still survive.

:::caution
Think before you post. Deletion is a request, not a guarantee.
:::

## Sharing outside Nostr

Anyone can open your profile or a post in a normal web browser at `https://njump.me/` followed by your npub, your readable handle, or the post's `nevent…` code. Use this to share with people who aren't on Nostr yet.

## Troubleshooting

**My post doesn't show up in another app.**
Each app talks to its own mix of relays, so give it a moment and refresh. If it still doesn't appear, check that your app has a write (outbox) relay list in **Settings → Relays**. See [Relays](./relays.md).

**My picture won't upload.**
The file may be too big for that media server. Try a smaller file, another media server in **Settings → Media**, or upload at [nostr.build](https://nostr.build) and paste the link.

**My mention didn't turn into a link.**
Paste the person's full `npub…` instead of the name, or try another app.

## Next steps

- [Following & Discovery](./following.md)
- [Messaging](./messaging.md)
- [Zaps & Lightning](./zaps.md)
