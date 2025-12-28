---
sidebar_position: 2
title: Verification
description: NIP-05 identity verification on Nostr
---

# Verification (NIP-05)

NIP-05 verification links your Nostr identity to a domain name, adding credibility to your profile.

## What is NIP-05?

NIP-05 is a verification standard that:
- Links your Nostr key to a domain
- Shows as `name@domain.com` on your profile
- Helps others verify it's really you
- Many clients show a checkmark or badge

```
Your Profile                  Domain Server
    │                             │
    │  alice@example.com          │
    └─────────────────────────────┘
              ↓
      Clients can verify:
      "Yes, example.com confirms
       this is the real alice"
```

## What It Looks Like

| Without NIP-05 | With NIP-05 |
|----------------|-------------|
| Alice | Alice ✓ |
| npub1abc... | alice@example.com |

## How It Works

1. You claim `alice@example.com` in your profile
2. Your client checks `example.com/.well-known/nostr.json`
3. The server returns your public key
4. If it matches, you're verified!

## Getting Verified

### Option 1: Free Services

Several services offer free NIP-05:

| Service | Format | Notes |
|---------|--------|-------|
| [nostrcheck.me](https://nostrcheck.me) | you@nostrcheck.me | Free |
| [nostrplebs.com](https://nostrplebs.com) | you@nostrplebs.com | Donation-based |
| [verified-nostr.com](https://verified-nostr.com) | you@verified-nostr.com | Free |

**Steps:**
1. Visit the service
2. Connect your Nostr account
3. Choose your username
4. Add the address to your profile

### Option 2: Your Own Domain

If you own a domain:

**Step 1:** Create the file
```
/.well-known/nostr.json
```

**Step 2:** Add your info
```json
{
  "names": {
    "alice": "your-public-key-in-hex"
  }
}
```

**Step 3:** Configure your web server
- Serve with `Content-Type: application/json`
- Allow CORS: `Access-Control-Allow-Origin: *`

**Step 4:** Add to your Nostr profile
```
alice@yourdomain.com
```

### Option 3: Paid Services

Premium verification services:
- Custom domains
- Additional features
- Support included

## Adding to Your Profile

1. Open your Nostr client
2. Go to profile settings
3. Find "NIP-05" or "Verification" field
4. Enter your address (e.g., `alice@example.com`)
5. Save

## Benefits

### Trust

- Others know the account is legitimate
- Reduces impersonation risk
- Builds credibility

### Discoverability

- Easier to find: search `alice@example.com`
- Memorable identifier
- Professional appearance

### Identity Continuity

- Even if you change keys, domain proves ownership
- Bridges to your other online presence

## Verification Levels

| Type | Example | Trust Level |
|------|---------|-------------|
| Free service | you@nostrcheck.me | Basic |
| Personal domain | you@yourname.com | Strong |
| Organization | ceo@company.com | Very strong |

## Common Issues

### "Invalid NIP-05"

Check:
- Correct format: `name@domain.com`
- Server is accessible
- JSON is valid
- Public key matches

### Verification Not Showing

1. Wait a few minutes
2. Refresh the profile
3. Check the JSON file
4. Verify CORS headers

### Can't Find the Setting

Look for:
- "NIP-05"
- "Verification"
- "Nostr address"
- "Identity"

## Technical Details

### JSON Format

The `nostr.json` file:
```json
{
  "names": {
    "alice": "abc123...hex-pubkey...",
    "bob": "def456...hex-pubkey..."
  },
  "relays": {
    "abc123...hex-pubkey...": ["wss://relay.example.com"]
  }
}
```

### Required Headers

Your server must return:
```
Content-Type: application/json
Access-Control-Allow-Origin: *
```

### URL Format

Clients check:
```
https://domain.com/.well-known/nostr.json?name=alice
```

## Self-Hosting Tips

### Static Site (GitHub Pages, Netlify)

Create `.well-known/nostr.json`:
```json
{
  "names": {
    "yourname": "your-hex-public-key"
  }
}
```

### With Redirects

Some hosts need configuration for `.well-known` paths.

### CORS Configuration

**Nginx:**
```nginx
location /.well-known/nostr.json {
    add_header Access-Control-Allow-Origin *;
    add_header Content-Type application/json;
}
```

**Apache (.htaccess):**
```apache
Header set Access-Control-Allow-Origin "*"
```

## Privacy Note

NIP-05 links your Nostr identity to a domain:
- This is public information
- Consider if you want this connection
- Use a pseudonymous domain if desired

## FAQ

### Is verification required?

No! It's optional but recommended.

### Does it cost money?

Free options exist. Own domain costs domain price.

### Can I change it later?

Yes, just update your profile.

### What if the domain expires?

Verification will stop working. Keep domains renewed!

### Can multiple people use one domain?

Yes! Add multiple entries to the JSON.

## Next Steps

- [Backup Your Keys](/account/backup-keys)
- [Profile Setup](/account/profile-setup)
- [Multiple Clients](/account/multiple-clients)
