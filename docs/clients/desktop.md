---
sidebar_position: 4
title: Desktop Clients
description: Nostr applications for Mac, Windows, and Linux
---

# Desktop Clients

On a computer, most people simply use a web client. Our two picks are [**Jumble**](https://jumble.social) and [**primal.net**](https://primal.net), both in the browser with nothing to install. See [Web clients](./web.md).

If you'd rather have an app with its own window, these are the options.

## Desktop apps

### Notedeck

A multi-column desktop app from the Damus team, in the style of TweetDeck. Still in beta.

- **Platforms:** Desktop, Android
- **Download:** [GitHub releases](https://github.com/damus-io/notedeck/releases)

**Good for:** keeping several feeds, notifications and searches side by side.

---

### Amethyst Desktop

The feature-packed Android app is also available on desktop.

- **Get it:** [amethyst.social](https://amethyst.social)

---

### Nostria

"Social without the noise": calm, focused feeds. Works in the browser, as a desktop app and on Android.

- **Get it:** [nostria.app](https://nostria.app)

---

### Iris

Simple and works offline, with a built-in ecash wallet. Available on the web and as a desktop app.

- **Get it:** [iris.to](https://iris.to)

---

### Damus and Nostur on the Mac

- [**Damus**](https://damus.io): the iPhone app also runs on Mac.
- [**Nostur**](https://nostur.com): a power-user app for iPhone and Mac with lots of options.

---

### Chat apps on desktop

- [**0xchat**](https://0xchat.com): Telegram-style private messages, group chats and calls.
- [**Keychat**](https://keychat.io): private chat with a bitcoin wallet built in.

:::note Older desktop apps
Older guides recommend **Gossip** and **Lume**. Both are no longer maintained. Try Nostria, Amethyst or Notedeck instead.
:::

## Web apps as desktop apps

Many web clients can be installed as an app with their own window (a "progressive web app").

1. Open the client, for example [jumble.social](https://jumble.social), in Chrome or Edge.
2. Look for the *Install* icon in the address bar, or open the browser menu and choose *Install* or *Create shortcut*.
3. The app now opens in its own window, like a normal program.

## Comparison

| App | Platforms | Style | Ease of use |
|---|---|---|---|
| Jumble / primal.net | Any browser | Single feed | Easy |
| Notedeck | Desktop, Android (beta) | Multi-column | Medium |
| Amethyst | Android, Desktop | Everything | Medium |
| Nostria | Web, Desktop, Android | Calm feeds | Easy |
| Iris | Web, Desktop | Simple | Easy |
| Nostur | iPhone, Mac | Lots of settings | Medium |

## Keeping your key safe on a computer

### Use a signer (recommended)

- **Browser extension:** [Alby](https://getalby.com) (Chrome, Firefox and others), [nos2x](https://github.com/fiatjaf/nos2x) (Chrome) or [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) (Firefox). On a Nostr website, click *Log in with extension*.
- **Remote signer (bunker):** apps that support it connect with a `bunker://…` or `nostrconnect://…` link. Power users can run their own with [`nak bunker`](https://github.com/fiatjaf/nak). [nstart.me](https://nstart.me) can set up a bunker login when you create an account.

See [Your identity](../getting-started/your-identity.md) for how signers work.

### Or paste your key into the app

Desktop apps usually store a pasted key on your computer. That's convenient, but the app then holds your whole identity.

:::danger The nsec rule
Never give your nsec to a person, or to a website someone sent you. Type it only into an app you installed yourself, or a well-known Nostr site you typed in yourself. Better still, use a signer.
:::

## Setting up

1. **Download** only from the official website or store linked above.
2. **Install** and open the app.
3. **Create or log in** to your account. Use a signer if you can.
4. **Relays** are usually set up for you.

:::caution Logging out deletes the key
If you pasted your nsec into an app, logging out erases it from that computer. Keep your [backup](../account/backup-keys.md) safe first, and test it by logging into a second app, not by logging out.
:::

### Security tips

- Download only from official sources.
- Keep your system and apps updated.
- Use full-disk encryption and a screen lock.
- Keep your key backup somewhere separate from the computer.

## Next steps

- [Specialized clients](./specialized.md): chat, video, music, writing and more
- [Understanding relays](../using-nostr/relays.md)
- [Back up your keys](../account/backup-keys.md)
