---
sidebar_position: 4
title: Multiple Clients
description: Using your Nostr account across several apps and devices
---

# Multiple Clients

One of Nostr's best features is that the same account works in every Nostr app. Your profile, followers and posts come with you.

## How it works

Your account is your **key**, not a login stored inside one app:

```
              ┌──────────────┐
              │   Your key   │
              └──────┬───────┘
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
 ┌─────────┐   ┌──────────┐   ┌──────────┐
 │  Damus  │   │  Jumble  │   │ Amethyst │
 │ (iPhone)│   │  (web)   │   │ (Android)│
 └─────────┘   └──────────┘   └──────────┘
      │              │              │
      └──────────────┴──────────────┘
           Same profile, followers
               and posts
```

## Adding a new app

In the new app, choose **Log in** (not *Create account*), then pick the safest option it offers:

1. **Log in with a signer** (Amber on Android, a browser extension on a computer, a bunker link on iPhone). Best, because the app never sees your key.
2. **Paste your nsec.** Fine in well-known apps you installed yourself, or well-known sites like jumble.social or primal.net that you typed in yourself. Never on a site someone sent you a link to.

Your profile and follows should appear within a few moments.

:::caution Don't create a second account by mistake
If you tap *Create account* instead of *Log in*, the app makes a brand-new key, with no followers. If that happens, just log in again with your existing key.
:::

## What carries over

| Comes with you | Stays in each app |
|---|---|
| Profile (name, picture, bio, handle, Lightning address) | App settings and layout |
| Who you follow | Notification settings |
| Your posts, replies, likes and reposts | Drafts |
| Mute list (in many apps) | Wallet connections (NWC) |
| Private messages, if both apps use the same message standard | |

### A note on private messages

Apps use two different standards for private messages, and they don't always see each other's messages:

- **Modern (NIP-17):** Amethyst, 0xchat, Keychat, Coracle and Flotilla. Damus is switching over in its next update.
- **Older (NIP-04):** Primal still uses these as of October 2026. Newer apps may hide these older messages by default. They also let anyone see who messaged whom, and when.

If a message seems to vanish, ask the other person which app they use. See [Messaging](../using-nostr/messaging.md).

## Good combinations

Two good picks per device:

| Device | Pick either one |
|---|---|
| iPhone | Damus or Primal |
| Android | Amethyst or Primal |
| Computer | Jumble (jumble.social) or primal.net |

Then mix in specialist apps for different jobs:

- **Phone + computer:** Damus or Amethyst on your phone for scrolling, Jumble or primal.net at your desk.
- **Social + writing + chat:** your usual social app, YakiHonne on your computer for long-form writing, and 0xchat for private messages.
- **Creator:** your usual social app for posts, zap.stream for live video, YakiHonne for articles, Divine for short videos.

See [Clients](../clients/overview.md) for more choices.

## Using a signer (the safer way)

Every time you paste your nsec into an app, that app holds your whole identity. A **signer** keeps your key in one place, and other apps ask it for permission, as in *"Allow Primal to post this note?"* If one of those apps is ever hacked, your key isn't in it.

![Apps ask the signer to sign; the signer holds your key and only returns a signature](/img/diagrams/signer-flow.svg)

### Why it's better

- You never paste your nsec into each app.
- Your key lives in one place.
- You can switch off any single app later, without changing your key.

### Signers by device

| Device | Signer | How apps connect |
|---|---|---|
| Android | [Amber](https://github.com/greenart7c3/Amber) | *Log in with Amber* button in Amethyst, Primal and many others. Get it from [Zapstore](https://zapstore.dev) or GitHub. |
| Computer | [Alby](https://getalby.com) (also a wallet), [nos2x](https://github.com/fiatjaf/nos2x) (Chrome), [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) (Firefox) | *Log in with extension* on Nostr websites |
| iPhone | [Aegis](https://github.com/ZharlieW/Aegis) (beta, via TestFlight; Android version on GitHub too) | A `bunker://…` or `nostrconnect://…` link or QR code. Fewer iPhone apps support this so far. |
| Power users | [`nak bunker`](https://github.com/fiatjaf/nak) | A remote signer you run yourself |

Starting from scratch? [nstart.me](https://nstart.me) creates your key, saves an encrypted backup, and can set up a bunker login.

### Setting one up

**Browser extension:**

1. Install the extension from your browser's official store.
2. Add your key to it (or create one there).
3. On a Nostr website, click **Log in with extension** and approve.

**Amber (Android):**

1. Install Amber and add your key.
2. In your Nostr app, choose **Log in with Amber**.
3. Approve requests in Amber when the app asks.

You still need to back up the key inside your signer. See [Backup Your Keys](./backup-keys.md).

## Switching off an app

- **If you logged in with a signer:** remove that app's permission in the signer. Your key never left it.
- **If you pasted your nsec:** you can't take the key back from that app. Logging out removes it from that device, but if you think the app or site was malicious, treat your key as leaked. See [If your key leaks](./backup-keys.md).

:::danger Logging out erases a pasted key
If you pasted your nsec into an app, logging out deletes it from that device. Make sure your key is backed up and tested in another app before you log out of anything.
:::

## When things don't match

Each app talks to its own mix of relays and has its own spam filters, so apps don't always show exactly the same things.

| Problem | Try this |
|---|---|
| Can't log in | Check you copied the whole nsec, starting `nsec1`. Primal and Damus can't use an `ncryptsec` yet. |
| Profile looks blank | Wait a moment and refresh. Check you used *Log in*, not *Create account*. |
| Fewer follows than expected | Refresh. If it persists, check *Settings → Relays* has a write/outbox list. |
| Private messages missing | The other app may use a different message standard (see above). |
| A post shows in one app but not another | Try another app, or open it on [njump.me](https://njump.me). |

More in [Troubleshooting](../help/troubleshooting.md) and [Relays](../using-nostr/relays.md).

## Tips

- Use a signer when you can.
- Only use apps you installed yourself from an official store, or well-known sites you typed in yourself.
- Don't log in on shared or public computers.
- Keep track of which apps hold your nsec.

## Next steps

- [Backup Your Keys](./backup-keys.md)
- [Profile Setup](./profile-setup.md)
- [Clients](../clients/overview.md)
