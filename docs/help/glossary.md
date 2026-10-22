---
sidebar_position: 3
title: Glossary
description: Nostr terminology explained
---

# Glossary

Nostr has a lot of jargon. You only need the first six words to get started. The rest are here when you bump into them.

## The six you need

| Word | Meaning |
|---|---|
| **Nostr** | An open protocol (shared set of rules) for social apps, like email for social media. Nobody owns it. Short for *Notes and Other Stuff Transmitted by Relays*. |
| **Client** | An app you use to read and post: Primal, Damus, Amethyst and so on. Any client works with any account. |
| **Relay** | A server that stores and passes on posts. You use several at once, so no single one can silence you. |
| **npub** | Your **public key**, starting `npub1…`. Like a username. Share it freely. |
| **nsec** | Your **private key**, starting `nsec1…`. Like a password that can never be reset. Never share it. |
| **Zap** | A small tip in bitcoin, sent to a post or a profile. Optional. |

---

## Everyday words

### Blossom
A standard for media servers that host your images and videos, so they aren't tied to one app. Some apps let you add a backup Blossom server in *Settings → Media*.

### Bunker
A *remote* signer. Your key stays in one place, and apps ask it for permission over the internet using a `bunker://…` or `nostrconnect://…` link or QR code. This is how signers work on iPhone.

### Cashu / ecash
Private digital tokens that some wallets use for small payments. The tokens are issued by a *mint* that holds the actual bitcoin, so ecash wallets are custodial. A *nutzap* is a zap paid in ecash.

### Custodial / self-custody
A **custodial** wallet means a company holds your money for you: easy, but they can freeze it or shut down. **Self-custody** means only you control it: lose your recovery words and it's gone.

### DM (direct message)
A private message between users. There are two standards, NIP-04 and NIP-17, and apps using different ones may not see each other's messages. See [Messaging](../using-nostr/messaging.md).

### Follow list
The list of people you follow. It's public and stored on relays, so it comes with you to every app.

### Follow pack
A ready-made list of people on a topic. Many apps offer these during sign-up so you can follow a whole topic in one tap.

### GM / PV
Common greetings. *GM* means good morning. *PV* (from *pura vida*) is a friendly Nostr hello.

### Lightning / Lightning address
**Lightning** is a fast payment network built on bitcoin, used for zaps. A **Lightning address** is an email-style address (`you@wallet.com`) where people can send you zaps. Add one to your profile to get a ⚡ button on your posts.

### Mostr
A bridge that lets Nostr users follow and reply to Mastodon and other fediverse accounts. There is no maintained bridge to Bluesky.

### Mute
Hide a person, word, hashtag or thread from your feed. Muting isn't blocking: a muted person can still see your public posts. Many apps share your mute list across your Nostr apps.

### ncryptsec
Your nsec locked with a password, for safer backups. Starts `ncryptsec1…`. Save it **as well as** your plain nsec, because some apps (including Primal and Damus) can't log in with it yet.

### nevent / naddr / nprofile
Shareable links to a specific post, article or profile. Paste one into any app, or open it at `njump.me/…`.

### NIP-05 (readable handle)
A readable name like `alice@example.com` that points to your npub. It proves control of a domain, not identity. See [Verification](../account/verification.md).

### Note
A post. Short posts are *notes*; long ones are *articles*.

### NWC (Nostr Wallet Connect)
Links a wallet to a Nostr app so zapping takes one tap. The connection link starts with `nostr+walletconnect://`. Give each connection a spending budget, and revoke them all if your nsec ever leaks. See [Wallet Connect](../using-nostr/wallet-connect.md).

### Pleb
Friendly slang for an ordinary user. Everyone's a pleb.

### Purple pill
Getting someone onto Nostr. Purple is Nostr's colour; the ostrich is its mascot.

### Reaction
A response to a post, usually a like or an emoji.

### Repost / Quote
Like a retweet or quote-tweet.

### Request to vanish
A request (NIP-62) asking relays to drop everything from your key. Only relays that support it will comply, and copies may survive.

### Sats (satoshis)
The smallest unit of bitcoin. 100,000,000 sats = 1 bitcoin. 21 sats is the classic zap.

### Signer
An app or browser extension that holds your key and approves actions for other apps, so those apps never see your nsec. Examples: Amber (Android), Alby, nos2x and nos2x-fox (browser extensions), Aegis (iPhone beta).

### Thread
A post and the conversation of replies under it.

### Web of trust (WoT)
Filtering based on who the people you follow follow. Used to hide spam and bots.

---

## Technical words

You can use Nostr for years without these. They're here for the curious.

### Bech32
The encoding that turns raw keys and IDs into readable strings with prefixes like `npub`, `nsec`, `nevent` and `naddr` (defined in NIP-19).

### Event
The basic unit of data on Nostr. A note, a like, a profile update and a follow list are all events. Each one is signed with your private key.

### EOSE
*End of Stored Events*: a message a relay sends to say it has finished sending the stored events you asked for.

### Filter
The criteria an app sends to a relay to ask for specific events, such as by author, kind or time.

### Hex key
The raw form of a key: 64 hexadecimal characters. Apps usually show it as an npub or nsec instead. NIP-05 files on your own domain use the hex form of your public key.

### Kind
A number that says what type an event is. Some common ones:

| Kind | What it is |
|---|---|
| 0 | Profile (name, picture, bio) |
| 1 | Short text note |
| 3 | Follow list |
| 4 | Older-style encrypted DM (NIP-04) |
| 7 | Reaction |
| 30023 | Long-form article |

### NIP
*Nostr Implementation Possibility*: a numbered spec that describes how a feature works. A few you may see mentioned:

| NIP | What it covers |
|---|---|
| NIP-01 | The basic protocol |
| NIP-04 | Older encrypted DMs (leak who messaged whom) |
| NIP-05 | Readable handles (`name@domain`) |
| NIP-09 | Deletion requests |
| NIP-17 | Modern private messages |
| NIP-19 | `npub`, `nsec`, `nevent` and other encoded names |
| NIP-46 | Remote signing (bunkers) |
| NIP-57 | Zaps |
| NIP-62 | Request to vanish |
| NIP-65 | Relay lists (the outbox model) |

The full list is at [github.com/nostr-protocol/nips](https://github.com/nostr-protocol/nips).

### Outbox model
How modern apps find posts: your app publishes a small *relay list* saying which relays you write to, and readers fetch your posts from there. It happens automatically.

### REQ
The message an app sends to a relay to subscribe to events that match a filter.

### Schnorr signature / secp256k1
The cryptography Nostr uses to sign events. It's the same curve bitcoin uses.

### Tag
Extra data attached to an event, used for mentions, replies, hashtags and more.

### WebSocket
The connection type apps use to talk to relays. Relay addresses start with `wss://`.

### Zap receipt
An event a wallet service publishes to show that a zap was paid. It's what makes zaps visible on posts.

---

## How it fits together

```
Private key (nsec) ───creates───▶ Public key (npub)
        │                                │
        ▼                                ▼
  signs your posts               your identity on Nostr
```

```
App ◀───WebSocket───▶ Relay ◀───WebSocket───▶ App
     (publish,          (store,              (subscribe,
      subscribe)         forward)             receive)
```

## Next steps

- [FAQ](./faq.md): common questions
- [Troubleshooting](./troubleshooting.md): fix common problems
- [Resources](./resources.md): learn more

Missing a word? [Open an issue](https://github.com/nostrcg/userguide/issues).
