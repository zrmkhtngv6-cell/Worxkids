# WORX Kids — website

Wooden toys, play furniture, kids' rooms and play areas by WORX. Static one-page site (HTML/CSS/JS, no build step), hosted on GitHub Pages like worxegypt.com.

- `index.html` — English content (product catalogue, custom work, FAQ, contact)
- `ar.html` — Arabic (right-to-left) page, generated from `index.html`
- `styles.css` — styling
- `products.js` — **store settings (WhatsApp, InstaPay address, delivery fee) and the product list with prices**
- `script.js` — product grid, filters, cart, checkout and quote form
- `assets/img/logo.png` / `logo-white.png` — WORX Kids logo for light / dark backgrounds; `favicon.png` — browser tab icon
- `assets/img/products/` — product pictures (placeholder illustrations for now)

## How the store works

1. Customers add products to the cart (it's saved in their browser).
2. At checkout they enter name, phone, area and address, and see the total and the InstaPay address.
3. "Send order on WhatsApp" opens WhatsApp with the full order (items, totals, delivery details) addressed to the store number. The customer attaches the InstaPay screenshot and sends it.

There is no server and no online card payment; orders are confirmed by hand on WhatsApp.

## Products and prices

Everything is in `products.js`, in English and Arabic:

- `STORE.instapay` — your InstaPay address; `STORE.instapayLink` — optional InstaPay payment link
- `STORE.deliveryFee` — a number in EGP, `0` for free delivery, or `null` to confirm it on WhatsApp
- `PRODUCTS` — one entry per product. `price: null` shows "Price on request" with an "Ask on WhatsApp" button instead of "Add to cart". `oldPrice` shows a crossed-out sale price.
- Photos go in `assets/img/products/` (square works best); set the product's `img` to the file name.
- Categories: `climbing`, `pretend`, `baby`, `furniture`, `room` (names in `CATEGORIES`).

## Arabic version

Don't edit `ar.html` by hand. After changing the English page, add or update the matching English/Arabic pair in `tools/build_ar.py` and run:

    python3 tools/build_ar.py

The script stops with an error if any English text it expects is missing.

## To do

- Replace the illustrations with real product photos
- Add prices and the InstaPay address in `products.js`
- Review the product list and safety wording so it matches what WORX actually sells
- Connect a domain (add a `CNAME` file) and add canonical / og:url / og:image tags
