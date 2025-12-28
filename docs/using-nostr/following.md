---
sidebar_position: 2
title: Following
description: Discover and follow users on Nostr
---

# Following & Discovery

Find interesting people and curate your Nostr experience.

## How Following Works

When you follow someone:
- Their posts appear in your feed
- Your client fetches their content from relays
- They may get notified (depends on client)
- Your follow list is public (stored on relays)

```
You → Follow → Alice
              ↓
Your Client ← Fetches posts ← Relays storing Alice's content
```

## Finding People to Follow

### In-App Discovery

Most clients offer:
- **Suggested users** - Popular accounts
- **Global feed** - All public posts
- **Trending** - Popular content
- **Who to follow** - Recommendations

### Search

Find specific people:
- Search by name
- Search by npub (public key)
- Search by NIP-05 (verified address)

Example searches:
```
jack                    (name)
npub1sg6plzptd64u62a878...  (public key)
jack@cash.app           (NIP-05)
```

### Hashtags

Discover through topics:
- Browse hashtag feeds
- Follow people posting about interests
- Use #introductions to find new users

### Cross-Following

See who others follow:
1. Visit someone's profile
2. Look for "Following" section
3. Browse their follows
4. Follow interesting accounts

## Follow Lists

### Your Main Follow List

Your primary list of people you follow:
- Appears in your home feed
- Synced across clients
- Public on relays

### Managing Follows

Most clients let you:
- View all follows in one place
- Unfollow easily
- See follower/following counts

### Importing Follows

If you're new or switching clients:
1. Log in with your nsec
2. Your follows load automatically
3. May take a moment to sync

## Feed Curation

### Home Feed

Shows posts from people you follow:
- Most recent posts
- Algorithm-free (usually)
- Your curated experience

### Other Feeds

| Feed Type | Shows |
|-----------|-------|
| Global | All public posts |
| Trending | Popular content |
| Hashtag | Posts with specific tag |
| Media | Posts with images/video |

### Tips for a Great Feed

1. **Follow quality over quantity** - Better content
2. **Mute accounts you don't like** - Clean up feed
3. **Use hashtag feeds** - Topic discovery
4. **Try different clients** - Different feed algorithms

## Followers

### Getting Followers

Grow your audience:
- Post interesting content
- Engage with others
- Use the #introductions hashtag
- Be authentic and consistent

### Follower Visibility

- Your follower count is public
- Some clients show who follows you
- Follower lists are on relays

## Muting & Blocking

### Muting

Hide content from specific users:
- They won't know
- Their posts disappear from your feed
- You can unmute anytime

### Blocking

Stronger action:
- Blocks direct messages
- May hide all content
- Client-specific implementation

:::note
Muting/blocking is handled by your client, not enforced network-wide. Others may still see the content.
:::

## Lists (Advanced)

Some clients support custom lists:

### Types of Lists

- **Mute lists** - People to ignore
- **Follow lists** - Custom groups
- **Topic lists** - Curated feeds

### Creating Lists

1. Look for "Lists" in your client
2. Create new list
3. Add users
4. Use list as a feed

## Relay Strategy for Following

### How Relays Affect Following

You only see posts from relays you're connected to:

```
You ← Relay A ← Alice (seen)
You    ----    Bob on Relay B (not seen)
```

### Tips

- Use common relays to see more people
- Check if followed accounts list their relays
- Add relays where your follows post

→ See [Understanding Relays](/using-nostr/relays)

## Following Etiquette

### Do's

- ✅ Follow people whose content you enjoy
- ✅ Engage with people you follow
- ✅ Give new follows a chance
- ✅ Curate your experience

### Don'ts

- ❌ Follow just to get follow-backs
- ❌ Spam follow hundreds at once
- ❌ Expect everyone to follow back
- ❌ Unfollow immediately if not followed

## Tools for Discovery

### nostr.band

- [nostr.band](https://nostr.band)
- Search for users
- See trending accounts
- Explore topics

### Nostr Apps Directory

- [nostrapps.com](https://nostrapps.com)
- Find apps
- Discover features

### Community Resources

- Ask in #asknostr
- Check community lists
- Look at who others follow

## Syncing Across Clients

Your follow list syncs automatically:
1. Follow someone on Damus
2. Open Primal
3. They're in your feed!

This works because follow lists are stored on relays, not in apps.

## Next Steps

- [Messaging](/using-nostr/messaging) - Direct communication
- [Zaps & Lightning](/using-nostr/zaps) - Support creators
- [Understanding Relays](/using-nostr/relays)
