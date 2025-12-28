---
sidebar_position: 1
title: Profile Setup
description: Setting up your Nostr profile
---

# Setting Up Your Profile

Your profile is how others see you on Nostr. A complete profile helps people find and connect with you.

## Profile Components

| Field | Purpose | Required? |
|-------|---------|-----------|
| Name | Display name | Recommended |
| Username | @handle (name) | Recommended |
| Picture | Profile photo | Recommended |
| Banner | Header image | Optional |
| Bio | About you | Recommended |
| Website | Your link | Optional |
| Lightning Address | Receive zaps | Recommended |
| NIP-05 | Verification | Optional |

## Step-by-Step Setup

### 1. Access Profile Settings

In your client:
- Look for your profile icon
- Find "Edit Profile" or settings icon
- Open profile editor

### 2. Add a Display Name

Your main name shown on posts:
- Can be your real name
- Can be a nickname
- Can include emoji
- Example: "Alice", "Satoshi", "🚀 Space Fan"

### 3. Set a Username

Your @handle:
- Lowercase letters and numbers
- Used for mentions
- Example: "alice", "satoshi21"

### 4. Upload Profile Picture

A good profile picture:
- Square format works best
- Clear and recognizable
- Under 1MB typically

**Hosting options:**
- Upload through client
- Use [nostr.build](https://nostr.build)
- Use any image URL

### 5. Add a Banner (Optional)

The header image on your profile:
- Wide format (3:1 ratio common)
- Shows personality
- Not essential

### 6. Write Your Bio

Tell people about yourself:
- Keep it brief
- Mention interests
- Add personality
- 160-300 characters is good

**Example:**
```
Building things on Nostr. Coffee enthusiast.
Helping newbies get started. #bitcoin #nostr
```

### 7. Add Website

Link to your:
- Personal website
- Blog
- Other social media
- Portfolio

### 8. Add Lightning Address

So people can zap you:
- Format: `name@wallet.com`
- Get from your wallet provider
- Essential for receiving tips

→ See [Zaps & Lightning](/using-nostr/zaps) for setup

### 9. Add NIP-05 Verification (Optional)

Adds a checkmark/verification:
- Format: `name@domain.com`
- Requires domain ownership
- Builds trust

→ See [Verification](/account/verification)

## Profile Tips

### Do's

- ✅ Use a recognizable profile picture
- ✅ Fill in the essentials
- ✅ Add a Lightning address
- ✅ Keep bio updated
- ✅ Be authentic

### Don'ts

- ❌ Leave it completely blank
- ❌ Use offensive content
- ❌ Impersonate others
- ❌ Forget to save!

## Profile Visibility

### Public Information

Everything in your profile is public:
- Visible to anyone
- Stored on relays
- Searchable

### Privacy Considerations

If you want privacy:
- Use a pseudonym
- Don't include personal details
- Use anonymous avatar
- Skip location info

## Syncing Across Clients

Your profile syncs everywhere:

```
Edit on Damus → Saved to Relays → Visible on Primal, Amethyst, etc.
```

Changes may take a moment to propagate.

## Troubleshooting

### Changes Not Saving?

1. Check internet connection
2. Verify relay connections
3. Try saving again
4. Restart the app

### Picture Not Uploading?

1. Check file size (try smaller)
2. Try different format (JPG, PNG)
3. Use external host
4. Paste direct URL

### Profile Blank in Other Clients?

1. Give it time to sync
2. Check relay overlap
3. Try refreshing

## Example Profiles

### Minimal but Effective

```
Name: Alice
Picture: [friendly photo]
Bio: Exploring Nostr. Bitcoin curious.
Lightning: alice@getalby.com
```

### Complete Profile

```
Name: Alice Anderson
Username: alice
Picture: [professional photo]
Banner: [branded image]
Bio: Nostr educator | Bitcoin enthusiast | Building the future
     of social media. Ask me anything about getting started!
Website: https://alice.example.com
Lightning: alice@getalby.com
NIP-05: alice@example.com
```

## Updating Your Profile

### When to Update

- Changed interests
- New Lightning address
- Want a new look
- Added verification

### How to Update

Same process as setup:
1. Go to profile settings
2. Make changes
3. Save

## Next Steps

- [Verification](/account/verification) - Get verified
- [Backup Your Keys](/account/backup-keys) - Essential security
- [Zaps & Lightning](/using-nostr/zaps) - Set up payments
