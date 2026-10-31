# WORX Kids — website

Kids' furniture and play areas by WORX. Static one-page site (HTML/CSS/JS, no build step), made to be hosted on GitHub Pages like worxegypt.com.

- `index.html` — English content
- `ar.html` — Arabic (right-to-left) page, generated from `index.html`
- `styles.css` — styling
- `script.js` — mobile menu, scroll effects, WhatsApp quote form (`WHATSAPP_NUMBER` at the top)
- `assets/img/` — WORX wordmark (the "KIDS" part is styled text) and favicon

## Arabic version

Don't edit `ar.html` by hand. After changing the English page, update the matching English/Arabic pair in `tools/build_ar.py` and run:

    python3 tools/build_ar.py

The script stops with an error if any English text it expects is missing.

## To do

- Add real project photos (a gallery section) once there are kids' rooms / play areas to show
- Review the safety and service wording so it matches what WORX actually offers
- Connect a domain (add a `CNAME` file) and add canonical / og:url / og:image tags
