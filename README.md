# WORX Kids — website

Wooden toys, play furniture, kids' rooms and play areas by WORX. Static one-page site (HTML/CSS/JS, no build step), hosted on GitHub Pages like worxegypt.com.

- `index.html` — English content (product catalogue, custom work, FAQ, contact)
- `ar.html` — Arabic (right-to-left) page, generated from `index.html`
- `styles.css` — styling
- `products.js` — **store settings (WhatsApp, InstaPay address, delivery fee) and the product list with prices**
- `script.js` — shop sections, product details, kids' rooms gallery, design-meeting booking, cart, checkout and quote form
- `assets/img/worx.png` / `worx-white.png` — WORX wordmark (the colourful "KIDS" next to it is styled text); `favicon.svg` — browser tab icon
- `assets/img/products/` — product pictures (placeholder illustrations for now)

## How the store works

1. Customers add products to the cart (it's saved in their browser).
2. At checkout they enter name, phone, area and address, and see the total and the bank account to transfer to with InstaPay.
3. "Send order on WhatsApp" opens WhatsApp with the full order (items, totals, delivery details) addressed to the store number. The customer attaches the InstaPay screenshot and sends it.

There is no server and no online card payment; orders are confirmed by hand on WhatsApp.

## Products and prices

Everything is in `products.js`, in English and Arabic:

- `STORE.bank`, `STORE.accountName`, `STORE.accountNumber` — the bank account customers transfer to with InstaPay; `STORE.instapayLink` — optional InstaPay payment link
- `STORE.hidePrices` — `true` shows "xxxx EGP" instead of every price (checkout then asks customers to send the order first and pay after you confirm the total); set it to `false` to show the real prices again
- `STORE.deliveryCairo` / `STORE.deliveryOutsideCairo` — delivery fee in EGP, `0` for free, or `null` to confirm it on WhatsApp (currently free in Cairo, confirmed on WhatsApp outside)
- `COLORS` — colour options offered for every product (light wood, dark wood, white, black, custom colour). The custom colour adds `extraPrice` (500 EGP) per item to the price. Customers pick a colour in the product details window; it shows in the cart and the WhatsApp order.
- `SECTIONS` — the shop sections (name, picture, order; `menu: true` puts a section in the menu under the logo)
- `ROOMS` — the "Rooms we've designed" gallery: one entry per kids' room, photos in `assets/img/rooms/`. Empty = "photos coming soon".
- `PRODUCTS` — one entry per product, with the `section` it belongs to. `price: null` shows "Price on request" with an "Ask on WhatsApp" button instead of "Add to cart". `oldPrice` shows a crossed-out sale price.
- Photos go in `assets/img/products/` (square works best); list the file names in the product's `images` (first = main photo, second = hover photo).

## Arabic version

Don't edit `ar.html` by hand. After changing the English page, add or update the matching English/Arabic pair in `tools/build_ar.py` and run:

    python3 tools/build_ar.py

The script stops with an error if any English text it expects is missing.

## To do

- Add photos of kids' rooms WORX has made to `ROOMS`
- Add products to each section (sections without products show "Coming soon")
- Add prices in `products.js`
- Review the product list and safety wording so it matches what WORX actually sells
- Connect a domain (add a `CNAME` file) and add canonical / og:url / og:image tags
