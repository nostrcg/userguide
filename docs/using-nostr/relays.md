---
sidebar_position: 5
title: Relays
description: Understanding relays and how to use them
---

# Understanding Relays

Relays are servers that store and share Nostr content. Understanding them helps you get the most out of Nostr.

## What is a Relay?

Think of relays like:
- **Post offices** - They receive, store, and deliver messages
- **Bulletin boards** - Places where content is posted
- **Radio towers** - Broadcasting your signal

![Relay Network](/img/diagrams/relay-network.svg)

## Why Multiple Relays?

Using several relays provides:

| Benefit | Explanation |
|---------|-------------|
| **Reliability** | If one goes down, others work |
| **Reach** | Different people use different relays |
| **Speed** | Geographic distribution |
| **Privacy** | Spread your data around |
| **Features** | Some relays offer special capabilities |

## Types of Relays

### Free/Public Relays

- Open to everyone
- No cost
- May have limits
- Good for starting out

**Examples:**
- `wss://relay.damus.io`
- `wss://nos.lol`
- `wss://relay.nostr.band`

### Paid Relays

- Require payment
- Usually less spam
- Better performance
- Support relay operators

**Examples:**
- `wss://nostr.wine`
- `wss://relay.nostr.pro`

### Private Relays

- Invite only
- Community-specific
- More controlled environment

## Your Relay List

### What's in Your List

Your client maintains a list of relays:
- **Read relays** - Where you get content
- **Write relays** - Where you post content
- **Both** - Most relays do both

### Default Relays

Most clients start with sensible defaults:
```
wss://relay.damus.io
wss://nos.lol
wss://relay.nostr.band
wss://relay.primal.net
wss://purplepag.es
```

### Checking Your Relays

In your client:
1. Go to Settings
2. Find "Relays" section
3. See your connected relays

## Managing Relays

### Adding a Relay

1. Find relay settings
2. Click "Add Relay"
3. Enter the URL (starts with `wss://`)
4. Save

### Removing a Relay

1. Go to relay settings
2. Find the relay
3. Delete or disable

### When to Add Relays

- Following someone whose content you're missing
- Joining a specific community
- Wanting better performance
- Adding backup options

### When to Remove Relays

- Relay is slow or unreliable
- Too much spam
- Don't use that community anymore

## Popular Relays

### General Purpose

| Relay | Notes |
|-------|-------|
| `wss://relay.damus.io` | Popular, reliable |
| `wss://nos.lol` | Fast, well-maintained |
| `wss://relay.nostr.band` | Good search features |
| `wss://relay.primal.net` | Primal's relay |
| `wss://nostr.wine` | Paid, high quality |

### Special Purpose

| Relay | Purpose |
|-------|---------|
| `wss://purplepag.es` | Profile discovery |
| `wss://relay.nostr.bg` | Media-focused |

## How Relays Affect What You See

### Following Someone

When you follow someone:
1. Your client checks where they post
2. Adds those relays (or uses hints)
3. Fetches their content

### If You Don't See Someone's Posts

They might be on relays you're not connected to:
1. Check their profile for relay hints
2. Add their relays
3. Refresh your feed

## Relay Tips for Users

### Do's

- ✅ Use 5-10 relays for balance
- ✅ Include popular public relays
- ✅ Check relay status occasionally
- ✅ Support paid relays if you can

### Don'ts

- ❌ Use too many relays (slow)
- ❌ Use only one relay (risky)
- ❌ Ignore relay errors

## Finding New Relays

### Relay Directories

- [nostr.watch](https://nostr.watch) - Status monitoring
- [nostr.info/relays](https://nostr.info/relays/) - Relay list

### From Others

Check relay lists of people you follow in their profile.

## Privacy Considerations

### What Relays Know

Relays can see:
- Your IP address
- Your posts
- Who you follow (via REQ patterns)
- When you're online

### Privacy Tips

- Use multiple relays (spread data)
- Consider VPN for IP privacy
- Some relays offer better privacy

## Troubleshooting

### Relay Connection Issues

| Problem | Try |
|---------|-----|
| Won't connect | Check URL is correct |
| Keeps disconnecting | Internet may be unstable |
| Very slow | Remove slow relays |
| Missing content | Add more relays |

### Common Errors

- **Connection refused** - Relay might be down
- **Rate limited** - Slow down or try later
- **Not found** - Check the URL

## Advanced: NIP-65

NIP-65 is how your relay list is published:

Your client publishes a "kind 10002" event listing your relays. This helps others find you.

You don't need to manage this manually - clients handle it.

## Running Your Own Relay

For advanced users:

If you want to run your own relay, check the [Developer Guide](https://nostrcg.github.io/devguide/relays/overview).

Benefits:
- Complete control
- Guaranteed availability
- Support the network

## Next Steps

- [Profile Setup](/account/profile-setup)
- [Troubleshooting](/help/troubleshooting)
- [FAQ](/help/faq)
