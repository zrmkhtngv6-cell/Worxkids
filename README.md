# WORX Kids — website

Wooden toys, play furniture, kids' rooms and play areas by WORX. Static one-page site (HTML/CSS/JS, no build step), hosted on GitHub Pages like worxegypt.com.

- `index.html` — English content (product catalogue, custom work, FAQ, contact)
- `ar.html` — Arabic (right-to-left) page, generated from `index.html`
- `styles.css` — styling
- `script.js` — product filters, "Order on WhatsApp" buttons, quote form (`WHATSAPP_NUMBER` at the top)
- `assets/img/products/` — product pictures (placeholder illustrations for now)

## Products

Each product is an `<article class="product" data-cat="...">` in `index.html`. Categories: `climbing`, `pretend`, `baby`, `furniture`, `room`.
To use a real photo, put it in `assets/img/products/` (square works best) and change the `src` of that product's image.
To show a price, replace "Price on request" with the price.

## Arabic version

Don't edit `ar.html` by hand. After changing the English page, add or update the matching English/Arabic pair in `tools/build_ar.py` and run:

    python3 tools/build_ar.py

The script stops with an error if any English text it expects is missing.

## To do

- Replace the illustrations with real product photos
- Add prices (or keep "Price on request")
- Review the product list and safety wording so it matches what WORX actually sells
- Connect a domain (add a `CNAME` file) and add canonical / og:url / og:image tags
