/* ============================================================
   MEMECOIN — APP LOGIC
   Reads window.COIN_CONFIG and hydrates the page.
   ============================================================ */

(function () {
  const cfg = window.COIN_CONFIG || {};

  // Helper: set text content for every element with [data-attr]
  const setAll = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };
  const setHTMLAll = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.innerHTML = value;
    });
  };
  const setAttrAll = (selector, attr, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.setAttribute(attr, value);
    });
  };

  // ---- Identity ----
  if (cfg.name)       setAll('[data-coin-name]', cfg.name);
  if (cfg.ticker)     setAll('[data-coin-ticker]', cfg.ticker);
  if (cfg.logoEmoji)  setAll('[data-coin-logo]', cfg.logoEmoji);
  if (cfg.tagline)    setAll('[data-coin-tagline]', cfg.tagline);
  if (cfg.lore)       setHTMLAll('[data-coin-lore]', cfg.lore);

  // ---- Contract & Trade Link ----
  if (cfg.contractAddress) setAll('[data-coin-ca]', cfg.contractAddress);
  if (cfg.tradeLink)       setAttrAll('[data-trade-link]', 'href', cfg.tradeLink);

  // ---- Tokenomics stats ----
  if (cfg.totalSupply) setAll('[data-stat-supply]', cfg.totalSupply);
  if (cfg.tax)         setAll('[data-stat-tax]', cfg.tax);
  if (cfg.lpStatus)    setAll('[data-stat-lp]', cfg.lpStatus);

  // ---- Socials ----
  const socials = cfg.socials || {};
  if (socials.x)           setAttrAll('[data-social-x]', 'href', socials.x);
  if (socials.telegram)    setAttrAll('[data-social-telegram]', 'href', socials.telegram);
  if (socials.dexscreener) setAttrAll('[data-social-dexscreener]', 'href', socials.dexscreener);
  if (socials.dextools)    setAttrAll('[data-social-dextools]', 'href', socials.dextools);

  // ---- Update page <title> ----
  if (cfg.name) {
    document.title = `${cfg.name} — Memecoin`;
  }

  // ---- Copy contract address ----
  const copyBtn = document.getElementById('copy-ca');
  const caEl = document.getElementById('contract-address');
  if (copyBtn && caEl) {
    copyBtn.addEventListener('click', async () => {
      const ca = caEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(ca);
      } catch {
        // Fallback for older browsers / non-secure contexts
        const range = document.createRange();
        range.selectNode(caEl);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 1800);
    });
  }

  // ---- Year in footer ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
