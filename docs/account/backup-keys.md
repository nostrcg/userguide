---
sidebar_position: 3
title: Backup Your Keys
description: How to safely back up your Nostr private key
---

# Backup Your Keys

Your private key (nsec) **is** your account. There's no "forgot password", no email reset and no support desk. If you lose it, nobody can let you back in. Two minutes on this page is the best investment you'll make.

Do this the day you create your account.

## What your nsec looks like

```
nsec1abc123def456ghi789...
```

- Starts with `nsec1`
- 63 characters of letters and numbers

## Where to find it

1. Open your Nostr app.
2. Go to **Settings → Keys** (sometimes *Account*, *Security* or *Backup*).
3. Reveal or copy your nsec.

If you logged in with a signer, the app doesn't hold your nsec. Look for it in the signer instead.

:::caution Handle with care
Reveal it somewhere private, copy it carefully, and close the screen when you're done.
:::

## The backup: two places

### 1. A password manager

Bitwarden, 1Password, Proton Pass, KeePass or your phone's built-in password manager all work.

1. Create an entry called "Nostr".
2. Paste your **nsec** into it.
3. Add your **npub** too, so you know which account it belongs to.

### 2. Paper

1. Write the nsec out clearly, in pen.
2. Check every character against the screen.
3. Note what it is ("Nostr key") and the date.
4. Keep it where you'd keep your passport.

### Extra protection: an encrypted backup (ncryptsec)

Some apps, and [nstart.me](https://nstart.me), can give you an **encrypted backup** that starts with `ncryptsec1…`. It's your key locked with a password you choose, so a stolen copy is useless without that password.

- Save it **as well as** your plain nsec, not instead of it. Primal and Damus can't log in with an ncryptsec yet.
- Keep the password somewhere **separate**, never on the same piece of paper.

## Places to avoid

- Screenshots in your photo library (these often sync to the cloud)
- Emailing it to yourself
- Chat messages, including messages to yourself
- Unencrypted notes apps
- Sticky notes on your desk

## Test your backup (without logging out)

A backup you've never tried might have a typo.

1. Open a **second** app, for example [jumble.social](https://jumble.social) or [primal.net](https://primal.net) in a browser.
2. Choose **Log in** and use your backup.
3. If your profile appears, you're safe.

:::danger Don't test by logging out
If you pasted your nsec into an app, **logging out deletes it from that device**. Never log out, uninstall the app or reset your phone until your backup is saved and tested in a second app. (Logins through a signer aren't affected.)
:::

## If you lose your key

Check everywhere first: your password manager, phone notes, screenshots, emails to yourself, and the settings of **every** app or device that's still logged in. Any logged-in app can show you the key.

If it's truly gone, the account can't be recovered:

1. **Create a new account**, and back it up properly this time.
2. **Follow your friends again.**
3. **Tell people** it's your new account, and update your npub anywhere you've listed it.

Your old posts stay up, and you can no longer delete them.

## If your key leaks

If you pasted your nsec somewhere sketchy, or someone else has seen it, move fast. A Nostr key can't be changed.

1. **Make a new account**, ideally with a signer this time.
2. **Protect your money.** In your wallet, revoke every Nostr Wallet Connect (NWC) connection. Move funds out of any wallet you log into with your Nostr key. Wallets with their own recovery phrase aren't affected.
3. **From the old account**, post a note pointing to your new npub. Do it before the attacker does, because followers trust the first post they see.
4. **Update your npub** everywhere you've listed it: website, bio, other social media.
5. **Move your readable handle (NIP-05) and Lightning address** to the new account.

## Common scams

- **"Support" messages asking for your nsec**, or for a "verification" key. Nostr has no support desk, and no real app will ever ask.
- **Websites asking you to paste your nsec** to "claim an airdrop", "get verified" or "recover your account".
- **"You've been zapped! Claim your sats here"** links.

**The rule:** never give your nsec to a person, or to a website someone sent you. Type it only into an app you installed yourself, or a well-known Nostr site you typed in yourself. Better still, use a signer.

## Signers: fewer copies of your key

Every app you paste your nsec into holds your whole identity. A **signer** keeps your key in one trusted place and approves actions for other apps, so they never see it.

| Device | Signer |
|---|---|
| Android | [Amber](https://github.com/greenart7c3/Amber) |
| Computer | [Alby](https://getalby.com), [nos2x](https://github.com/fiatjaf/nos2x) (Chrome) or [nos2x-fox](https://github.com/diegogurpegui/nos2x-fox) (Firefox) |
| iPhone | [Aegis](https://github.com/ZharlieW/Aegis) (beta, via TestFlight) |
| Power users | [`nak bunker`](https://github.com/fiatjaf/nak), a remote signer you run yourself |

**You still need to back up the key inside your signer.** See [Multiple Clients](./multiple-clients.md) for how to log in with one.

## More than one account

Some people keep separate accounts, for example personal and work. Back up each key separately, and label each entry clearly with its npub.

## Wallets have their own backup

If you use a wallet for zaps, it may have its own **recovery phrase** (12 to 24 words). For example, the wallet inside the Primal phone apps has one that's separate from your Nostr key. Saving your nsec does **not** save your sats, so write those words down too. See [Zaps](../using-nostr/zaps.md).

## Checklist

- [ ] Found my nsec in the app's settings
- [ ] Saved it in a password manager, with my npub
- [ ] Written it on paper and stored it safely
- [ ] *(If offered)* Saved an ncryptsec as well, with its password kept separately
- [ ] Tested it by logging into a **second** app
- [ ] *(If I use one)* Backed up my wallet's recovery phrase

## Next steps

- [Multiple Clients](./multiple-clients.md): use your key in other apps
- [Your Identity](../getting-started/your-identity.md): how keys work
- [Verification](./verification.md): get a readable handle
