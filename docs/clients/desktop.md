---
sidebar_position: 4
title: Desktop Clients
description: Nostr applications for Mac, Windows, and Linux
---

# Desktop Clients

Desktop clients offer a native experience on your computer with features optimized for larger screens.

## Native Applications

### Gossip

A privacy-focused desktop client written in Rust.

- **Platforms:** Windows, macOS, Linux
- **Download:** [GitHub](https://github.com/mikedilger/gossip/releases)
- **Cost:** Free, open source

**Features:**
- Privacy-first design
- Advanced relay management
- Follows outbox model (NIP-65)
- Local data storage
- No tracking or analytics

**Best for:** Privacy-conscious users, power users

---

### Damus (macOS)

The same great Damus experience on your Mac.

- **Platforms:** macOS
- **Download:** [App Store](https://apps.apple.com/app/damus/id1628663131)
- **Cost:** Free

**Features:**
- Native macOS design
- Syncs with iOS version
- Zaps and Lightning
- Clean interface

**Best for:** Mac users who also use Damus on iPhone

---

### Lume

A modern, customizable desktop client.

- **Platforms:** Windows, macOS, Linux
- **Download:** [lume.nu](https://lume.nu)
- **Cost:** Free

**Features:**
- Column-based layout
- Customizable workspaces
- Built for productivity
- Modern interface

**Best for:** Power users who want TweetDeck-style experience

---

## Web Apps as Desktop

You can also use web clients as desktop apps:

### Using Primal as Desktop

1. Visit [primal.net](https://primal.net)
2. In Chrome: Menu → More tools → Create shortcut
3. Check "Open as window"
4. Now you have a desktop app!

### Progressive Web Apps (PWAs)

Many web clients support PWA installation:
- Works offline (partially)
- Has its own window
- Feels like a native app

## Comparison

| App | Platform | Privacy | Features | Ease of Use |
|-----|----------|---------|----------|-------------|
| Gossip | All | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Damus | macOS | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Lume | All | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Web PWA | All | ⭐⭐ | Varies | ⭐⭐⭐ |

## Key Management on Desktop

### Option 1: Store in App

Most desktop apps store your key encrypted locally:
- Convenient
- Protected by your system login
- Key stays on your computer

### Option 2: Use a Signer

For enhanced security:

#### nsec.app
- **URL:** [nsec.app](https://nsec.app)
- Web-based key management
- Works with many clients
- Bunker protocol support

#### Browser Extension
- Alby or nos2x
- Works with web clients
- Convenient for web-based workflow

## Setting Up

### First Time Installation

1. **Download** from official source
2. **Verify** the download (if possible)
3. **Install** following system prompts
4. **Create or import** your account
5. **Configure** relays (usually automatic)

### Importing Your Account

If you have an existing Nostr account:

1. Open the application
2. Choose "Import" or "Existing Account"
3. Enter your **nsec** (private key)
4. Your profile and follows load automatically

### Security Tips

- Download only from official sources
- Keep your system updated
- Use full-disk encryption
- Back up your keys separately

## Advanced Features

### Multi-Column Layouts

Desktop clients like Lume offer:
- Multiple feeds side by side
- Custom columns for hashtags
- Notification column
- DM column

### Relay Management

Desktop clients often provide better relay tools:
- See connection status
- Monitor bandwidth
- Test relay speeds
- Manage permissions

### Data Export

Some clients let you export:
- Your posts
- Your follows
- Your messages (if stored locally)

## Which Should You Choose?

| If you want... | Choose... |
|----------------|-----------|
| Maximum privacy | Gossip |
| Familiar iOS experience | Damus (macOS) |
| Power user features | Lume |
| No installation | Web client |
| TweetDeck style | Lume |

## Tips for Desktop Users

### Keyboard Shortcuts

Most desktop clients support:
- `Ctrl/Cmd + N` - New post
- `Ctrl/Cmd + Enter` - Send post
- `Ctrl/Cmd + K` - Search

Check each app's documentation for full shortcuts.

### Notifications

Desktop notifications may require:
- System permission
- App-specific setup
- Browser permission (for web)

### Multiple Monitors

Desktop clients work great with multiple monitors:
- Keep Nostr on secondary screen
- Use columns across displays
- Monitor feeds while working

## Next Steps

- [Specialized Clients](/clients/specialized) - Other types of apps
- [Understanding Relays](/using-nostr/relays)
- [Back Up Your Keys](/account/backup-keys)
