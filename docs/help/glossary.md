---
sidebar_position: 3
title: Glossary
description: Nostr terminology explained
---

# Glossary

Common terms you'll encounter in the Nostr ecosystem.

## A

### Alby
A browser extension that manages your Nostr keys and Lightning wallet. Makes signing into web clients easy.

### Amethyst
A popular Nostr client for Android devices.

## B

### Bech32
An encoding format for keys. Nostr uses bech32m with prefixes like `npub` and `nsec`.

## C

### Client
An application you use to access Nostr. Examples: Damus, Primal, Amethyst.

### Content Warning (CW)
A way to mark posts that might be sensitive, allowing readers to choose whether to view them.

## D

### Damus
A popular Nostr client for iOS and macOS.

### DM (Direct Message)
An encrypted private message between two users.

## E

### Event
The basic data unit in Nostr. Posts, reactions, profiles—everything is an event.

### EOSE
"End of Stored Events" - A message from relays indicating they've sent all matching stored events.

## F

### Filter
A set of criteria used to request specific events from relays (by author, kind, time, etc.).

### Follow / Following
Subscribing to see someone's posts in your feed.

### Follow List
The list of people you follow, stored as a Nostr event.

## G

### Global Feed
A feed showing all public posts from connected relays.

## H

### Hex Key
The raw format of a Nostr key (64 hexadecimal characters). Often converted to npub/nsec for easier use.

## K

### Kind
A number that categorizes events. Kind 0 = profile, Kind 1 = note, etc.

Common kinds:
- **0** - Profile metadata
- **1** - Short text note
- **3** - Follow list
- **4** - Encrypted DM
- **7** - Reaction
- **30023** - Long-form content

## L

### Lightning Network
A Bitcoin payment layer that enables fast, cheap transactions. Used for zaps.

### Lightning Address
An email-like address for receiving Lightning payments (e.g., `you@wallet.com`).

## M

### Mention
Tagging another user in a post using their public key.

### Metadata
Profile information (name, picture, bio, etc.) stored in a kind 0 event.

## N

### NIP (Nostr Implementation Possibility)
A specification document describing how features should work. Like RFCs for Nostr.

Common NIPs:
- **NIP-01** - Basic protocol
- **NIP-05** - DNS-based verification
- **NIP-19** - bech32-encoded entities
- **NIP-57** - Zaps
- **NIP-65** - Relay list metadata

### Nostr
"Notes and Other Stuff Transmitted by Relays" - The protocol itself.

### Note
A short text post (kind 1 event). The most common type of content.

### npub
The public key in bech32 format. Starts with `npub1`. Share this freely.

### nsec
The private key in bech32 format. Starts with `nsec1`. **Never share this!**

### nprofile
A bech32-encoded public key that includes relay hints.

### nevent
A bech32-encoded event ID with optional relay hints.

### naddr
A bech32-encoded reference to a replaceable event.

## O

### Outbox Model
A strategy where clients check users' declared relays to find their content (NIP-65).

## P

### Primal
A Nostr client available on web, iOS, and Android with built-in wallet.

### Private Key
Your secret key (nsec). Used to sign events and prove your identity. Never share!

### Public Key
Your public identity (npub). Safe to share, used by others to find and verify you.

## R

### Reaction
A response to a post, usually a like (kind 7 event).

### Relay
A server that receives, stores, and forwards Nostr events.

### Repost
Sharing someone else's post to your followers.

### REQ
A message sent to relays to request events matching specified filters.

## S

### Sats (Satoshis)
The smallest unit of Bitcoin (0.00000001 BTC). Used for zaps.

### Schnorr Signature
The cryptographic signature scheme used in Nostr (BIP-340).

### secp256k1
The elliptic curve used for Nostr's cryptography (same as Bitcoin).

### Signer
An app that holds your private key and signs events on behalf of other apps.

### Subscription
A request to a relay to receive events matching certain filters.

## T

### Tag
Metadata attached to events. Used for mentions, replies, hashtags, etc.

### Thread
A conversation of replies to a post.

## V

### Verification
See NIP-05. Linking your Nostr identity to a domain name.

## W

### WebSocket
The communication protocol between clients and relays.

### Well-Known
The `.well-known` directory path used for NIP-05 verification files.

## Z

### Zap
A Lightning payment sent to a Nostr user, usually as a tip for content.

### Zap Receipt
A Nostr event proving a zap was sent.

---

## Key Relationships

```
Private Key (nsec) ───generates───▶ Public Key (npub)
                                          │
                                    ┌──────┴──────┐
                                    ▼             ▼
                              Your identity   Signatures
                              on Nostr        on posts
```

```
Client ◀───WebSocket───▶ Relay ◀───WebSocket───▶ Client
         (publish,          (store,            (subscribe,
          subscribe)        forward)            receive)
```

## Quick Reference

| Term | Meaning |
|------|---------|
| npub | Your public identity |
| nsec | Your secret key |
| Kind | Event type number |
| Relay | Message server |
| Client | Your Nostr app |
| Zap | Bitcoin tip |
| NIP | Feature specification |

## Next Steps

- [FAQ](/help/faq) - Common questions
- [Resources](/help/resources) - Learn more
