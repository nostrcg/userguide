---
sidebar_position: 4
title: Your Identity
description: How keys work as your Nostr account
---

# Your Identity

On Nostr there's no "Forgot password?" button. Your account **is** a pair of keys, and you hold them. That's the whole point: no company can lock you out. It also means nobody can let you back in.

## The two keys

### Public key (npub)

```
npub1abc123def456...
```

- **What it is:** your public identity, like a **username**
- **Share it?** Yes, freely
- **Starts with:** `npub1`

### Private key (nsec)

```
nsec1xyz789ghi012...
```

- **What it is:** like a **password that can never be reset**
- **Share it?** Never, with anyone
- **Starts with:** `nsec1`

:::danger Your nsec is your account
Anyone who has your nsec can:

- Post as you
- Read your private messages
- Change your profile and follow list
- Possibly spend from wallets connected to your account

A Nostr key can't be changed. If someone gets it, they have it for good.
:::

## How keys work

![Your private key signs posts; anyone can use your public key to check the signature](/img/diagrams/keys-explained.svg)

1. You write a post.
2. Your private key **signs** it.
3. Anyone can use your public key to check that you wrote it.
4. Nobody can forge your signature without your private key.

## Finding your keys

In most apps:

1. Open **Settings** (or your profile).
2. Look for **Keys**, **Account** or **Backup**.
3. Your npub is usually shown openly.
4. Your nsec is usually hidden until you tap to reveal or copy it.

If you logged in with a signer, the app doesn't have your nsec at all. Look in the signer instead.

### Other formats you might see

| Format | Looks like | Used for |
|---|---|---|
| **npub / nsec** | `npub1…` / `nsec1…` | The usual way to show keys |
| **Hex** | 64 characters of 0–9 and a–f | The same key in a technical format |
| **nprofile** | `nprofile1…` | A shareable link to a profile |
| **ncryptsec** | `ncryptsec1…` | Your nsec locked with a password, for backups |

Most apps convert between these for you.

## Keeping your key safe

**Do:**

- Save your nsec in a **password manager** and **on paper**. See [Backup Your Keys](../account/backup-keys.md).
- Use a **signer** so fewer apps ever hold your key (see below).

**Don't:**

- Give your nsec to anyone. No real app, person or "support team" needs it.
- Paste it into a website someone sent you a link to.
- Keep it in screenshots or unencrypted notes that sync to the cloud.

:::tip The rule
Never give your nsec to a person, or to a website someone sent you. Type it only into an app you installed yourself, or a well-known Nostr site you typed in yourself. Better still, use a signer.
:::

## What if I lose my private key?

First, check everywhere: your password manager, phone notes, screenshots, emails to yourself, and the settings of **every** app or device that's still logged in. Any logged-in app can show you the key.

If it's truly gone, the account can't be recovered. There's no company and no support desk that can reset it. You'll need to:

- Create a new account
- Follow your friends again
- Tell people it's your new account

Your old posts stay up, and you can no longer delete them.

## Signers

Every time you paste your nsec into an app, that app holds your whole identity. A **signer** fixes this. Your key lives in **one** trusted place, and other apps ask it for permission, as in *"Allow Primal to post this note?"* If one of those apps is ever hacked, your key isn't in it.

![Apps ask the signer to sign; the signer holds your key and only returns a signature](/img/diagrams/signer-flow.svg)

| Device | Signer |
|---|---|
| **Android** | [Amber](https://github.com/greenart7c3/Amber). Many apps, including Amethyst and Primal, have a *Log in with Amber* button. Get it from [Zapstore](https://zapstore.dev) or GitHub. |
| **Computer** | Browser extensions: [Alby](https://getalby.com) (also connects a wallet), [nos2x](https://github.com/fiatjaf/nos2x) (Chrome) or [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) (Firefox). Click *Log in with extension* on a Nostr website. |
| **iPhone** | [Aegis](https://github.com/ZharlieW/Aegis) (beta, via TestFlight; an Android version is on its GitHub page too). It works as a *bunker*: apps connect with a `bunker://…` or `nostrconnect://…` link or QR code. Fewer apps support this on iPhone so far. |
| **Power users** | Run your own remote signer from the command line with [`nak bunker`](https://github.com/fiatjaf/nak). |

Starting from scratch? [nstart.me](https://nstart.me) creates your key, saves an encrypted backup, and can set up a bunker login.

You still need to back up the key that's inside your signer.

## Readable handles (NIP-05)

You can link your account to a domain name, so people see something like:

```
alice@example.com
```

It looks like an email address, but it isn't one. It shows that the account controls that domain. It does **not** prove who someone is.

→ [Verification](../account/verification.md)

## Next steps

- [Backup Your Keys](../account/backup-keys.md): do this today
- [Clients](../clients/overview.md): find more apps
- [Profile Setup](../account/profile-setup.md): finish your profile
