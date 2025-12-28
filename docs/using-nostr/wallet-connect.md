---
sidebar_position: 6
title: Wallet Connect (NWC)
description: Connect your Lightning wallet to any Nostr app
---

# Nostr Wallet Connect (NWC)

Nostr Wallet Connect (NWC) is an open protocol that connects your Lightning wallet to apps. Think of it as **USB-C for Bitcoin wallets** — one connection standard that works everywhere.

## What is NWC?

NWC allows any app to request payments from your wallet:

![NWC Flow](/img/diagrams/nwc-flow.svg)

1. You connect your wallet once using a connection string
2. Apps send encrypted payment requests through Nostr relays
3. Your wallet pays automatically (within limits you set)
4. You never share your wallet credentials with apps

## Why Use NWC?

| Without NWC | With NWC |
|-------------|----------|
| Copy invoice, switch to wallet, paste, pay, switch back | One-click zaps |
| Enter wallet credentials in every app | Connect once, use everywhere |
| Trust apps with your wallet access | Wallet controls spending limits |
| Manual confirmation for each payment | Automatic payments within limits |

## Key Benefits

### For Users

- **One-click zaps** — No more switching apps
- **Your keys, your funds** — Wallet stays in your control
- **Spending limits** — Set maximum amounts per app
- **Works everywhere** — Same wallet in all NWC apps

### Security

- **Zero custody** — Apps never hold your funds
- **Encrypted** — All communication is end-to-end encrypted
- **Revocable** — Disconnect any app anytime
- **Configurable** — Set spending limits and frequency caps

## How to Set Up NWC

### Step 1: Get an NWC-Compatible Wallet

| Wallet | Type | Best For |
|--------|------|----------|
| [Alby Hub](https://albyhub.com) | Self-custodial | Power users, own node |
| [Alby Account](https://getalby.com) | Custodial | Easy setup |
| [Primal](https://primal.net) | Built-in | Primal users |
| [Coinos](https://coinos.io) | Custodial | Web-based |

### Step 2: Create a Connection

In your wallet:
1. Find "Nostr Wallet Connect" or "App Connections"
2. Click "Create Connection" or "Add App"
3. Set spending limits (e.g., 1000 sats/day)
4. Copy the connection string (starts with `nostr+walletconnect://`)

### Step 3: Connect to an App

In the Nostr app:
1. Go to Settings → Wallet
2. Choose "Nostr Wallet Connect"
3. Paste your connection string
4. Done! Start zapping

## Supported Apps

### Nostr Clients

| App | Platform | NWC Support |
|-----|----------|-------------|
| Damus | iOS | ✅ |
| Amethyst | Android | ✅ |
| Primal | All | ✅ Built-in |
| Snort | Web | ✅ |
| Coracle | Web | ✅ |
| Nostrudel | Web | ✅ |

### Other Apps

- **Wavlake** — Music streaming
- **Fountain** — Podcasts
- **Stacker News** — Bitcoin forum
- **Zap.stream** — Live streaming

## Wallet Options

### Alby Hub (Recommended for Power Users)

Self-custodial wallet that runs on your own hardware:
- Full control of your funds
- Connect multiple apps
- Detailed spending analytics
- Run on Umbrel, Start9, or cloud

**Get started:** [albyhub.com](https://albyhub.com)

### Alby Account

Easy custodial option:
- Quick setup
- Browser extension included
- Lightning address included
- Good for beginners

**Get started:** [getalby.com](https://getalby.com)

### Primal Wallet

Built into the Primal app:
- Zero configuration needed
- Works across Primal web/mobile
- Easy onboarding
- NWC for other apps too

### Connecting Your Own Node

Have an Umbrel, Start9, or LND node? Connect it via NWC:
1. Install Alby Hub or NWC plugin
2. Create connection strings
3. Use your node from any app

## Setting Spending Limits

Protect yourself with limits:

| Setting | Description |
|---------|-------------|
| **Max per payment** | Largest single payment allowed |
| **Daily budget** | Maximum spend per day |
| **Monthly budget** | Maximum spend per month |
| **Expiration** | Connection auto-expires after date |

### Recommended Limits

| Use Case | Suggested Limit |
|----------|-----------------|
| Casual zapping | 500-1000 sats/day |
| Active user | 5000-10000 sats/day |
| Creator support | 20000+ sats/day |

## Managing Connections

### View Active Connections

In your wallet, see:
- Which apps are connected
- Spending per app
- Last activity
- Remaining budget

### Revoke Access

If you want to disconnect an app:
1. Open wallet settings
2. Find the app connection
3. Click "Revoke" or "Delete"
4. App can no longer request payments

## Troubleshooting

### Zaps Not Working?

1. **Check connection** — Is the connection string still valid?
2. **Check balance** — Do you have enough sats?
3. **Check limits** — Have you hit your daily limit?
4. **Check wallet** — Is your wallet online?

### Connection String Invalid?

- Make sure you copied the full string
- Check it starts with `nostr+walletconnect://`
- Try creating a new connection

### Wallet Offline?

Some wallets need to be online to process payments:
- **Alby Hub** — Must be running
- **Mobile wallets** — App should be open/backgrounded
- **Primal** — Always available

## Privacy Considerations

### What's Private

- Payment amounts (encrypted)
- Payment destinations (encrypted)
- Your wallet details

### What's Visible

- That you're using NWC (connection to relay)
- Timing of payments (metadata)

## Advanced: Multiple Connections

Create different connections for different purposes:

| Connection | Use | Limit |
|------------|-----|-------|
| Social apps | Damus, Primal | 500 sats/day |
| Music/Podcasts | Wavlake, Fountain | 2000 sats/day |
| Testing | New apps | 100 sats/day |

## NWC vs Other Methods

| Method | Convenience | Security | Setup |
|--------|-------------|----------|-------|
| **NWC** | ⭐⭐⭐ | ⭐⭐⭐ | Medium |
| Built-in wallet | ⭐⭐⭐ | ⭐⭐ | Easy |
| Manual invoices | ⭐ | ⭐⭐⭐ | None |
| Sharing credentials | ⭐⭐ | ⭐ | Easy |

## Resources

- [NWC Documentation](https://docs.nwc.dev) — Official docs
- [NWC.dev](https://nwc.dev) — Protocol info
- [Alby NWC](https://nwc.getalby.com) — Alby's implementation
- [NIP-47](https://nips.nostr.com/47) — Technical specification

## Next Steps

- [Zaps & Lightning](/using-nostr/zaps) — Understand zapping
- [Mobile Clients](/clients/mobile) — Find NWC-compatible apps
- [Resources](/help/resources) — More wallet options
