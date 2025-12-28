---
sidebar_position: 4
title: Your Identity
description: Understanding keys and identity on Nostr
---

# Understanding Your Nostr Identity

Your identity on Nostr is based on **cryptographic keys**. This might sound technical, but it's actually a simpler and more secure system than traditional usernames and passwords.

## The Two Keys

When you create a Nostr account, you get two keys:

### Public Key (npub)

```
npub1abc123def456...
```

- **What it is:** Your public identity/address
- **Share it:** Yes! Give it to anyone
- **Like:** Your email address or phone number
- **Format:** Starts with `npub1`

### Private Key (nsec)

```
nsec1xyz789ghi012...
```

- **What it is:** Your secret password
- **Share it:** NEVER!
- **Like:** The password to your bank account
- **Format:** Starts with `nsec1`

:::danger Protect Your Private Key
Anyone with your private key can:
- Post as you
- Read your private messages
- Send zaps from your account
- Take over your identity completely

There is no "forgot password" - if someone gets your key, they have it forever.
:::

## How Keys Work

Think of it like a special lock and key:

```
┌─────────────────┐
│   Private Key   │──creates──▶ Signature on posts
│   (Your Secret) │
└─────────────────┘
        │
        │ generates
        ▼
┌─────────────────┐
│   Public Key    │──verifies──▶ "Yes, this is really from them"
│ (Share Freely)  │
└─────────────────┘
```

1. You write a post
2. Your private key "signs" the post
3. Anyone can use your public key to verify you wrote it
4. No one can forge your signature without your private key

## Finding Your Keys

### In Most Apps

1. Go to Settings or Profile
2. Look for "Keys" or "Account"
3. Your public key is usually visible
4. Private key may be hidden (tap to reveal)

### Key Formats

You might see keys in different formats:

| Format | Example | Use |
|--------|---------|-----|
| **npub/nsec** | `npub1abc...` | Most common, easy to share |
| **Hex** | `a1b2c3d4e5...` | Technical, 64 characters |
| **nprofile** | `nprofile1...` | Includes relay hints |

Most apps convert between these automatically.

## Key Management Best Practices

### Do's ✅

- **Write down your nsec** on paper and store safely
- **Use a password manager** for digital backup
- **Verify your npub** before sharing it
- **Use a signer app** for extra security (advanced)

### Don'ts ❌

- **Never share your nsec** with anyone
- **Never enter nsec** on untrusted websites
- **Never store nsec** in plain text on your computer
- **Never screenshot** your private key

## What if I Lose My Private Key?

There is no recovery option. This is by design:
- No company has access to reset it
- No email verification
- No customer support

**This is why backup is so important!**

If you lose your key:
- You'll need to create a new account
- You'll lose your follower connections
- Old posts will still exist but you can't manage them

→ See [Backup Your Keys](/account/backup-keys) for detailed backup strategies

## Signer Apps (Advanced)

For extra security, you can use a separate app to manage your keys:

### What is a Signer?

Instead of entering your private key into every app, a signer:
- Stores your key securely
- Approves actions on your behalf
- Never shares the actual key with apps

### Popular Signers

| Platform | App |
|----------|-----|
| Browser | [nos2x](https://github.com/fiatjaf/nos2x), [Alby](https://getalby.com) |
| Mobile | [Amber](https://github.com/greenart7c3/Amber) (Android) |
| Desktop | [nsec.app](https://nsec.app) |

### How It Works

```
┌─────────┐     ┌──────────┐     ┌─────────┐
│  App    │────▶│  Signer  │────▶│  Relay  │
│(Client) │ ask │(Has Key) │sign │(Server) │
└─────────┘     └──────────┘     └─────────┘
```

1. App asks signer to sign something
2. Signer shows you what it's signing
3. You approve
4. Signer signs without exposing your key to the app

## Verification (NIP-05)

You can link your Nostr identity to a domain name:

```
alice@example.com
```

This is NOT an email address! It's a way to verify your identity.

→ Learn more in [Verification](/account/verification)

## Next Steps

- [Back Up Your Keys](/account/backup-keys) - Essential security
- [Choose a Client](/clients/overview) - Find your favorite app
- [Set Up Your Profile](/account/profile-setup) - Complete your identity
