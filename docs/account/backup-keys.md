---
sidebar_position: 3
title: Backup Your Keys
description: How to safely backup your Nostr private key
---

# Backup Your Keys

Your private key (nsec) is your identity. Losing it means losing your account forever. Here's how to back it up safely.

## Why Backup Matters

:::danger No Recovery Option
Unlike traditional social media:
- No "forgot password" option
- No customer support to help
- No email reset
- If lost, it's lost forever
:::

With proper backup:
- ✅ Access from any device
- ✅ Recover if phone is lost
- ✅ Import into new clients
- ✅ Peace of mind

## Your Private Key

### What It Looks Like

```
nsec1abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567...
```

- Starts with `nsec1`
- 63 characters long
- Mix of letters and numbers

### Where to Find It

1. Open your Nostr client
2. Go to Settings or Profile
3. Look for "Keys", "Account", or "Security"
4. Find and reveal your nsec

:::warning Handle With Care
- Don't display it in public
- Don't screenshot if possible
- Copy/paste carefully
- Close the screen when done
:::

## Backup Methods

### Method 1: Paper Backup (Recommended)

The safest long-term storage:

1. **Write it down** on paper
2. **Double-check** every character
3. **Store safely** - fireproof safe, safety deposit box
4. **Make a second copy** in different location

**Tips:**
- Use pen, not pencil (fades)
- Write clearly
- Include today's date
- Note what it's for

### Method 2: Password Manager

Secure digital storage:

**Good options:**
- Bitwarden
- 1Password
- KeePass

**Steps:**
1. Open your password manager
2. Create new secure note
3. Add your nsec
4. Label it clearly
5. Sync across devices

### Method 3: Encrypted File

For tech-savvy users:

1. Create a text file with your nsec
2. Encrypt with strong password (GPG, VeraCrypt)
3. Store encrypted file in multiple locations
4. Remember the encryption password!

### Method 4: Seed Phrase (Advanced)

Some tools convert nsec to seed words:
- 12 or 24 word phrase
- Easier to write down
- More error-resistant
- Use trusted tools only

## Storage Locations

### Good Places

| Location | Pros | Cons |
|----------|------|------|
| Home safe | Physical security | Fire/theft risk |
| Safety deposit box | Very secure | Less accessible |
| Password manager | Convenient | Requires master password |
| With trusted family | Distributed | Trust required |

### Avoid These

- ❌ Plain text on computer
- ❌ Email to yourself
- ❌ Cloud notes (Google Keep, etc.)
- ❌ Screenshots in photo library
- ❌ Browser saved passwords
- ❌ Sticky notes

## Testing Your Backup

### Verify It Works

1. **Open a different client** or device
2. **Import your nsec** from your backup
3. **Confirm** your profile loads correctly
4. **Log out** of the test device

Don't skip this step! You don't want to discover a typo when you actually need it.

## Security Best Practices

### Do's

- ✅ Make multiple backups
- ✅ Store in different locations
- ✅ Test your backup
- ✅ Update if you create new key
- ✅ Tell trusted person where backup is

### Don'ts

- ❌ Store only on one device
- ❌ Share with strangers
- ❌ Enter on suspicious websites
- ❌ Post anywhere online
- ❌ Store unencrypted digitally

## If You Haven't Backed Up Yet

Do it now! Here's the quick version:

1. Open your Nostr app
2. Find your nsec in settings
3. Write it on paper
4. Store paper safely
5. Test by importing elsewhere

## What If You Lose Your Key?

If you lose your nsec with no backup:

1. **Create a new account** - new keys
2. **Post about the change** - let followers know
3. **Update your profiles** - website, etc.
4. **Accept the loss** - old posts stay, but you can't manage them

Learn from it: Always backup your new key!

## Backup Checklist

- [ ] Found my nsec in app settings
- [ ] Written on paper (carefully!)
- [ ] Stored paper in safe location
- [ ] Made second copy in different location
- [ ] Tested by importing to another client
- [ ] Told trusted person where backup is

## Using Signers (Alternative)

Instead of backing up nsec directly, consider a signer:

### What's a Signer?

An app that holds your key and signs on your behalf:
- Key stays in one secure place
- Apps never see your actual key
- More secure day-to-day

### Popular Signers

| Platform | Signer |
|----------|--------|
| Browser | Alby, nos2x |
| Android | Amber |
| Web | nsec.app |

**You still need to backup the signer's key!**

## Advanced: Multiple Keys

Some users have multiple identities:
- Main identity
- Anonymous identity
- Work identity

**Backup each key separately** with clear labels.

## Summary

| Priority | Action |
|----------|--------|
| 🔴 Critical | Write nsec on paper |
| 🔴 Critical | Store paper safely |
| 🟠 Important | Make second backup |
| 🟠 Important | Test your backup |
| 🟢 Good | Consider signer app |

## Next Steps

- [Multiple Clients](/account/multiple-clients) - Use your backup
- [Your Identity](/getting-started/your-identity) - Understand keys
- [Verification](/account/verification) - Add trust layer
