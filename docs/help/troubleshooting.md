---
sidebar_position: 2
title: Troubleshooting
description: Solving common Nostr issues
---

# Troubleshooting

Having issues? Here are solutions to common problems.

## Connection Issues

### "Can't connect to relay"

**Symptoms:** Error messages about relay connections, posts not loading.

**Solutions:**
1. **Check internet connection** - Try loading other websites
2. **Wait and retry** - Relays sometimes have temporary issues
3. **Remove problematic relay** - In settings, remove the failing relay
4. **Check relay URL** - Make sure it starts with `wss://`

### "Relay refused connection"

**Possible causes:**
- Relay is down for maintenance
- You're rate-limited (too many requests)
- Relay requires authentication or payment

**Solutions:**
1. Wait and try again later
2. Try a different relay
3. Check if relay requires signup

### App is very slow

**Solutions:**
1. **Reduce relays** - Too many relays slow things down
2. **Clear cache** - Look in app settings
3. **Check internet speed** - Test your connection
4. **Try different client** - Some are faster than others
5. **Disable media auto-load** - If available in settings

---

## Account Issues

### Can't log in with private key

**Check:**
1. Using **nsec** (not npub) - must start with `nsec1`
2. No extra spaces before/after
3. Complete key (63 characters after nsec1)
4. Correct app (is it a real Nostr app?)

### Profile not loading

**Solutions:**
1. Wait for relay sync (can take a minute)
2. Refresh or pull-to-refresh
3. Check relay connections
4. Verify using correct key

### Lost my private key

**Unfortunately:** There's no recovery. You'll need to create a new account.

**For next time:** Back up immediately after creating account.
→ See [Backup Your Keys](/account/backup-keys)

### Profile shows on some apps but not others

**Cause:** Different apps may use different relays.

**Solution:**
1. Ensure both apps are connected to common relays
2. Re-publish your profile (edit and save in working app)
3. Wait for sync

---

## Content Issues

### Posts not appearing

**After posting:**
1. Wait a moment (not instant)
2. Pull to refresh
3. Check relay connections
4. Try posting from different client

**Your posts invisible to others:**
1. Check you're connected to public relays
2. Verify posts are actually being sent (check relay logs if technical)
3. Ask someone to check specific relays

### Can't see someone's posts

**Solutions:**
1. **Check relay overlap** - You need common relays
2. **Add their relays** - Look at their profile for relay hints
3. **Search by npub** - Directly search for their public key
4. **They may have blocked you** - Check with mutual friends

### Missing direct messages

**Possible causes:**
- DMs take time to sync
- On different relays
- Client-specific issues

**Solutions:**
1. Wait for sync
2. Check DM inbox (not filtered/requests)
3. Ensure connected to common relays
4. Try different client

### Old posts disappeared

**Possible causes:**
- Relay deleted old data
- Relay went offline
- Client cache cleared

**Notes:** This is normal in a decentralized system. Important posts should be on multiple relays.

---

## Zap Issues

### Can't send zaps

**Check:**
1. **Wallet connected?** - Check app settings
2. **Balance?** - Ensure you have sats
3. **Lightning address valid?** - Check recipient's profile
4. **Invoice expired?** - Try again quickly

### Not receiving zaps

**Check:**
1. **Lightning address in profile?** - Must be set
2. **Address working?** - Test by sending to yourself
3. **Wallet active?** - Some require app open

### Zaps showing as failed

**Common causes:**
- Network timeout
- Recipient's node offline
- Route not found

**Solutions:**
1. Try again
2. Try smaller amount
3. Check if recipient's wallet is active

---

## Media Issues

### Can't upload images

**Solutions:**
1. **Check file size** - Most have limits (1-5MB typical)
2. **Try different format** - JPG usually works
3. **Use external host** - [nostr.build](https://nostr.build)
4. **Check permissions** - App may need camera/gallery access

### Images not loading

**Solutions:**
1. Check internet connection
2. Image host may be down
3. Enable image loading in settings
4. Try different client

### Profile picture not updating

**Solutions:**
1. Clear cache
2. Wait for propagation
3. Re-save profile
4. Try different image host

---

## Verification Issues

### NIP-05 not showing

**Check:**
1. Correct format: `name@domain.com`
2. JSON file accessible
3. CORS headers configured
4. Public key matches

**Test:** Visit `https://yourdomain.com/.well-known/nostr.json?name=yourname`

### NIP-05 says invalid

**Common issues:**
1. JSON syntax error
2. Wrong public key format (should be hex, not npub)
3. Server not responding
4. CORS blocking requests

---

## Client-Specific Issues

### Damus (iOS)

| Issue | Solution |
|-------|----------|
| Notifications not working | Check Settings → Notifications → Damus |
| Posts duplicating | Clear cache, update app |
| Crash on open | Reinstall, restore from nsec |

### Amethyst (Android)

| Issue | Solution |
|-------|----------|
| Battery drain | Reduce relays, disable background refresh |
| Slow loading | Clear cache in settings |
| No notifications | Check Android notification settings |

### Primal (Web)

| Issue | Solution |
|-------|----------|
| Doesn't load | Try different browser, clear cache |
| Extension not working | Reinstall extension, check permissions |
| Slow | Try at different time, cache warming |

---

## When All Else Fails

### General Reset Steps

1. **Clear app cache** (if option exists)
2. **Force close and reopen** app
3. **Log out and log back in** (with your nsec!)
4. **Try a different client** to isolate the issue
5. **Check relay status** at [nostr.watch](https://nostr.watch)

### Get Help

1. **#asknostr hashtag** - Community support
2. **App's GitHub** - File an issue
3. **Nostr communities** - Many helpful groups

### Reporting Bugs

When reporting issues, include:
- Client name and version
- Device and OS
- Steps to reproduce
- Error messages (if any)
- What you expected vs what happened

---

## Prevention Tips

### Avoid Future Issues

1. **Back up your keys** - Can't stress this enough
2. **Use reputable clients** - Stick to well-known apps
3. **Keep apps updated** - Bugs get fixed
4. **Use moderate relay count** - 5-10 is usually good
5. **Don't ignore errors** - They often indicate real problems

## Next Steps

- [FAQ](/help/faq) - More answers
- [Glossary](/help/glossary) - Understand terms
- [Resources](/help/resources) - More help
