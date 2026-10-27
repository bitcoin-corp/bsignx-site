# bSignX.com

Marketing site for **bSignX**, contracts both sides sign. By The Bitcoin Corporation Ltd. Static HTML, same house pattern as bsharesx-site / bmintx-site.

## The product

bSignX is the signing service inside bWalletX and bChatX. You tell b (our AI agent) what you want agreed, b drafts a written `.nds.html` contract, you sign it in your wallet and send it. The other side signs, refuses or counters. A counteroffer is a new version signed only by its author, wearing a large COUNTEROFFER chip; signatures never carry over. When both sign the same hash it is sealed on chain, encrypted to both parties, publicly verifiable as agreed, and an atomic swap settles payment against that exact hash in one transaction.

**For:** founders issuing shares or early funding agreements; freelancers and commissions; token sellers; trusts and families; small companies (minutes, supplier terms); any two people making a deal.

**No man in the middle:** the wallet hashes what you see, every version is signed by its author, keys are pinned in the wallet, versions form a hash chain, the swap commits to the agreed hash, the server is a mailbox with no signing/decrypt/pay key. Trade-off: b sees text it drafts.

**Live today (bit-sign / bChatX):** wallet signing with drawn signatures (phone, extension), countersign hand-off link, contract rooms with b drafting, NDS seal encrypted to the parties, hash-tied atomic swap capped at $10 (testing).
**Coming:** counteroffer version chain + chips + refuse, send to one named person end-to-end encrypted to a pinned key, voice-to-b drafting from any room, publicly verifiable agreed version, swap starting on seal.

## How it plugs in

- **bChatX** – where contracts are drafted, sent and countersigned.
- **bWalletX** – signs, pays, holds pinned keys and sealed copies.
- **bSharesX** – signed share agreements become register entries.
- **bDojoX** – launch terms and token sales agreed in writing first.
- **bVaultX / bTrust** – trust deeds co-signed by trustees, kept for heirs.
- **bAdvertisingX** – a signed brief when you order a bAd from b.
- **bMoneyX** – settled contracts appear in statements, linked to the agreement.
- **bMintX** – mint the agreed contract as a private keepsake.

Spec: `bitcoin-corp/docs/CONTRACT-NEGOTIATION-FLOW.md`.

## Develop

```
pnpm install
pnpm build   # html-validate + local asset check
```

Video `media/sign.mp4` is re-encoded from bit-sign's `public/bit-sign-online.mp4`. OG image source: `media-src/og-bsignx-v1.html` (render 1200x630 with headless Chrome).
