# Memecoin Website

A single-page, static memecoin landing site. No build step, no framework, no dependencies — just open `index.html` in a browser or drop the folder on any static host (Netlify, Vercel, GitHub Pages, IPFS, Cloudflare Pages).

## Files

```
memecoin-site/
├── index.html      # Markup (rarely needs editing)
├── styles.css      # All styles + theme colors
├── config.js       # ← EDIT THIS FILE with your coin details
├── app.js          # Hydrates page from config + copy-CA logic
├── favicon.svg     # Tab icon
└── README.md
```

## Edit your coin details

Open **`config.js`** and fill in:

- `name` — coin name (e.g. "PEPE KING")
- `ticker` — symbol (e.g. "PEPEK")
- `logoEmoji` — emoji used as logo (swap with an `<img>` in `index.html` for a real logo)
- `tagline` — short hero subtitle
- `lore` — about-section blurb (HTML allowed)
- `contractAddress` — **paste your CA here**
- `tradeLink` — Uniswap / Raydium / Jupiter / Dexscreener swap URL
- `totalSupply`, `tax`, `lpStatus` — tokenomics numbers
- `socials.x`, `socials.telegram`, `socials.dexscreener`, `socials.dextools`

Everything in the site auto-updates from these values.

## Rebrand the colors

Open **`styles.css`** and edit the `:root` block at the top:

```css
--color-primary:   #00ff88;   /* main neon */
--color-secondary: #ff00aa;   /* secondary neon */
--color-accent:    #ffea00;   /* accent */
```

## Run locally

Any of these works:

```bash
# Python
python3 -m http.server 8000

# Node (if installed)
npx serve .

# Or just double-click index.html
```

Then open <http://localhost:8000>.

## Deploy

Drag the `memecoin-site/` folder onto Netlify Drop, or push to GitHub and connect Vercel/Cloudflare Pages. No config needed.
