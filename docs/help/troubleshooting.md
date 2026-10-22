---
sidebar_position: 2
title: Troubleshooting
description: Solving common Nostr issues
---

# Troubleshooting

Something not working? Start here. Most problems are fixed by one of three things: waiting a moment, checking your relay settings, or trying the same account in a different app.

:::danger Before you try anything else
**Don't log out, uninstall the app or reset your phone until your nsec is saved.** If you pasted your key into an app, logging out erases it from that device, and nobody can recover it for you. See [Backup Your Keys](../account/backup-keys.md).
:::

:::tip The quickest test
Every Nostr app works with the same account. If something looks broken, log into a **second** app with your saved key (for example [jumble.social](https://jumble.social) or [primal.net](https://primal.net) in a browser). If it works there, the problem is the first app, not your account.
:::

---

## Account and login

### Can't log in with my key

Check that:

1. You're using your **nsec** (starts `nsec1`), not your npub. The npub is public and can't log you in.
2. There are no extra spaces before or after the key.
3. You copied the whole key.
4. You chose **Log in**, not *Create account*.
5. The app or website is real. Type well-known addresses yourself; never paste your nsec into a site someone sent you a link to.

**Trying to log in with an encrypted backup (`ncryptsec1…`)?** Some apps, including Primal and Damus, can't log in with an ncryptsec yet. Use your plain nsec backup in those apps, or use a signer.

### My profile is blank in a new app

1. Wait a minute and pull to refresh. The app is fetching your profile from relays.
2. Check you logged in with the right key. Compare the npub shown in the new app with the one in your old app.
3. If it's still blank, open your profile in an app where it does show, edit any field and save. This publishes your profile again to that app's relays.

### My profile shows in some apps but not others

Different apps talk to different relays. Open *Settings → Relays* in the app that works and make sure you have a **write/outbox** list. Then re-save your profile from that app. If the list is empty, add a big public relay such as `wss://relay.damus.io`.

### I lost my private key

Look everywhere first: your password manager, phone notes, screenshots, emails to yourself, and the settings of **every** app or device that's still logged in. Any logged-in app can show you the key, usually under *Settings → Keys*.

If it's truly gone, the account can't be recovered. Create a new one, follow your friends again, and tell people it's your new account.

→ For next time: [Backup Your Keys](../account/backup-keys.md)

### I think my key leaked

A Nostr key can't be changed. Make a new account (ideally with a signer), **revoke every Nostr Wallet Connect connection** in your wallet, and post from the old account pointing to your new npub before an attacker does. Full steps are in the [FAQ](./faq.md).

### Someone is impersonating me

1. Report and mute the impersonator.
2. Post from your real account so followers know which npub is yours.
3. Set up a readable handle (NIP-05) so people can tell you apart. See [Verification](../account/verification.md).
4. Turn on *web of trust* filtering in settings. It hides accounts that nobody you follow is connected to.

---

## Posts and feeds

### My feed is empty or boring

This is the most common problem, and it isn't a bug. Nostr has no algorithm by default: the people you follow *are* your feed. Follow at least 20 people, using the topic lists your app offers during sign-up or hashtags such as `#photography`, `#books` or `#music`. Most apps also have other feed tabs, like trending or popular with your follows.

### My posts don't show up for other people

1. Wait a moment and refresh.
2. Open *Settings → Relays* and check you have a **write/outbox** list (where your posts go). If it's empty, add `wss://relay.damus.io`.
3. Log into a second app and see if your post is there.
4. Ask a friend to look for it, or open it on [njump.me](https://njump.me).

### I can't see someone's posts

1. **Check you're following the right account.** Compare the npub, not just the name and picture.
2. **Try another app.** Each app uses different relays and spam filters, so they don't always see the same things.
3. **Check your mute list and spam filters.** A strict web-of-trust filter can hide people nobody you follow is connected to.

### A post looks different, or is missing, in different apps

That's normal. Each app talks to its own mix of relays and has its own filters. Try another app, or open the post on [njump.me](https://njump.me).

### Old posts disappeared

Relays are run by many different people. A relay may drop old data or shut down, and an app may clear its cache. Modern apps find posts through your relay list automatically, so try another app before assuming a post is gone.

### I deleted a post but people can still see it

Deleting sends a *request* (NIP-09). Most apps and relays honour it, but some don't, and someone may already have a copy. Treat every post as permanent.

---

## Private messages

### My message didn't arrive, or I can't see a message someone sent

The most likely cause: **you're using apps with different message standards.**

| Standard | Apps | Notes |
|---|---|---|
| **NIP-17** (modern) | Amethyst, 0xchat, Keychat, Coracle, Flotilla | Damus is switching over in its next update. Hides the content and the sender. |
| **NIP-04** (older) | Primal still uses this as of October 2026 | Content is encrypted, but anyone can see who messaged whom, and when. Newer apps may hide these messages. |

What to do:

1. Ask the other person which app they use, and both use apps with the same standard.
2. If your app has a separate *requests* tab, check it. Some apps put messages from people you don't follow there.
3. Open *Settings → Relays* and check you have a **DM inbox** list. Many apps set this up automatically. If it's empty, add a big public relay.

→ More: [Messaging](../using-nostr/messaging.md)

---

## Zaps and wallets

### I can't send zaps

1. **Is a wallet connected?** Open *Settings → Wallet* (or *Zaps*). If you use Primal, its phone apps have a built-in wallet. Otherwise connect a wallet with Nostr Wallet Connect. See [Wallet Connect](../using-nostr/wallet-connect.md).
2. **Do you have a balance?**
3. **Have you hit your spending budget?** NWC connections often have a monthly limit. Raise it in your wallet if needed.
4. **Does the person have a Lightning address?** No ⚡ button usually means they haven't added one.
5. **Try again, or try a smaller amount.** Lightning payments sometimes fail to find a route.

### I'm not receiving zaps

1. Check your profile has a **Lightning address** (sometimes labelled *LN address*) and that it's typed correctly.
2. Make sure the wallet behind that address is still working. Wallet services change often; if yours closed, get a new address and update your profile.

### My Primal wallet balance is gone after reinstalling

The Primal wallet has **its own recovery phrase (12–24 words), separate from your nsec**. Your nsec restores your account, not your sats. Restore the wallet with its recovery phrase. If you never saved it, the funds can't be recovered.

### I connected a wallet to an app I no longer trust

Open your wallet, find **Connections** (or *Apps* / *Nostr Wallet Connect*) and revoke that connection. Do the same for **every** connection if your nsec ever leaks.

---

## Media

### I can't upload images

1. **Check the app has permission** to use your camera or photo library.
2. **Try a smaller file** or a common format like JPG.
3. **Change your media server** in *Settings → Media*, if your app lets you. Or upload directly at [nostr.build](https://nostr.build) or [nostrcheck.me](https://nostrcheck.me) and paste the link into your post.

### Images aren't loading

The media server hosting that image may be down, or your app may have image loading turned off to save data. Check your settings, or try another app. Some apps let you add a backup media server (the standard is called *Blossom*) so your own pictures survive if one shuts down.

### My profile picture isn't updating

Re-save your profile, wait a minute, then refresh. If one app still shows the old picture, it's usually a cache. Check in a second app.

---

## Readable handle (NIP-05)

### My handle isn't showing, or shows as invalid

If you use a provider like nostrplebs.com, nostrcheck.me, iris.to or Primal Premium, check you typed the handle exactly as they gave it, and that it's linked to your current npub.

If you host it on your own domain, check:

1. The file is at `https://yourdomain.com/.well-known/nostr.json`.
2. It's valid JSON, and the key inside it is in **hex** format, not npub.
3. The server sends the header `Access-Control-Allow-Origin: *`, so web apps can read it.
4. Test it: visit `https://yourdomain.com/.well-known/nostr.json?name=yourname` in a browser.

→ Full guide: [Verification](../account/verification.md)

---

## Apps and performance

### The app is slow or drains my battery

1. **Use fewer relays.** Three to six is plenty. More just slows your app down.
2. **Turn off media auto-play or auto-load**, if your app has the option.
3. **Update the app.** Bugs get fixed often.
4. **Try a different app** with the same account.

### The app I used has closed, or an old guide links to a dead app

Your account isn't stored in the app. Install another one and log in with your key. Many early Nostr apps have closed, and some of their old web addresses now host spam or gambling sites, so don't follow old links.

→ Current picks: [Clients Overview](../clients/overview.md)

---

## When all else fails

1. **Force close and reopen** the app.
2. **Update** the app.
3. **Log into a second app** with your saved key to see whether the problem is the app or your account.
4. **Check relay status** at [nostr.watch](https://nostr.watch).

### Get help

- Post with **#asknostr**. People are quick to help.
- Report bugs on the app's own website or GitHub page.
- Found a problem with this guide? [Open an issue](https://github.com/nostrcg/userguide/issues).

When reporting a bug, include the app name and version, your device, what you did, and what you expected to happen. **Never include your nsec**, and never send it to anyone offering "support". Nostr has no support desk, and anyone who asks for your key is a scammer.

---

## Next steps

- [FAQ](./faq.md): more answers
- [Glossary](./glossary.md): what the words mean
- [Resources](./resources.md): more guides
