---
sidebar_position: 1
title: FAQ
description: Frequently asked questions about Nostr
---

# Frequently Asked Questions

Plain answers to the questions newcomers ask most.

:::tip The three answers people need most
Nostr is free and nobody owns it. You don't need bitcoin. And never give anyone your nsec.
:::

## The basics

### What is Nostr?

Nostr is a social network that no one owns. Your account is a key that *you* hold, not a login on a company's server. You can use that key in any of many apps, take your followers with you, and switch apps whenever you like.

The name is short for *Notes and Other Stuff Transmitted by Relays*.

→ Learn more: [What is Nostr?](../getting-started/what-is-nostr.md)

### Is Nostr free? Who owns it?

It's free, and nobody owns it. Nostr is an open protocol, like email or the web: a set of rules that anyone can build apps and servers for. There's no Nostr company, no CEO and no shareholders.

Most apps are free. Some are run by companies that sell optional extras, such as bigger uploads, premium names or a paid relay with less spam.

### Is Nostr a cryptocurrency? Do I need bitcoin?

No and no. Nostr has no coin or token. Many users like bitcoin and use it for optional tips called [zaps](../using-nostr/zaps.md), which is why you'll see a lot of ⚡. You can ignore all of that.

:::danger
Be very suspicious of anything selling a "Nostr token". Nostr has no token. These offers are scams.
:::

### Do I need an email or phone number?

No. Your account is a pair of keys that your app creates for you. You don't hand over any personal details.

### Which app should I use?

Pick either one for your device. The same account works in both, and in every other Nostr app.

| Your device | Pick either one |
|---|---|
| iPhone | [Damus](https://damus.io) or [Primal](https://primal.net) |
| Android | [Amethyst](https://amethyst.social) or [Primal](https://primal.net) |
| Computer | [Jumble](https://jumble.social) or [primal.net](https://primal.net), right in your browser |

→ More choices: [Clients Overview](../clients/overview.md)

### Is anyone actually on Nostr?

Yes, though it's much smaller than X or Instagram. The early crowd leans towards tech and bitcoin, but art, photography, music and local communities are growing. Post with `#introductions` and people really do say hello.

### How is this different from Bluesky, Mastodon or X?

| | X / Threads | Mastodon | Bluesky | **Nostr** |
|---|---|---|---|---|
| Your account lives… | On the company's servers | On one server you pick | On a server you can move | **In a key you hold** |
| Switch apps, keep followers? | No | Partly | Yes | **Yes** |
| Needs phone or email? | Yes | Email | Email | **No** |

The trade-off: on Nostr, *you* are responsible for your key. There's no "forgot password".

### Can I follow people on Mastodon or Bluesky?

- **Mastodon and the fediverse: yes**, through [Mostr](https://mostr.pub). Fediverse accounts show up as Nostr profiles you can follow and reply to. Some Mastodon servers block the bridge, so not every account will appear.
- **Bluesky: not right now.** There's no maintained bridge between Bluesky and Nostr.

### What happens if my app shuts down?

Nothing bad, as long as you saved your key. Your account isn't stored in the app. Open a different app, log in with your key, and carry on. This has already happened many times: plenty of early Nostr apps have closed, and people who had saved their key simply moved on.

Money in an app's built-in wallet is a separate matter. If an app announces it's closing, withdraw your balance.

---

## Account and keys

### What are public and private keys?

- **npub (public key):** like your **username**. Share it freely.
- **nsec (private key):** like your **password**, except it can **never be reset**. Keep it secret.

→ Learn more: [Your Identity](../getting-started/your-identity.md)

### How do I back up my key?

Find your nsec in your app (usually *Settings → Keys*, or *Account* / *Backup*) and save it in **two places**: a password manager and a paper copy kept somewhere safe.

If your app offers an *encrypted backup* (it starts `ncryptsec1…`), save that **as well**, not instead. Some apps, including Primal and Damus, can't log in with an ncryptsec yet, so keep your plain nsec backup too.

**Test your backup by logging into a second app** (for example jumble.social or primal.net in a browser). If your profile appears, you're safe.

→ Step by step: [Backup Your Keys](../account/backup-keys.md)

### Is it safe to log out?

**Only if you've saved your nsec.** If you pasted your key into the app, logging out erases it from that device, and nobody can recover it for you. Back it up first, and check the backup works by logging into a *second* app, not by logging out of the first one.

Logins through a signer aren't affected.

### What happens if I lose my private key?

First, check everywhere: your password manager, phone notes, screenshots, emails to yourself, and the settings of **every** app or device that's still logged in. Any logged-in app can show you the key.

If it's truly gone, the account can't be recovered. Create a new one, follow your friends again, and tell people it's your new account. Your old posts stay up, but you can no longer delete them.

### Can I change my name? Or my key?

Your **display name, handle, picture and bio** can change any time. Your **key** can't. It's permanent, like a bank account number. The only way to "change" it is to start a new account.

### My nsec leaked. What do I do?

A Nostr key can't be changed, so move fast:

1. **Make a new account**, ideally with a signer this time.
2. **Protect your money.** In your wallet, revoke every Nostr Wallet Connect (NWC) connection. Move funds out of any wallet that you log into with your Nostr key. Wallets with their own recovery phrase aren't affected.
3. **From the old account**, post a note pointing to your new npub, before the attacker does.
4. Update your npub everywhere you've listed it.
5. Move your readable handle (NIP-05) and Lightning address to the new account.

### Where is it safe to type my nsec?

The rule: **never give your nsec to a person, or to a website someone sent you.** Type it only into an app you installed yourself, or a well-known Nostr site you typed in yourself. Better still, use a **signer**, so apps never see your key at all.

### What's a signer?

An app or browser extension that holds your key in one trusted place. Other apps ask it for permission ("Allow this app to post?") instead of holding your key themselves.

| Device | Signer |
|---|---|
| Android | [Amber](https://github.com/greenart7c3/Amber) |
| Computer | [Alby](https://getalby.com), [nos2x](https://github.com/fiatjaf/nos2x) (Chrome) or [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) (Firefox) |
| iPhone | [Aegis](https://github.com/ZharlieW/Aegis) (beta via TestFlight; an Android version is on GitHub too) |
| Power users | [`nak bunker`](https://github.com/fiatjaf/nak), a remote signer you run yourself |

Starting from scratch? [nstart.me](https://nstart.me) creates your key, saves an encrypted backup, and can set up a signer login for you.

### Can I have more than one account?

Yes. Each account is just another key pair. Back each one up separately, and label them clearly in your password manager.

### What does `name@domain` next to someone's name mean?

It's a readable handle (techies call it NIP-05). It proves the account controls that web domain. It does **not** prove who someone is, because anyone can buy a domain.

→ Get your own: [Verification](../account/verification.md)

---

## Using Nostr

### Can I use the same account on my phone and my computer?

Yes. In the second app, choose **Log in** (not *Create account*), then use a signer if the app supports one, or paste your nsec. Your profile, followers and posts are all there.

→ See: [Multiple Clients](../account/multiple-clients.md)

### How do I find people to follow?

- **Accept your app's suggestions during sign-up.** Many apps offer ready-made lists of people by topic that you can follow in one tap.
- **Search hashtags** such as `#photography`, `#books`, `#music` or `#asknostr`.
- **Find your friends.** Search their name, look for an `npub…` in their X, Bluesky or Instagram bio, or just ask them.
- **Post an introduction** with `#introductions`.

Follow at least 20 people. An empty feed is the main reason people give up.

→ More: [Following People](../using-nostr/following.md)

### Why does a post look different, or go missing, in different apps?

Each app talks to its own mix of relays and has its own spam filters, so apps don't always see exactly the same things. If something's missing, try another app, or open it on [njump.me](https://njump.me).

### Are my posts public?

Yes. Posts, replies, likes, reposts and zaps can be seen by everyone, **permanently**. Your profile and follow list are public too. Treat every note like a postcard.

### Can I delete a post, or my whole account?

Apps send a *deletion request* (NIP-09). Most apps and relays honour it, but relays are run by many different people and someone may already have a copy. Treat every post as permanent.

To leave: clear your profile, post a goodbye, and stop using the key. Some apps can also send a *request to vanish* (NIP-62), which asks relays to drop everything from your key. Only relays that support it will comply, and copies may still survive.

### What's a relay? Do I need to pick one?

Relays are the servers that store and pass on posts. Your app picks sensible defaults, and for most people that's all you need. Three to six relays is plenty.

→ Learn more: [Understanding Relays](../using-nostr/relays.md)

### Are relays free?

Many are. Some charge a fee and only accept posts from members, which keeps spam out. [nostr.wine](https://nostr.wine) is one example.

### Can I run my own relay?

Yes, if you're technical. See the [Nostr Developer Guide](https://nostrcg.github.io/devguide/).

---

## Zaps and bitcoin

### What are zaps?

A zap is a small tip in bitcoin that you send to a post or a person. It arrives in seconds and is usually tiny: 21 sats (a couple of cents) is the classic "nice post". Zaps are optional.

→ Learn more: [Zaps & Lightning](../using-nostr/zaps.md)

### How do I send or receive zaps?

- **Easiest:** the Primal phone apps have a wallet built in. It has **its own recovery phrase (12–24 words), separate from your nsec.** Saving your nsec does *not* save your sats, so write those words down too. The wallet is in the phone apps, not on the primal.net website.
- **One wallet for every app:** use a wallet that supports **Nostr Wallet Connect (NWC)**, such as Alby Hub, and link it to each app.
- **Only receive:** get any wallet with a **Lightning address** and paste it into your profile.

→ Step by step: [Wallet Connect](../using-nostr/wallet-connect.md)

### Which wallet should I use?

| Wallet | Type | Notes |
|---|---|---|
| [Alby Hub](https://getalby.com/alby-hub) + [Alby Go](https://getalby.com/alby-go) | Self-custody | The reference wallet for Nostr apps. Run it yourself, or let Alby host it for a monthly fee. |
| Primal wallet | Self-custody | Built into the Primal phone apps. Back up its recovery phrase. |
| [Zeus](https://zeusln.com) | Self-custody | More control, a bit more to learn. |
| [Coinos](https://coinos.io) | Custodial | Free and web-based. It disclosed a credential leak in August 2026, so pocket money only. |
| [Minibits](https://minibits.cash), [Cashu.me](https://cashu.me) | Ecash (custodial) | Private and lightweight, but the mint holds the actual bitcoin. Pocket money only. |

:::caution
Keep only pocket money in custodial or ecash wallets. If an older guide names a wallet that isn't listed here, it may have closed or changed how it works.
:::

### Are zaps private?

No. Zaps are public: everyone can see who zapped what, and how much.

---

## Privacy and safety

### Are my DMs private? Why didn't my message arrive?

It depends on the app, and **apps using different message standards may not see each other's messages.**

- **Modern private messages (NIP-17):** Amethyst, 0xchat, Keychat, Coracle and Flotilla. Damus is switching over in its next update. Outsiders can't see what you wrote or who sent it. The relay that stores a message can still see who it's for and roughly when.
- **Older DMs (NIP-04):** Primal still uses these as of October 2026. The content is encrypted, but **anyone can see who messaged whom, and when**. Newer apps may hide these older messages.

If a message seems to vanish, ask the other person which app they use. For anything sensitive, use a NIP-17 app or [White Noise](https://whitenoise.chat) (still in beta).

→ More: [Messaging](../using-nostr/messaging.md)

### Can people see my IP address?

The relays you connect to can, like any website. Use a VPN or Tor if that matters to you.

### Is there moderation? What about spam and abuse?

Yes, just not from one central company:

- **You** can mute people, words, hashtags and threads.
- **Apps** filter spam, often using your *web of trust* (who your follows follow). Turn this on in settings if it isn't already.
- **Relays** can refuse content they don't want.

It's lighter than on X, so set up your filters early. Muting isn't blocking: a muted person can still see your public posts, you just won't see them.

### Someone is pretending to be me, or a famous person

Anyone can copy a name and photo. Check the **npub** or the **readable handle**, never just the display name. Report and mute the impersonator, and tell your followers from your real account.

### Someone asked for my nsec. Should I give it?

**Never.** No real app, person or "support team" needs it. Nostr has no support desk. It's always a scam.

### What scams should I watch for?

- "Support" DMs asking for your nsec or a "verification" key.
- Websites asking you to paste your nsec to "claim an airdrop", "get verified" or "recover your account".
- "You've been zapped! Claim your sats here" links.
- Giveaways and "double your sats" offers.
- Strangers who quickly ask to move to Telegram or WhatsApp.
- Lookalike accounts replying to popular posts with links.

---

## Miscellaneous

### What does NIP mean?

*Nostr Implementation Possibility*: a numbered spec, such as NIP-05. Developers use these to agree on how features work. You can ignore them as a user.

### Who created Nostr?

Nostr was created by the developer fiatjaf. It's now built by a global open-source community.

### Is Nostr just for bitcoin people?

No. There's a strong bitcoin crowd, but you don't have to join in. Follow what you like and mute what you don't.

---

## Still have questions?

- Ask on Nostr with **#asknostr**. The community is friendly.
- See [Troubleshooting](./troubleshooting.md) for things that aren't working.
- Look up a word in the [Glossary](./glossary.md).
- Browse [Resources](./resources.md) for more guides.
- Found a mistake in this guide? [Open an issue](https://github.com/nostrcg/userguide/issues).
