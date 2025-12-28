---
sidebar_position: 4
title: Zaps & Lightning
description: Sending and receiving Bitcoin tips on Nostr
---

# Zaps & Lightning

Zaps are instant Bitcoin tips sent over the Lightning Network. They're one of Nostr's most unique features.

## What are Zaps?

Zaps let you:
- **Tip content creators** directly
- **Show appreciation** more meaningfully than likes
- **Get paid** for your content
- **Send any amount** - from 1 sat to millions

```
You ──Zap (21 sats)──▶ Creator
    └── Instant! ──┘
```

## How Zaps Work

![How Zaps Work](/img/diagrams/zap-flow.svg)

1. You click the zap button on a post
2. Choose an amount
3. Your wallet pays via Lightning Network
4. Creator receives sats instantly
5. The zap appears on the post

## Setting Up to Receive Zaps

### Step 1: Get a Lightning Address

A Lightning address looks like an email:
```
yourname@wallet.com
```

Popular options:

| Wallet | Address Format | Notes |
|--------|---------------|-------|
| [Wallet of Satoshi](https://www.walletofsatoshi.com) | you@walletofsatoshi.com | Easy, custodial |
| [Alby](https://getalby.com) | you@getalby.com | Browser extension |
| [Primal](https://primal.net) | you@primal.net | Built into app |
| [Zeus](https://zeusln.app) | Self-hosted | Non-custodial |

### Step 2: Add to Profile

1. Open your Nostr client
2. Go to profile settings
3. Find "Lightning Address" or "LN Address"
4. Paste your address
5. Save!

### Step 3: Start Receiving

That's it! Anyone can now zap you.

## Setting Up to Send Zaps

### Option 1: Wallet Connection

Some clients connect to wallets:
- **Alby** - Browser extension
- **Zeus** - Mobile wallet
- **Built-in** - Primal has integrated wallet

### Option 2: External Wallet

1. Click zap button
2. Client generates invoice
3. Copy to your wallet
4. Pay the invoice

### Option 3: Built-in Wallet

Apps like Primal have built-in wallets:
1. Fund your wallet
2. Zap directly
3. No external app needed

## Zap Amounts

### Common Amounts

| Sats | USD (approx*) | Used For |
|------|---------------|----------|
| 21 | $0.02 | Quick appreciation |
| 100 | $0.10 | Nice tip |
| 500 | $0.50 | Great content |
| 1,000 | $1.00 | Really loved it |
| 10,000 | $10.00 | Exceptional |
| 21,000+ | $21.00+ | Generous support |

*USD values vary with Bitcoin price

### Custom Amounts

Most clients let you choose any amount.

## Zap Splits

Some posts split zaps between multiple people:
- Collaborators
- Platforms
- Charities

The creator sets up splits in their client.

## Visibility

### Public Zaps

- Appear on the post
- Show amount and sender
- Part of the social experience

### Private Zaps

Some clients support private zaps:
- Amount hidden
- Sender anonymous
- Still reaches creator

## Popular Wallets

### Custodial (Easy)

Someone else holds your Bitcoin:

- **Wallet of Satoshi** - Simplest option
- **Primal** - Built into the app
- **Alby** - Browser-based

### Non-Custodial (You control)

You hold your own Bitcoin:

- **Zeus** - Mobile, full control
- **Breez** - Easy Lightning
- **Phoenix** - Self-custodial Lightning

### Choosing a Wallet

| If you want... | Choose... |
|----------------|-----------|
| Easiest setup | Wallet of Satoshi |
| Built into Nostr | Primal |
| Browser integration | Alby |
| Full control | Zeus or Phoenix |

## Buying Bitcoin

To send zaps, you need Bitcoin/sats:

1. **In-app purchase** - Some wallets let you buy
2. **Exchange** - Buy on Coinbase, Cash App, etc.
3. **P2P** - Buy from individuals
4. **Earn** - Receive zaps for your content!

## Zap Etiquette

### Do's

- ✅ Zap content you genuinely appreciate
- ✅ Any amount is meaningful
- ✅ Zap new creators to encourage them
- ✅ Reply with zaps to show support

### Don'ts

- ❌ Expect zaps back
- ❌ Only zap for follow-backs
- ❌ Feel obligated to zap everything

## Troubleshooting

### Zaps Not Working?

1. **Check Lightning address** - Is it set in your profile?
2. **Wallet balance** - Do you have sats?
3. **Connection** - Is wallet connected?
4. **Invoice expired** - Try again quickly

### Not Receiving Zaps?

1. **Verify Lightning address** - Test sending to yourself
2. **Check profile** - Is address saved correctly?
3. **Wallet active** - Is your wallet receiving?

### Common Issues

| Issue | Solution |
|-------|----------|
| Invoice expired | Pay faster or request new |
| Wallet not connected | Reconnect in settings |
| Wrong address | Double-check in profile |
| No balance | Fund your wallet |

## Beyond Tips

### Paywalls

Some creators gate content behind zaps:
- Pay to unlock
- Supports premium content
- Built into some clients

### Marketplace Payments

Zaps work for buying/selling:
- Pay for goods
- Instant settlement
- No payment processor

### Streaming Tips

Live streamers receive zaps:
- Real-time support
- Interactive streaming
- On Zap.stream

## Why Zaps Matter

### For Creators

- Direct monetization
- No platform cut (usually)
- Global payments
- Instant settlement

### For Users

- Meaningful engagement
- Direct support to creators
- Better than ads
- Fun to participate!

## Next Steps

- [Wallet Connect (NWC)](/using-nostr/wallet-connect) - One-click zaps from any app
- [Understanding Relays](/using-nostr/relays)
- [Profile Setup](/account/profile-setup) - Add your Lightning address
- [FAQ](/help/faq)
