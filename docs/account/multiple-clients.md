---
sidebar_position: 4
title: Multiple Clients
description: Using your Nostr account across multiple apps
---

# Using Multiple Clients

One of Nostr's best features is using the same account across different apps. Here's how.

## How It Works

Your Nostr identity is your **key pair**, not an account on a server:

```
         ┌──────────────────────────┐
         │      Your Keys          │
         │  (Public + Private)     │
         └───────────┬──────────────┘
                     │
     ┌───────────────┼───────────────┐
     ▼               ▼               ▼
┌─────────┐    ┌─────────┐    ┌─────────┐
│  Damus  │    │  Primal │    │ Amethyst│
│  (iOS)  │    │  (Web)  │    │(Android)│
└─────────┘    └─────────┘    └─────────┘
     │               │               │
     └───────────────┴───────────────┘
                     │
              Same followers,
              Same posts,
              Same identity!
```

## Adding a New Client

### Step 1: Get Your Private Key

From your current client:
1. Open Settings
2. Find "Keys" or "Account"
3. Reveal/copy your nsec

### Step 2: Open New Client

Download or visit the new client.

### Step 3: Log In

1. Choose "I have an account" or "Login"
2. Paste your nsec (private key)
3. Wait for your profile to load

### Step 4: Done!

Your profile, follows, and posts are all there.

## What Syncs Automatically

| Syncs Across Clients | Doesn't Sync |
|---------------------|--------------|
| Profile info | App settings |
| Followers/Following | Notification preferences |
| Posts | Drafts |
| Likes/Reactions | UI customizations |
| DMs | Cache/offline data |
| Zaps | Wallet connections |

## Common Client Combinations

### Mobile + Web

```
Phone: Damus or Amethyst
Web: Primal or Snort
```
Use mobile for on-the-go, web at desk.

### General + Specialized

```
Main: Primal
Articles: Habla
Photos: Olas
Chat: 0xchat
```
Different apps for different content types.

### Multi-Platform

```
iPhone: Damus
Android tablet: Amethyst
Computer: Primal web
```
Same account everywhere.

## Using Signers (Safer Method)

Instead of pasting your nsec everywhere, use a signer:

### How Signers Work

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Signer    │────▶│   Relay     │
│  (Primal)   │ ask │  (Has Key)  │sign │  (Server)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

1. Client asks to sign something
2. Signer shows you what it's signing
3. You approve
4. Signer signs without exposing key

### Benefits

- ✅ Never paste nsec into apps
- ✅ Review what you're signing
- ✅ Key stays in one secure place
- ✅ Easy to revoke app access

### Popular Signers

| Platform | Signer | Notes |
|----------|--------|-------|
| Browser | [Alby](https://getalby.com) | Also a wallet |
| Browser | [nos2x](https://github.com/fiatjaf/nos2x) | Simple, focused |
| Android | [Amber](https://github.com/greenart7c3/Amber) | Mobile signing |
| Web | [nsec.app](https://nsec.app) | Web-based |

### Setting Up a Signer

#### Browser Extension (nos2x/Alby)

1. Install extension
2. Add your private key to extension
3. Visit web client
4. Click "Login with extension"
5. Approve connection

#### Mobile (Amber)

1. Install Amber
2. Import your nsec
3. When apps ask to sign, Amber handles it

## Switching Between Clients

### Same Device

Just open the other app! Your identity is already there.

### Different Devices

Log in with your nsec or connect your signer.

## Syncing Issues

### Profile Not Showing?

1. Wait a moment - relays need time
2. Pull to refresh
3. Check relay connections
4. Both clients on same relays?

### Missing Follows?

1. Check if relays synced
2. Follow list takes time to sync
3. Try refreshing the list

### DMs Not Visible?

1. DMs are encrypted per-key
2. Should sync if same key
3. May take time to load

## Security Considerations

### When Using Multiple Clients

- ✅ Only use trusted clients
- ✅ Verify official sources
- ✅ Keep apps updated
- ✅ Consider using a signer

### Revoking Access

With raw nsec: You can't revoke access (key is known).

With signer: You can stop approving requests from specific apps.

## Tips for Multiple Clients

### Do's

- ✅ Use a signer when possible
- ✅ Keep one "main" client
- ✅ Try different clients for their strengths
- ✅ Keep clients updated

### Don'ts

- ❌ Use sketchy clients
- ❌ Log in on public computers
- ❌ Enter nsec on unfamiliar sites
- ❌ Forget which clients have your key

## Example Workflows

### The Casual User

```
Primary: Damus (iPhone)
Secondary: Primal web (occasionally)
```

### The Power User

```
Desktop: Gossip (privacy-focused)
Mobile: Amethyst (features)
Writing: Habla (articles)
Signer: Amber (security)
```

### The Creator

```
Posting: Primal (clean interface)
Streaming: Zap.stream
Articles: Habla
Photos: Olas
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Can't log in | Check nsec is correct |
| Profile blank | Wait for sync, check relays |
| Different followers | Force refresh follow list |
| DMs missing | Takes time to decrypt/load |
| Posts not appearing | Check relay connections |

## Next Steps

- [Backup Your Keys](/account/backup-keys) - Essential
- [Profile Setup](/account/profile-setup) - Optimize your profile
- [Clients Overview](/clients/overview) - Find more clients
