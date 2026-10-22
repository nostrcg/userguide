---
sidebar_position: 2
title: Verification
description: Readable handles (NIP-05) and what they do and don't prove
---

# Verification (NIP-05)

A **readable handle** (techies call it **NIP-05**) turns `npub1x7q3…` into something like `alice@example.com`, and shows it next to your name in most apps.

It's often called "verification", but be careful with that word:

:::caution What it proves
A readable handle only proves that the account **controls a domain**. It does **not** prove who someone is. Anyone can register `famousperson@somedomain.com`.
:::

## What it looks like

| Without a handle | With a handle |
|---|---|
| Alice | Alice |
| `npub1abc…` | `alice@example.com` |

Some apps also show a small badge or tick next to accounts whose handle checks out.

## How it works

1. You put `alice@example.com` in your profile.
2. Apps look up `https://example.com/.well-known/nostr.json?name=alice`.
3. That file lists the public key for "alice".
4. If it matches your key, apps show the handle.

## Getting a handle

| Option | Cost | Notes |
|---|---|---|
| **Your own domain** | Free if you already own one | The most durable option, because nobody can take it away. See below. |
| [**nostrplebs.com**](https://nostrplebs.com) | Paid | Long-running provider |
| [**nostrcheck.me**](https://nostrcheck.me) | Free and paid options | Also hosts media |
| [**iris.to**](https://iris.to) | Free | Claim `you@iris.to`. Paid supporter tiers are optional. |
| [**Primal Premium**](https://primal.net) | Paid | Gives you `you@primal.net` |

With a provider, you usually sign in with your Nostr account, pick a name, and then add the handle to your profile.

## Adding it to your profile

1. Open **Edit profile**.
2. Find the field called **NIP-05**, *Nostr address*, *Verification* or similar.
3. Enter your handle, for example `alice@example.com`.
4. Save.

## Using your own domain

### 1. Create the file

On your website, create a file at:

```
https://yourdomain.com/.well-known/nostr.json
```

### 2. Add your public key

The file uses your public key in **hex** format (64 characters of 0–9 and a–f), not your npub. Many apps and key tools can show your key in hex.

```json
{
  "names": {
    "alice": "your-public-key-in-hex"
  }
}
```

You can list several people on one domain by adding more names.

You can also add an optional `relays` section, which tells apps where to find your posts:

```json
{
  "names": {
    "alice": "your-public-key-in-hex"
  },
  "relays": {
    "your-public-key-in-hex": ["wss://relay.damus.io"]
  }
}
```

### 3. Allow web apps to read it

Web apps can only read the file if your server sends this header with it:

```
Access-Control-Allow-Origin: *
```

**Nginx:**

```nginx
location /.well-known/nostr.json {
    add_header Access-Control-Allow-Origin *;
}
```

**Apache (`.htaccess`):**

```apache
<Files "nostr.json">
    Header set Access-Control-Allow-Origin "*"
</Files>
```

Some static hosts skip folders that start with a dot, such as `.well-known`, so check that the file actually loads in your browser.

### 4. Add it to your profile

Enter `alice@yourdomain.com` in your profile and save.

:::tip Using "_" for your bare domain
If you use the name `_` in the file, many apps show your handle as just `yourdomain.com`.
:::

## When it doesn't show up

| Problem | Check |
|---|---|
| Handle shows as invalid | The file loads at `https://yourdomain.com/.well-known/nostr.json`, the JSON is valid, and the key is in **hex**, not npub |
| Works in phone apps but not web apps | The `Access-Control-Allow-Origin: *` header is missing |
| Still not showing | Wait a few minutes and refresh; apps cache results |
| Can't find the setting | Look for *NIP-05*, *Nostr address*, *Verification* or *Identity* |

## Spotting impersonators

Anyone can copy a name and photo. To check an account, look at its **npub** or its readable handle, never just the display name. A handle on a domain you recognise, such as an organisation's own website, is a good sign. A handle on a random domain proves very little.

## Privacy

Your handle publicly links your Nostr account to a domain. If you want to stay pseudonymous, don't use a domain registered in your real name.

## Questions

**Do I need one?** No. It's optional.

**Does it cost money?** Free options exist. With your own domain, you only pay for the domain.

**Can I change it?** Yes, any time. Just update your profile.

**What if my domain expires, or a provider shuts down?** The handle stops working. Your account is fine; only the readable name disappears. Keep your domain renewed.

**What if I move to a new key?** Point the handle at your new key, so people can find you there.

## Next steps

- [Profile Setup](./profile-setup.md)
- [Backup Your Keys](./backup-keys.md)
- [Multiple Clients](./multiple-clients.md)
