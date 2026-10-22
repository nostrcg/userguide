---
sidebar_position: 3
title: Web Clients
description: Browser-based Nostr clients
---

# Web Clients

Web clients let you use Nostr in any browser without installing anything. They're handy at work, on a borrowed laptop, or just to try Nostr out.

## Start here

Pick either one:

- [**Jumble**](https://jumble.social): a clean, fast web app that can also show feeds from individual relays.
- [**primal.net**](https://primal.net): fast and polished, with good discovery feeds.

Primal's built-in wallet is in the Primal **phone apps**, not on primal.net.

## More web clients

### Ditto

A friendly all-rounder made for people new to Nostr.

- **URL:** [ditto.pub](https://ditto.pub)

---

### Nostria

"Social without the noise": calm, focused feeds. Also available as a desktop and Android app.

- **URL:** [nostria.app](https://nostria.app)

---

### Snort

A tidy, quick web app.

- **URL:** [snort.social](https://snort.social)

---

### Coracle

Smart about relays, and good for custom feeds. Coracle also uses the newer, more private NIP-17 standard for messages.

- **URL:** [coracle.social](https://coracle.social)

---

### noStrudel

A kitchen-sink explorer that shows everything Nostr can do. Great for power users and the curious.

- **URL:** [nostrudel.ninja](https://nostrudel.ninja)

---

### Iris

Simple, works offline, and has a built-in ecash wallet. Also available as a desktop app.

- **URL:** [iris.to](https://iris.to)

---

### YakiHonne

A social feed plus long-form articles and creator tools.

- **URL:** [yakihonne.com](https://yakihonne.com)

## Writing and reading articles

- [**YakiHonne**](https://yakihonne.com): write and read long-form articles.
- [**Pareto**](https://pareto.space): blogs and newsletters for independent journalists.
- [**Wikifreedia**](https://wikifreedia.xyz): a wiki where anyone can write their own version of an article.

## Comparison

| Client | Feel | Best for |
|---|---|---|
| Jumble | Clean, fast | Everyday use, browsing relay feeds |
| primal.net | Polished | Discovery, beginners |
| Ditto | Friendly | Newcomers |
| Nostria | Calm | Focused reading |
| Snort | Quick | No-frills posting |
| Coracle | Relay-aware | Custom feeds |
| noStrudel | Everything | Power users |

## Browser extensions (signers)

A browser extension keeps your key in one place. Websites ask the extension to sign, and never see the key itself.

| Extension | Browser | Notes |
|---|---|---|
| [Alby](https://getalby.com) | Chrome, Firefox and others | Also connects a wallet for zaps |
| [nos2x](https://github.com/fiatjaf/nos2x) | Chrome | Simple key storage |
| [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) | Firefox | Firefox version of nos2x |

### How extensions work

![How a signer works](/img/diagrams/signer-flow.svg)

1. The website asks to sign something, like a new post.
2. The extension shows you the request.
3. You approve.
4. The extension signs it. Your key never leaves the extension.

:::tip Recommended setup
Use a web client together with a browser extension. It is the best balance of convenience and safety on a computer.
:::

## Logging in

### With an extension (recommended)

1. Install Alby, nos2x or nos2x-fox.
2. Add your key to the extension.
3. Visit a web client and click *Log in with extension*.
4. Approve the connection.

### With a remote signer (bunker)

Some web clients accept a `bunker://…` link from a remote signer such as [nsecBunker](https://github.com/kind-0/nsecbunkerd), or one set up through [nstart.me](https://nstart.me). Your key stays with the signer.

### Pasting your nsec

1. Type the client's address yourself.
2. Click *Log in* and paste your nsec.

:::danger Only on sites you typed in yourself
Never paste your nsec into a website someone sent you, and never give it to a person. Only use well-known Nostr sites you typed in yourself, like the ones on this page. Avoid it on shared or public computers. Better still, use an extension.
:::

:::caution Logging out deletes the key
If you pasted your nsec, logging out erases it from that browser. Make sure your [backup](../account/backup-keys.md) is saved first.
:::

## Tips for web users

- **Bookmark** the clients you use, and always open them from your bookmark. That way you won't land on a fake copy.
- **Shared computers:** use a private window, and don't paste your nsec there at all if you can avoid it.
- **Multiple accounts:** extensions like Alby can hold more than one key.
- **Share with people not on Nostr:** [njump.me](https://njump.me) opens any Nostr post or profile as a normal web page.
- **Search:** [nos.today](https://nos.today) and [ants.sh](https://ants.sh) search across Nostr.

## On your phone's browser

These clients also work in a phone browser. That's fine for a quick look, but you may miss push notifications. For regular use, see [Mobile clients](./mobile.md).

## Which should I use?

| Situation | Use |
|---|---|
| General browsing | Jumble or primal.net |
| New to Nostr | Ditto |
| Custom feeds | Coracle |
| Want every feature | noStrudel |
| Quick check | Snort |
| Writing articles | YakiHonne or Pareto |

## Next steps

- [Desktop clients](./desktop.md): apps for your computer
- [Mobile clients](./mobile.md): phone apps
- [Understanding relays](../using-nostr/relays.md)
