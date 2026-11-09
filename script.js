// Store settings and products live in products.js (STORE, SECTIONS, PRODUCTS)

const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';

// Text set from script, per page language (index.html = en, ar.html = ar)
const STRINGS = {
  en: {
    openMenu: 'Open menu', closeMenu: 'Close menu',
    products: n => `${n} product${n === 1 ? '' : 's'}`,
    money: n => `${n.toLocaleString('en-US')} EGP`,
    hidden: 'xxxx EGP',
    priceOnRequest: 'Price on request',
    stepTotal: '<strong>1.</strong> Tap "Send order". We\'ll reply on WhatsApp with your order total.',
    doneTotal: 'Your order <strong class="js-order-id"></strong> is ready in WhatsApp. Send it, and we\'ll reply with the total to transfer.',
    comingSoon: 'Coming soon',
    waSection: name => `Hello WORX Kids, I'm looking for something from ${name}. What do you have?`,
    addToCart: 'Add to cart',
    colorExtra: n => `+${n.toLocaleString('en-US')} EGP`,
    customNote: n => `A custom colour adds ${n.toLocaleString('en-US')} EGP per item.`,
    chooseCustom: 'Please write the colour you want',
    viewDetails: name => `View details: ${name}`,
    photo: n => `Photo ${n}`,
    askWhatsApp: 'Ask on WhatsApp',
    added: name => `${name} added to your cart`,
    copied: 'Copied',
    decrease: 'Decrease quantity', increase: 'Increase quantity', remove: 'Remove',
    deliveryLater: 'Confirmed on WhatsApp',
    free: 'Free',
    freeCairo: 'Free in Cairo',
    plusDelivery: ' + delivery',
    waIntro: 'Hello WORX Kids, I would like a free quote.',
    waAsk: name => `Hello WORX Kids, I'm interested in the ${name}. Could you send me the price and details?`,
    order: {
      title: id => `New order ${id}`,
      color: 'Colour',
      subtotal: 'Subtotal', delivery: 'Delivery', total: 'Total',
      name: 'Name', phone: 'Phone', zone: 'Delivery to', area: 'Area', address: 'Address', notes: 'Notes',
      payment: bank => `Payment: InstaPay transfer to the ${bank} account (screenshot attached)`,
      paymentAsk: 'Payment: InstaPay (please send me your bank account details)',
      paymentAfter: 'Payment: InstaPay, after you confirm the delivery fee',
      paymentTotal: 'Payment: InstaPay, after you confirm the total',
    },
    booking: {
      intro: "Hello WORX Kids, I'd like to book a meeting at your Park Mall showroom to design a kids' room.",
      name: 'Name', phone: 'Phone', day: 'Preferred day', time: 'Preferred time', room: 'The room is for', notes: 'Notes',
    },
    waName: 'Name', waPhone: 'Phone', waProject: 'Project', waAge: "Child's age", waMessage: 'Message',
  },
  ar: {
    openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة',
    products: n => (n === 2 ? 'منتجان' : n >= 3 && n <= 10 ? `${n} منتجات` : `${n} منتج`),
    money: n => `${n.toLocaleString('en-US')} ج.م`,
    hidden: 'xxxx ج.م',
    priceOnRequest: 'السعر عند الطلب',
    stepTotal: '<strong>١.</strong> اضغط "أرسل الطلب"، وسنرد عليك على واتساب بإجمالي طلبك.',
    doneTotal: 'طلبك <strong class="js-order-id"></strong> جاهز في واتساب. أرسله وسنرد عليك بالإجمالي المطلوب تحويله.',
    comingSoon: 'قريباً',
    waSection: name => `مرحباً WORX Kids، أبحث عن منتج من قسم ${name}. ماذا لديكم؟`,
    addToCart: 'أضف إلى السلة',
    colorExtra: n => `+${n.toLocaleString('en-US')} ج.م`,
    customNote: n => `اللون حسب الطلب يضيف ${n.toLocaleString('en-US')} ج.م لكل قطعة.`,
    chooseCustom: 'برجاء كتابة اللون الذي تريده',
    viewDetails: name => `عرض التفاصيل: ${name}`,
    photo: n => `صورة ${n}`,
    askWhatsApp: 'اسأل عبر واتساب',
    added: name => `تمت إضافة ${name} إلى السلة`,
    copied: 'تم النسخ',
    decrease: 'تقليل الكمية', increase: 'زيادة الكمية', remove: 'حذف',
    deliveryLater: 'يُحدد عبر واتساب',
    free: 'مجاني',
    freeCairo: 'مجاني داخل القاهرة',
    plusDelivery: ' + التوصيل',
    waIntro: 'مرحباً WORX Kids، أود الحصول على عرض سعر مجاني.',
    waAsk: name => `مرحباً WORX Kids، أنا مهتم بـ ${name}. هل يمكنكم إرسال السعر والتفاصيل؟`,
    order: {
      title: id => `طلب جديد ${id}`,
      color: 'اللون',
      subtotal: 'المجموع', delivery: 'التوصيل', total: 'الإجمالي',
      name: 'الاسم', phone: 'الهاتف', zone: 'التوصيل إلى', area: 'المنطقة', address: 'العنوان', notes: 'ملاحظات',
      payment: bank => `الدفع: تحويل إنستاباي إلى حساب ${bank} (مرفق صورة التحويل)`,
      paymentAsk: 'الدفع: إنستاباي (برجاء إرسال بيانات الحساب البنكي)',
      paymentAfter: 'الدفع: إنستاباي، بعد تأكيد رسوم التوصيل',
      paymentTotal: 'الدفع: إنستاباي، بعد تأكيد الإجمالي',
    },
    booking: {
      intro: 'مرحباً WORX Kids، أود حجز موعد في معرضكم ببارك مول لتصميم غرفة أطفال.',
      name: 'الاسم', phone: 'الهاتف', day: 'اليوم المفضل', time: 'الوقت المفضل', room: 'الغرفة لـ', notes: 'ملاحظات',
    },
    waName: 'الاسم', waPhone: 'الهاتف', waProject: 'المشروع', waAge: 'عمر الطفل', waMessage: 'الرسالة',
  },
};
const t = STRINGS[lang];
const waLink = text => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = id => document.getElementById(id);
// A product's price is shown unless prices are hidden and the product isn't marked showPrice
const priceShown = p => !STORE.hidePrices || !!p.showPrice;
const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
const forSale = p => p && typeof p.price === 'number';

// Menu button (small screens): opens the menu under the header
const catsNav = $('catsNav');
const navToggle = $('navToggle');
const setMenu = open => {
  catsNav.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? t.closeMenu : t.openMenu);
};
navToggle.addEventListener('click', () => setMenu(!catsNav.classList.contains('is-open')));
catsNav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

// Header shadow on scroll
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Product grid ----------
const priceHtml = p => {
  if (!forSale(p)) return `<span class="price price--ask">${t.priceOnRequest}</span>`;
  if (!priceShown(p)) return `<span class="price">${t.hidden}</span>`;
  const old = p.oldPrice ? `<s>${t.money(p.oldPrice)}</s> ` : '';
  return `<span class="price">${old}${t.money(p.price)}</span>`;
};
const imgSrc = file => `assets/img/products/${esc(file)}`;
const actionHtml = p => (forSale(p)
  ? `<button class="btn btn--coral product__add" data-id="${esc(p.id)}">${t.addToCart}</button>`
  : `<a class="btn btn--soft" href="${waLink(t.waAsk(p.name[lang]))}" target="_blank" rel="noopener">${t.askWhatsApp}</a>`);
const cardHtml = p => `
  <article class="product">
    <button type="button" class="product__img" data-open="${esc(p.id)}" aria-label="${esc(t.viewDetails(p.name[lang]))}">
      <img src="${imgSrc(p.images[0])}" alt="" width="400" height="400" loading="lazy">
      ${p.images[1] ? `<img class="product__img-alt" src="${imgSrc(p.images[1])}" alt="" width="400" height="400" loading="lazy">` : ''}
      ${p.badge ? `<span class="badge">${esc(p.badge[lang])}</span>` : ''}
    </button>
    <h3><button type="button" class="product__name" data-open="${esc(p.id)}">${esc(p.name[lang])}</button></h3>
    <p>${esc(p.desc[lang])}</p>
    <div class="product__foot">
      ${priceHtml(p)}
      ${actionHtml(p)}
    </div>
  </article>`;

// ---------- Shop: section grid and section pages (#shop/<section id>) ----------
const sectionById = Object.fromEntries(SECTIONS.map(s => [s.id, s]));
const inSection = id => PRODUCTS.filter(p => p.section === id);
const sectionCount = id => { const n = inSection(id).length; return n ? t.products(n) : t.comingSoon; };

$('sections').innerHTML = SECTIONS.map(s => `
  <li><a href="#shop/${esc(s.id)}" class="sec-tile">
    <img src="${imgSrc(s.img)}" alt="" width="400" height="400" loading="lazy">
    <span class="sec-tile__name">${esc(s.name[lang])}</span>
    <span class="sec-tile__count">${sectionCount(s.id)}</span>
  </a></li>`).join('');

// Sections marked menu: true go in the menu under the logo
$('catsMenu').querySelector('.cats__after').insertAdjacentHTML('beforebegin', SECTIONS.filter(s => s.menu)
  .map(s => `<li><a href="#shop/${esc(s.id)}" data-nav="${esc(s.id)}">${esc(s.name[lang])}</a></li>`).join(''));

const renderShop = () => {
  const m = location.hash.match(/^#shop\/([\w-]+)/);
  const sec = m && sectionById[m[1]];
  $('shopHome').hidden = !!sec;
  $('shopSection').hidden = !sec;
  document.querySelectorAll('[data-nav]').forEach(l => l.classList.toggle('is-active', l.dataset.nav === (sec ? sec.id : location.hash === '#shop' ? 'home' : '')));
  if (!sec) return false;
  const items = inSection(sec.id);
  $('secImg').src = imgSrc(sec.img);
  $('secName').textContent = sec.name[lang];
  $('productCount').textContent = sectionCount(sec.id);
  $('products').innerHTML = items.map(cardHtml).join('');
  $('secEmpty').hidden = items.length > 0;
  $('secAsk').href = waLink(t.waSection(sec.name[lang]));
  return true;
};
window.addEventListener('hashchange', () => {
  if (renderShop()) {
    $('shop').scrollIntoView();
    $('secName').focus({ preventScroll: true });
  }
});
// Opening a shared section link (…#shop/shelves) goes straight to that section
if (renderShop()) requestAnimationFrame(() => $('shop').scrollIntoView());

// ---------- Kids' rooms: gallery, ready-made furniture, design meeting ----------
const roomSrc = file => `assets/img/rooms/${esc(file)}`;
$('roomsGallery').innerHTML = ROOMS.map((r, i) => `
  <li><button type="button" class="room" data-room="${i}">
    <img src="${roomSrc(r.images[0])}" alt="" width="600" height="600" loading="lazy">
    <span class="room__title">${esc(r.title[lang])}</span>
  </button></li>`).join('');
$('roomsGallery').hidden = !ROOMS.length;
$('roomsEmpty').hidden = ROOMS.length > 0;

const roomModal = $('roomModal');
let roomReturn = null;
const openRoom = i => {
  const r = ROOMS[i];
  const show = j => {
    $('rmImg').src = roomSrc(r.images[j]);
    $('rmThumbs').querySelectorAll('button').forEach((b, k) => b.classList.toggle('is-active', k === j));
  };
  roomReturn = document.activeElement;
  $('rmTitle').textContent = r.title[lang];
  $('rmThumbs').innerHTML = r.images.length > 1
    ? r.images.map((f, j) => `<button type="button" data-photo="${j}" aria-label="${t.photo(j + 1)}"><img src="${roomSrc(f)}" alt="" width="72" height="72"></button>`).join('')
    : '';
  $('rmThumbs').onclick = e => { const b = e.target.closest('[data-photo]'); if (b) show(Number(b.dataset.photo)); };
  show(0);
  roomModal.hidden = false;
  document.body.style.overflow = 'hidden';
  roomModal.querySelector('.modal__close').focus();
};
const closeRoom = () => {
  roomModal.hidden = true;
  document.body.style.overflow = '';
  if (roomReturn) roomReturn.focus();
};
$('roomsGallery').addEventListener('click', e => { const b = e.target.closest('[data-room]'); if (b) openRoom(Number(b.dataset.room)); });
roomModal.querySelectorAll('[data-close-room]').forEach(el => el.addEventListener('click', closeRoom));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !roomModal.hidden) closeRoom(); });

$('readyList').innerHTML = SECTIONS.filter(s => s.furniture).map(s => `
  <li><a href="#shop/${esc(s.id)}" class="ready__item">
    <img src="${imgSrc(s.img)}" alt="" width="80" height="80" loading="lazy">
    <span><strong>${esc(s.name[lang])}</strong><small>${sectionCount(s.id)}</small></span>
  </a></li>`).join('');

// Design meeting: earliest day is today
const today = new Date();
$('bookDay').min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
$('bookForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const day = new Date(data.get('day') + 'T12:00').toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  const b = t.booking;
  const lines = [
    b.intro,
    `${b.name}: ${data.get('name')}`,
    `${b.phone}: ${data.get('phone')}`,
    `${b.day}: ${day}`,
    `${b.time}: ${data.get('time')}`,
    `${b.room}: ${data.get('room')}`,
    data.get('notes') ? `${b.notes}: ${data.get('notes')}` : null,
  ].filter(l => l !== null);
  window.open(waLink(lines.join('\n')), '_blank', 'noopener');
});

// ---------- Colours ----------
const colorById = Object.fromEntries(COLORS.map(c => [c.id, c]));
let pickedColor = COLORS[0].id;
const customColor = COLORS.find(c => c.extra);
if (customColor) $('pmCustomNote').textContent = t.customNote(customColor.extraPrice || 0);
const swatchStyle = c => (c.swatch.includes('gradient') ? `background:${c.swatch}` : `background-color:${c.swatch}`);
const colorLabel = (colorId, note) => {
  const c = colorById[colorId] || COLORS[0];
  return c.extra ? `${c.name[lang]}${note ? `: ${note}` : ''} (${t.colorExtra(c.extraPrice || 0)})` : c.name[lang];
};
function renderColors(p) {
  $('pmColors').hidden = !forSale(p);
  pickedColor = COLORS[0].id;
  $('pmCustomInput').value = '';
  $('pmColorList').innerHTML = COLORS.map(c => `<button type="button" class="color-btn" data-color="${c.id}" style="${swatchStyle(c)}" aria-label="${esc(c.name[lang])}" title="${esc(c.name[lang])}"></button>`).join('');
  showColor();
}
function showColor() {
  const c = colorById[pickedColor];
  $('pmColorList').querySelectorAll('[data-color]').forEach(b => b.setAttribute('aria-pressed', b.dataset.color === pickedColor));
  $('pmColorName').textContent = c.extra ? `${c.name[lang]} (${t.colorExtra(c.extraPrice || 0)})` : c.name[lang];
  $('pmCustom').hidden = !c.extra;
  $('pmCustomInput').classList.remove('is-invalid');
}
$('pmColorList').addEventListener('click', e => {
  const b = e.target.closest('[data-color]');
  if (!b) return;
  pickedColor = b.dataset.color;
  showColor();
  if (colorById[pickedColor].extra) $('pmCustomInput').focus();
});

// ---------- Product details window ----------
const modal = $('productModal');
let modalReturn = null;
const showPhoto = (p, i) => {
  $('pmImg').src = imgSrc(p.images[i]);
  $('pmThumbs').querySelectorAll('button').forEach((b, j) => b.classList.toggle('is-active', j === i));
};
const openProduct = id => {
  const p = byId[id];
  modalReturn = document.activeElement;
  $('pmCat').textContent = sectionById[p.section].name[lang];
  $('pmName').textContent = p.name[lang];
  $('pmPrice').innerHTML = priceHtml(p);
  $('pmLong').textContent = (p.long || p.desc)[lang];
  $('pmDetails').innerHTML = p.details ? p.details[lang].map(d => `<li>${esc(d)}</li>`).join('') : '';
  $('pmDetails').hidden = !p.details;
  $('pmAction').innerHTML = actionHtml(p).replace('product__add', 'product__add product__add--modal');
  renderColors(p);
  $('pmThumbs').innerHTML = p.images.length > 1
    ? p.images.map((f, i) => `<button type="button" data-photo="${i}" aria-label="${t.photo(i + 1)}"><img src="${imgSrc(f)}" alt="" width="72" height="72"></button>`).join('')
    : '';
  $('pmThumbs').onclick = e => { const b = e.target.closest('[data-photo]'); if (b) showPhoto(p, Number(b.dataset.photo)); };
  showPhoto(p, 0);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__close').focus();
};
const closeProduct = () => {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (modalReturn) modalReturn.focus();
};
$('products').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openProduct(b.dataset.open); });
modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeProduct));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeProduct(); });

// ---------- Cart (kept in this browser between visits) ----------
const CART_KEY = 'worxkids-cart';
let cart = {};
let sentPayMode = null;
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { cart = {}; }
// Drop anything that is no longer for sale
// Keys are "productId|colourId|custom note"; older carts (product id only) become light wood
Object.keys(cart).forEach(key => {
  const qty = cart[key];
  if (!key.includes('|')) { delete cart[key]; if (qty > 0) cart[`${key}|${COLORS[0].id}|`] = qty; }
});
Object.keys(cart).forEach(key => {
  const [id, color] = key.split('|');
  if (!forSale(byId[id]) || !colorById[color] || !(cart[key] > 0)) delete cart[key];
});

const saveCart = () => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCart(); };
const cartLines = () => Object.entries(cart).map(([key, qty]) => {
  const [id, color, ...note] = key.split('|');
  return { key, p: byId[id], color, note: note.join('|'), qty };
});
const unitPrice = l => l.p.price + (colorById[l.color].extraPrice || 0);
const subtotal = () => cartLines().reduce((sum, l) => sum + unitPrice(l) * l.qty, 0);
// Delivery depends on the zone picked at checkout (Cairo until they choose)
const deliveryFee = () => ($('zone').value === 'outside' ? STORE.deliveryOutsideCairo : STORE.deliveryCairo);
const deliveryKnown = () => typeof deliveryFee() === 'number';
const deliveryText = () => (!deliveryKnown() ? t.deliveryLater : deliveryFee() === 0 ? t.free : t.money(deliveryFee()));
const total = () => subtotal() + (deliveryKnown() ? deliveryFee() : 0);
const pricesKnown = () => cartLines().every(l => priceShown(l.p));
const sumText = n => (pricesKnown() ? t.money(n) : t.hidden);
const totalText = () => (pricesKnown() ? t.money(total()) + (deliveryKnown() ? '' : t.plusDelivery) : t.hidden);
// With prices hidden (or delivery unknown) customers send the order first and pay once we confirm the total
const payLater = () => !pricesKnown() || !deliveryKnown();

const drawer = $('cart');
const views = { cart: $('cartView'), checkout: $('checkoutForm'), done: $('orderDone') };
const showView = name => {
  Object.entries(views).forEach(([k, el]) => { el.hidden = k !== name; });
  $('toCheckout').hidden = name !== 'cart';
  $('cartFoot').hidden = name === 'done' || !cartLines().length;
  if (name !== 'done') renderCart();
};

function renderCart() {
  const lines = cartLines();
  const count = lines.reduce((n, l) => n + l.qty, 0);
  $('cartCount').textContent = count;
  $('cartCount').hidden = !count;
  $('cartEmpty').hidden = !!lines.length;
  $('cartItems').innerHTML = lines.map(({ key, p, color, note, qty }) => `
    <li class="cart__item">
      <img src="${imgSrc(p.images[0])}" alt="" width="72" height="72">
      <div>
        <p class="cart__name">${esc(p.name[lang])}</p>
        <p class="cart__color"><i style="${swatchStyle(colorById[color])}"></i>${esc(colorLabel(color, note))}</p>
        <p class="cart__price">${priceShown(p) ? t.money(unitPrice({ p, color })) : t.hidden}</p>
        <div class="qty">
          <button type="button" data-qty="${esc(key)}" data-step="-1" aria-label="${t.decrease}">−</button>
          <span>${qty}</span>
          <button type="button" data-qty="${esc(key)}" data-step="1" aria-label="${t.increase}">+</button>
        </div>
      </div>
      <button type="button" class="cart__remove" data-remove="${esc(key)}" aria-label="${t.remove}">×</button>
    </li>`).join('');
  $('subtotal').textContent = sumText(subtotal());
  // In the cart (before a zone is chosen) show the Cairo offer
  $('delivery').textContent = views.checkout.hidden && STORE.deliveryCairo === 0 ? t.freeCairo : deliveryText();
  document.querySelectorAll('.js-total').forEach(el => { el.textContent = totalText(); });
  // Delivery fee not known yet (outside Cairo): order first, pay after we confirm the fee
  if (typeof renderPayLater === 'function') renderPayLater();
  // After an order is sent the cart is empty, so the thank-you note keeps the sent order's mode
  const payMode = sentPayMode || (payLater() ? 'later' : 'now');
  document.querySelectorAll('[data-pay]').forEach(el => { el.hidden = el.dataset.pay !== payMode; });
  // Emptied the cart while checking out: go back to the (empty) cart
  if (!lines.length && !views.checkout.hidden) showView('cart');
  else if (views.done.hidden) $('cartFoot').hidden = !lines.length;
}

let lastFocus = null;
const openCart = () => {
  sentPayMode = null;
  lastFocus = document.activeElement;
  showView('cart');
  drawer.hidden = false;
  document.body.style.overflow = 'hidden';
  drawer.querySelector('.drawer__close').focus();
};
const closeCart = () => {
  drawer.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
};
$('cartOpen').addEventListener('click', openCart);
drawer.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeCart));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) closeCart(); });

let toastTimer;
const toast = msg => {
  const el = $('toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2500);
};

document.addEventListener('click', e => {
  const btn = e.target.closest('.product__add');
  if (!btn) return;
  const p = byId[btn.dataset.id];
  if (!btn.classList.contains('product__add--modal')) { openProduct(p.id); return; }
  const c = colorById[pickedColor];
  const note = c.extra ? $('pmCustomInput').value.trim().replace(/\|/g, '/') : '';
  if (c.extra && !note) {
    $('pmCustomInput').classList.add('is-invalid');
    $('pmCustomInput').focus();
    toast(t.chooseCustom);
    return;
  }
  const key = `${p.id}|${c.id}|${note}`;
  cart[key] = (cart[key] || 0) + 1;
  saveCart();
  if (!modal.hidden) closeProduct();
  toast(t.added(p.name[lang]));
});

$('cartItems').addEventListener('click', e => {
  const q = e.target.closest('[data-qty]');
  const r = e.target.closest('[data-remove]');
  if (q) {
    const id = q.dataset.qty;
    cart[id] = (cart[id] || 0) + Number(q.dataset.step);
    if (cart[id] <= 0) delete cart[id];
  } else if (r) {
    delete cart[r.dataset.remove];
  } else return;
  saveCart();
});

// ---------- Checkout ----------
if (STORE.accountNumber) {
  $('payBank').textContent = STORE.bank;
  $('payName').textContent = STORE.accountName;
  $('payNumber').textContent = STORE.accountNumber;
  $('payMissing').hidden = true;
} else {
  $('payAccount').hidden = true;
}
if (STORE.instapayLink) {
  $('payLink').href = STORE.instapayLink;
  $('payLink').hidden = false;
}
$('copyNumber').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(STORE.accountNumber); toast(t.copied); } catch { /* clipboard not allowed: number is still visible */ }
});

$('toCheckout').addEventListener('click', () => {
  showView('checkout');
  views.checkout.querySelector('input').focus();
});
$('backToCart').addEventListener('click', () => showView('cart'));
$('zone').addEventListener('change', renderCart);

views.checkout.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const o = t.order;
  const id = 'WK-' + Date.now().toString(36).slice(-5).toUpperCase();
  const lines = [
    o.title(id),
    '',
    ...cartLines().map(({ p, color, note, qty }) => {
      const c = colorById[color];
      const col = c.extra ? `${c.name[lang]}: ${note} (${t.colorExtra(c.extraPrice || 0)})` : c.name[lang];
      return `${qty} × ${p.name[lang]} (${o.color}: ${col}) — ${priceShown(p) ? t.money(unitPrice({ p, color }) * qty) : t.hidden}`;
    }),
    '',
    `${o.subtotal}: ${sumText(subtotal())}`,
    `${o.delivery}: ${deliveryText()}`,
    `${o.total}: ${totalText()}`,
    '',
    `${o.name}: ${data.get('name')}`,
    `${o.phone}: ${data.get('phone')}`,
    `${o.zone}: ${$('zone').selectedOptions[0].text}`,
    `${o.area}: ${data.get('area')}`,
    `${o.address}: ${data.get('address')}`,
    data.get('notes') ? `${o.notes}: ${data.get('notes')}` : null,
    '',
    !pricesKnown() ? o.paymentTotal : !deliveryKnown() ? o.paymentAfter : STORE.accountNumber ? o.payment(STORE.bank) : o.paymentAsk,
  ].filter(l => l !== null);
  const link = waLink(lines.join('\n'));
  window.open(link, '_blank', 'noopener');
  sentPayMode = payLater() ? 'later' : 'now';
  laterDone.innerHTML = pricesKnown() ? laterText.done : t.doneTotal;
  document.querySelectorAll('.js-order-id').forEach(el => { el.textContent = id; });
  $('orderResend').href = link;
  cart = {};
  saveCart();
  e.target.reset();
  showView('done');
});

const laterStep = document.querySelector('.pay [data-pay="later"]');
const laterDone = document.querySelector('.done [data-pay="later"]');
const laterText = { step: laterStep.innerHTML, done: laterDone.innerHTML };
const renderPayLater = () => {
  const unknown = !pricesKnown();
  laterStep.innerHTML = unknown ? t.stepTotal : laterText.step;
};
renderCart();

// ---------- Rest of the page ----------

// Fade blocks in as they scroll into view
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.sections li, .rooms li, .plan, .ready, .custom__card, .checks li, .steps li, .section__head').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Floating button opens a WhatsApp chat
document.querySelector('.fab').href = waLink(t.waIntro);

// Quote form → WhatsApp
$('quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const lines = [
    t.waIntro,
    `${t.waName}: ${data.get('name')}`,
    `${t.waPhone}: ${data.get('phone')}`,
    `${t.waProject}: ${data.get('project')}`,
    data.get('age') && `${t.waAge}: ${data.get('age')}`,
    data.get('message') && `${t.waMessage}: ${data.get('message')}`,
  ].filter(Boolean);
  window.open(waLink(lines.join('\n')), '_blank', 'noopener');
});

$('year').textContent = new Date().getFullYear();
