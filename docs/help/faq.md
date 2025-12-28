---
sidebar_position: 1
title: FAQ
description: Frequently asked questions about Nostr
---

# Frequently Asked Questions

Common questions about using Nostr.

## Getting Started

### What is Nostr?

Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized protocol for social networking. Unlike traditional platforms owned by companies, Nostr is an open protocol where you control your identity and data.

### Is Nostr free?

Yes! Creating an account and using Nostr is free. Some optional features (like paid relays or premium services) may have costs.

### Do I need an email or phone number?

No. Nostr accounts are based on cryptographic keys. You don't need to provide any personal information.

### Which app should I use?

- **iPhone:** [Damus](https://apps.apple.com/app/damus/id1628663131)
- **Android:** [Amethyst](https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst)
- **Web:** [Primal](https://primal.net)

→ See [Clients Overview](/clients/overview) for more options.

### Is there anyone on Nostr?

Yes! Nostr has a growing community including developers, Bitcoin enthusiasts, writers, artists, and regular people. Try following hashtags like #introductions or #nostr to find people.

---

## Account & Identity

### What are public and private keys?

- **Public key (npub):** Your public identity, like a username. Share freely.
- **Private key (nsec):** Your secret key, like a password. Never share!

→ Learn more: [Your Identity](/getting-started/your-identity)

### What happens if I lose my private key?

You lose access to your account forever. There's no password reset. This is why backup is critical!

→ See: [Backup Your Keys](/account/backup-keys)

### Can I change my private key?

No. You would need to create a new account with new keys. Your old posts would remain but you couldn't manage them.

### Can I have multiple accounts?

Yes. Create different key pairs for different identities. Just keep them organized and backed up separately.

### What's NIP-05 verification?

It's a way to link your Nostr identity to a domain name (like `you@example.com`). It adds credibility and makes you easier to find.

→ Learn more: [Verification](/account/verification)

---

## Clients & Apps

### Why are there so many apps?

Nostr is a protocol, not a platform. Anyone can build an app that uses the protocol. This gives you choices and prevents lock-in.

### Can I use multiple apps?

Yes! Your account works in any Nostr client. Switch freely between apps.

→ See: [Multiple Clients](/account/multiple-clients)

### Do different apps show the same content?

They should show the same posts and follows since they use the same protocol. The interface and features may differ.

### Why can't I see some posts?

Possible reasons:
1. Not connected to the same relays
2. Content was deleted
3. Relay went offline
4. Takes time to sync

---

## Content & Posting

### Are my posts public?

Yes, by default. Most Nostr posts are public and can be seen by anyone. Use direct messages for private communication.

### Can I delete posts?

You can send a delete request, but relays may not honor it. Think of deletion as a request, not a guarantee. This is by design for censorship resistance.

### How long are posts stored?

It depends on the relay. Some store indefinitely, others have retention policies. Important content should be on multiple relays.

### What are hashtags for?

Hashtags help categorize content and make it discoverable. Popular ones include #nostr, #bitcoin, #introductions.

---

## Relays

### What is a relay?

A relay is a server that stores and forwards Nostr events. Think of it like a message server or bulletin board.

→ Learn more: [Understanding Relays](/using-nostr/relays)

### Which relays should I use?

Most clients set up sensible defaults. Common relays include:
- `wss://relay.damus.io`
- `wss://nos.lol`
- `wss://relay.primal.net`

### Are relays free?

Many are free. Some charge for premium features or to reduce spam. Both models work well.

### Can I run my own relay?

Yes! If you're technical, check the [Developer Guide](https://nostrcg.github.io/devguide/relays/overview).

---

## Zaps & Bitcoin

### What are zaps?

Zaps are Bitcoin tips sent over the Lightning Network. They're a way to support content creators directly.

→ Learn more: [Zaps & Lightning](/using-nostr/zaps)

### Do I need Bitcoin to use Nostr?

No. Zaps are optional. You can use Nostr fully without ever touching Bitcoin.

### How do I receive zaps?

Add a Lightning address to your profile. Get one from wallets like [Wallet of Satoshi](https://walletofsatoshi.com), [Alby](https://getalby.com), or the built-in wallet in Primal.

### Are zaps anonymous?

By default, zaps are public (showing sender and amount). Some clients support private zaps.

---

## Privacy & Security

### Is Nostr private?

Most content is public by default. For privacy:
- Use a pseudonym
- Direct messages are encrypted
- Be mindful of what you share

### Can people see my IP address?

Relays can see your IP when you connect. Use a VPN if this concerns you.

### Is my private key safe in apps?

Trusted apps encrypt your key locally. For extra security, use a signer app (Alby, nos2x, Amber).

### What if an app gets hacked?

If using a signer: Your key is safe in the signer.
If nsec is in the app: You'd need to create new keys and abandon the old identity.

---

## Troubleshooting

### My posts aren't showing up

1. Check relay connections
2. Wait a moment and refresh
3. Try a different client

### I can't log into a new app

1. Make sure you're using your nsec (not npub)
2. Check for typos
3. Verify the app is legitimate

### Someone is impersonating me

1. Set up NIP-05 verification
2. Tell your followers on your real account
3. Impersonation is a known issue with decentralized systems

### The app is slow

1. Reduce number of relays
2. Clear cache if option exists
3. Try a different client
4. Check your internet connection

---

## Miscellaneous

### What does NIP mean?

NIP = Nostr Implementation Possibilities. They're standards that define how features work.

### Who created Nostr?

Nostr was created by fiatjaf in 2020. It's now developed by a global open-source community.

### Is Nostr just for Bitcoin people?

No! While there's overlap with the Bitcoin community, anyone can use Nostr. It's for everyone who wants a decentralized social experience.

### Where can I learn more?

- [Nostr.how](https://nostr.how) - Learning resources
- [GitHub](https://github.com/nostr-protocol/nostr) - Protocol details
- [Nostr Apps](https://nostrapps.com) - App directory
- This guide!

---

## Still Have Questions?

- Use the hashtag **#asknostr** in your posts
- The community is friendly and helpful
- Check [Troubleshooting](/help/troubleshooting) for technical issues
- Browse [Resources](/help/resources) for more learning materials
