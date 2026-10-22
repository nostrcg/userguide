---
sidebar_position: 3
title: Messaging
description: Private messages on Nostr, which apps to use, and what stays private
---

# Direct Messaging

You can send private messages on Nostr without a phone number or email. There's one thing to know up front: **there are two message standards, and apps using different ones may not see each other's messages.**

## The two standards

| | Modern private messages (NIP-17) | Older DMs (NIP-04) |
|---|---|---|
| **Message content** | Encrypted | Encrypted |
| **Who sent it** | Hidden | Visible to anyone |
| **Who it's for, and when** | Only the relay that stores it can see this, roughly | Visible to anyone |
| **Apps** | Amethyst, 0xchat, Keychat, Coracle, Flotilla. Damus is switching over in its next update. | Primal (as of October 2026) |

With older DMs, anyone can see **who messaged whom, and when**, even though they can't read the words. Newer apps may hide these older messages by default, which is a common reason a message "never arrived".

:::tip
For anything sensitive, use a NIP-17 app, or [White Noise](https://whitenoise.chat), a strongly encrypted messenger like Signal (still in beta).
:::

## Sending a message

1. Open the person's profile.
2. Tap the message or chat icon.
3. Write your message and send.

Your messages live under a chat or envelope icon in the app. Many apps keep messages from people you don't follow in a separate *requests* folder, so check there if you're expecting something.

## Apps for chatting

| App | Good for | Devices |
|---|---|---|
| [0xchat](https://0xchat.com) | Telegram-style private messages, group chats and calls | iPhone, Android, desktop |
| [White Noise](https://whitenoise.chat) | Strongly encrypted chat, like Signal (beta) | Android, iPhone |
| [Keychat](https://keychat.io) | Private chat with a bitcoin wallet built in | iPhone, Android, desktop |
| [Flotilla](https://flotilla.social) | Discord-style community spaces with channels and chat | Web, iPhone, Android |
| [Amethyst](https://amethyst.social) | Messages inside a full social app | Android |
| [Coracle](https://coracle.social) | Messages inside a web social app | Web |

You can use a chat app alongside your main social app. It's the same account.

## What stays private

- **Your words:** encrypted in both standards.
- **Who you're talking to:** hidden with NIP-17, public with NIP-04.
- **Your IP address:** visible to the relays you connect to, like any website. Use a VPN or Tor if that matters to you.
- **Your messages depend on your key.** They're encrypted to your key, so if you lose your nsec you lose access to your messages too. [Back up your key](../account/backup-keys.md).

## Your DM inbox relays

Modern apps publish a short list of relays where private messages should reach you, often called a **DM inbox**. Most apps set it up automatically. If people say their messages to you don't arrive, look in **Settings → Relays** and check the DM inbox list isn't empty. If it is, add a big public relay such as `wss://relay.damus.io`. See [Relays](./relays.md).

## Staying safe

- **Check the npub** of the person you're talking to. Anyone can copy a name and photo.
- **Never send your nsec**, in a message or anywhere else. No real app, person or "support team" needs it. Nostr has no support desk.
- **Be wary of strangers who quickly ask to move to Telegram or WhatsApp.** That's a classic setup for investment and romance scams.
- **Ignore "you've been zapped, claim your sats here" links and giveaway DMs.** They're always scams.
- Be suspicious of anyone selling a "Nostr token". Nostr has no token.

## Troubleshooting

**My message didn't arrive, or theirs didn't reach me.**
Ask the other person which app they use. If one of you is on a NIP-04 app (such as Primal) and the other on a NIP-17 app, you may not see each other's messages. Try both using a NIP-17 app.

**I can't find a message someone says they sent.**
Check the *requests* or *other* folder, and check whether your app hides older-style DMs.

**Messages don't load in a new app.**
Make sure you logged in with the same key. If your old messages used a different standard from the new app, they may not show.

## Next steps

- [Zaps & Lightning](./zaps.md)
- [Relays](./relays.md)
- [FAQ](../help/faq.md)
