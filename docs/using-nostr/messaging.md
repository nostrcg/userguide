---
sidebar_position: 3
title: Messaging
description: Private and direct messaging on Nostr
---

# Direct Messaging

Nostr supports private messaging between users. Here's how it works and how to use it securely.

## How DMs Work

Direct messages on Nostr are:
- **Encrypted** - Only sender and recipient can read
- **Stored on relays** - Like other events
- **Linked to your identity** - Uses your keys

```
┌─────────┐     Encrypted     ┌─────────┐
│   You   │ ────────────────▶ │ Relays  │
│ (send)  │                   │ (store) │
└─────────┘                   └────┬────┘
                                   │
                              Encrypted
                                   │
                                   ▼
                             ┌─────────┐
                             │ Friend  │
                             │(receive)│
                             └─────────┘
```

## Encryption Versions

### NIP-04 (Legacy)

The original DM encryption:
- Widely supported
- Has known limitations
- Being phased out

### NIP-44 (Modern)

The newer, more secure version:
- Stronger encryption
- Better privacy
- Not all clients support yet

:::tip Check Your Client
Look for "NIP-44" or "Encrypted DMs" in your client's features to know which version it uses.
:::

## Sending Messages

### Basic Steps

1. Open someone's profile
2. Look for the message/DM icon
3. Write your message
4. Send!

### In Different Clients

| Client | How to DM |
|--------|-----------|
| Damus | Profile → Message icon |
| Primal | Profile → Message |
| Amethyst | Profile → Message |
| 0xchat | Built for messaging |

## Reading Messages

### Inbox

Most clients have a messages section:
- Look for envelope or chat icon
- May show unread count
- Organized by conversation

### Notifications

Get notified of new messages:
- Push notifications (mobile)
- In-app badges
- Depends on client settings

## Group Messaging

### Encrypted Groups

Some clients support group DMs:
- Multiple participants
- Encrypted for all members
- Features vary by client

### 0xchat

Specialized for messaging:
- Group chats
- Voice messages
- Media sharing
- Mobile-first design

## Privacy Considerations

### What's Encrypted

✅ Message content
✅ Media in messages (usually)

### What's Visible

⚠️ That you messaged someone (metadata)
⚠️ When you messaged (timestamp)
⚠️ Size of messages

### Metadata Privacy

Even though content is encrypted:
- Relays know who's talking to whom
- Timestamps are visible
- This is a trade-off for decentralization

## Security Tips

### Do's

- ✅ Verify who you're messaging (check npub)
- ✅ Use clients that support NIP-44
- ✅ Be cautious with sensitive info
- ✅ Use specialized messaging apps for more privacy

### Don'ts

- ❌ Send sensitive credentials via DM
- ❌ Trust unverified contacts
- ❌ Assume total anonymity

## Message Requests

### From Unknown Contacts

Some clients filter messages from:
- People you don't follow
- New accounts
- Potential spam

### Managing Requests

Look for:
- Message requests folder
- Filter settings
- Spam controls

## Troubleshooting

### Messages Not Sending?

1. Check relay connections
2. Verify recipient's npub
3. Try refreshing
4. Check internet connection

### Not Receiving Messages?

1. Check your DM inbox
2. Look in requests/filtered
3. Verify relay settings
4. Other person might be on different relays

### Can't Read Old Messages?

If you've lost access to old messages:
- Encryption keys may have changed
- Relay may have deleted old data
- Try other relays

## Specialized Messaging Clients

### 0xchat

- **Best for:** Messaging-focused experience
- **Features:** Groups, voice, media
- **Platform:** Mobile

### Blowater

- **Best for:** Clean chat interface
- **Features:** Focused on conversation
- **Platform:** Web/Desktop

## DMs vs. Other Communication

| Feature | Nostr DM | Signal | Email |
|---------|----------|--------|-------|
| Encrypted | ✅ | ✅ | ❌* |
| Decentralized | ✅ | ❌ | ❌ |
| Linked to identity | ✅ | Phone # | Email |
| Metadata protection | ⚠️ | ✅ | ❌ |

*Unless using PGP

## Best Practices

### For Casual Chat

- Use any Nostr client
- Standard DM features work well
- Enjoy the convenience

### For Sensitive Communication

- Use NIP-44 compatible clients
- Consider specialized messaging apps
- Be aware of metadata limitations
- For very sensitive: use Signal, etc.

## Future Improvements

The Nostr community is working on:
- Better group messaging
- Improved privacy
- Voice and video
- Better relay privacy

## Next Steps

- [Zaps & Lightning](/using-nostr/zaps) - Send payments
- [Understanding Relays](/using-nostr/relays)
- [FAQ](/help/faq)
