---
sidebar_position: 1
title: Posting
description: How to create and share content on Nostr
---

# Posting on Nostr

Learn how to create posts, share content, and interact on Nostr.

## Your First Post

Creating a post on Nostr is simple:

1. Open your client app
2. Find the compose button (usually a "+" or pencil icon)
3. Write your message
4. Hit "Post" or "Publish"

That's it! Your post is now being sent to relays.

## Types of Posts

### Short Notes (Kind 1)

The most common type, like tweets:
- Up to ~65,000 characters (but keep it readable!)
- Can include links, images, mentions
- Appears in feeds

### Long-Form Articles (Kind 30023)

For blog posts and articles:
- Markdown formatting
- Title and summary
- Best written in clients like Habla or Yakihonne

### Replies

Respond to other posts:
- Creates a conversation thread
- Original poster gets notified
- Visible to both audiences

### Reposts

Share someone else's post:
- Like a retweet
- Credits original author
- Spreads content to your followers

## Formatting Your Posts

### Mentions

Tag other users:
```
Hey @npub1... check this out!
```
Most clients auto-complete when you type `@`.

### Hashtags

Categorize your content:
```
Just discovered #nostr and I'm loving it! #bitcoin
```

### Links

Simply paste URLs:
```
Check out this article: https://example.com/article
```
Most clients will create a preview.

### Images

Depending on your client:
- Paste image URL
- Upload directly
- Use a media host

:::tip Image Hosting
Popular free options:
- [nostr.build](https://nostr.build)
- [void.cat](https://void.cat)
- Upload through your client
:::

## Best Practices

### Content Tips

| Do | Don't |
|----|----|
| Be authentic | Spam promotional content |
| Engage with others | Post and disappear |
| Use relevant hashtags | Overload with hashtags |
| Share valuable content | Post low-effort content |
| Credit original sources | Claim others' work |

### Building an Audience

1. **Be consistent** - Post regularly
2. **Engage** - Reply to others, not just post
3. **Add value** - Share insights, help others
4. **Join conversations** - Use #asknostr, #introductions
5. **Be patient** - Community building takes time

## Interactions

### Likes (Reactions)

Show appreciation:
- Usually a heart icon
- Can include emoji reactions
- Author gets notified

### Zaps

Send Bitcoin tips:
- More meaningful than likes
- Directly supports creators
- Amount is your choice

→ See [Zaps & Lightning](/using-nostr/zaps)

### Comments

Join the discussion:
- Reply to any post
- Thread conversations
- Build relationships

### Reposts & Quotes

Share with your followers:
- **Repost:** Share as-is
- **Quote:** Add your commentary

## Content Visibility

### Public by Default

Most posts on Nostr are public:
- Anyone can see them
- Stored on relays
- May be indexed by search engines

### Private Messages

For private content, use DMs:
→ See [Messaging](/using-nostr/messaging)

### Relay Visibility

Your posts only appear on relays you're connected to:
- More relays = wider reach
- Specialized relays for communities
- Some relays are invite-only

## Deleting Posts

### How Deletion Works

You can send a delete request:
1. Find the post
2. Look for delete option
3. Confirm deletion

**Important:** This is a *request*, not guaranteed deletion.

### Why Deletion Isn't Guaranteed

- Relays may not honor delete requests
- Other clients may have cached the content
- The nature of decentralization

:::note Design Philosophy
This is by design. Nostr prioritizes censorship resistance. Think before you post!
:::

## Scheduling and Drafts

### Drafts

Most clients support drafts:
- Save for later
- Edit before posting
- Usually stored locally

### Scheduled Posts

Some clients offer scheduling:
- Plan content ahead
- Maintain consistency
- Check client features

## Cross-Posting

### To Other Nostr Clients

No need! Your post appears everywhere:
- Post on Damus
- Visible on Primal
- Readable on any client

### To Other Platforms

Some tools help cross-post:
- Post to Nostr and Twitter
- Automation tools available
- Check community resources

## Hashtags to Know

| Hashtag | Use |
|---------|-----|
| #introductions | Introduce yourself |
| #asknostr | Ask questions |
| #nostr | General Nostr discussion |
| #grownostr | Help grow the network |
| #plebchain | Bitcoin community |

## Troubleshooting

### Post Not Appearing?

- Check relay connections
- Wait a moment and refresh
- Try different client

### Can't Upload Images?

- Check file size limits
- Try external hosting
- Verify connection

### Mentions Not Working?

- Use full npub if auto-complete fails
- Check the format
- Try different client

## Next Steps

- [Following & Discovery](/using-nostr/following)
- [Zaps & Lightning](/using-nostr/zaps)
- [Understanding Relays](/using-nostr/relays)
