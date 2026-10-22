---
sidebar_position: 6
title: Wallet Connect (NWC)
description: Link one Lightning wallet to every Nostr app, with a spending budget
---

# Nostr Wallet Connect (NWC)

**Nostr Wallet Connect (NWC)** links a Lightning wallet to a Nostr app so that zapping takes one tap. You connect once per app, set a spending budget, and the app can then ask your wallet to pay. The app never holds your money.

## How it works

![How Nostr Wallet Connect works](/img/diagrams/nwc-flow.svg)

1. Your wallet creates a **connection link** (it starts with `nostr+walletconnect://`).
2. You paste that link into your Nostr app.
3. When you zap, the app sends an encrypted payment request through a relay.
4. Your wallet pays, as long as the payment fits the budget you set.

## Why use it

| Without NWC | With NWC |
|---|---|
| Copy an invoice, switch to your wallet, pay, switch back | One tap on ⚡ |
| The app has no limits on what you approve | Your wallet enforces a spending budget |
| Hard to stop an app later | Revoke one app's connection at any time |

## Set it up

1. **Get a wallet that supports NWC.** Good choices:
   - [Alby Hub](https://getalby.com/alby-hub) (self-custody, the reference wallet for Nostr apps; run it yourself or let Alby host it for a monthly fee), with [Alby Go](https://getalby.com/alby-go) on your phone
   - [Coinos](https://coinos.io) (custodial, web-based, set up in a minute; it disclosed a credential leak in August 2026, so pocket money only)
   - [Zeus](https://zeusln.com) (self-custody, more control)

   More wallets are listed at [nwc.dev](https://nwc.dev).
2. **Create a connection.** In your wallet, find **Connections**, **Apps** or **Nostr Wallet Connect** and create a new one. Set a **spending budget**, for example 10,000 sats a month, so a hacked app can't drain you.
3. **Copy the connection link**, or show its QR code.
4. **Paste it into your Nostr app.** Open **Settings → Wallet** (or *Zaps*) **→ Connect wallet**, then paste the link or scan the code.
5. **Test it.** Zap a post. In most apps you can long-press ⚡ to choose a custom amount.

:::tip
If you use the Primal phone app, its wallet is built in and needs no NWC setup. It has its own recovery phrase, separate from your nsec, so write that down. See [Zaps & Lightning](./zaps.md).
:::

## Apps that support NWC

Damus, Amethyst, Primal, Nostur, noStrudel, YakiHonne, Snort and zap.stream all support NWC. [See the full list at nwc.dev](https://nwc.dev).

## Keep it safe

:::caution Treat the connection link like a password
Anyone who has your `nostr+walletconnect://` link can spend from your wallet, up to its budget. Paste it only into apps you trust, and never share it.
:::

- **Make one connection per app.** Then you can switch off a single app without touching the others.
- **Always set a budget.** Start small. You can raise it later.
- **Keep only pocket money** in a custodial wallet.
- **Check your connections now and then.** Your wallet shows which apps are connected. Delete any you no longer use.

:::danger If your nsec leaks
Revoke **every** NWC connection in your wallet straight away, then follow the steps in [Backup Your Keys](../account/backup-keys.md) to move to a new account.
:::

## Revoking a connection

1. Open your wallet's **Connections** (or *Apps*) page.
2. Find the app.
3. Tap **Revoke**, **Disconnect** or **Delete**.

The app can no longer ask your wallet to pay.

## Troubleshooting

| Problem | Try |
|---|---|
| Zap fails | Check your wallet balance and whether you've used up the budget. |
| App says the link is invalid | Copy the whole link again. It must start with `nostr+walletconnect://`. Or create a new connection. |
| Zaps stopped working after a while | The connection may have been revoked or expired. Create a new one. |
| Nothing happens with a self-hosted wallet | Make sure your Alby Hub (or node) is online. |

## Learn more

- [nwc.dev](https://nwc.dev): wallets and apps that support NWC
- [NIPs](https://github.com/nostr-protocol/nips): the technical specs (NWC is NIP-47)

## Next steps

- [Zaps & Lightning](./zaps.md)
- [Profile Setup](../account/profile-setup.md): add your Lightning address
- [Resources](../help/resources.md)
