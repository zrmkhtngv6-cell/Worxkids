// Store settings and products live in products.js (STORE, CATEGORIES, PRODUCTS)

const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';

// Text set from script, per page language (index.html = en, ar.html = ar)
const STRINGS = {
  en: {
    products: n => `${n} product${n === 1 ? '' : 's'}`,
    money: n => `${n.toLocaleString('en-US')} EGP`,
    priceOnRequest: 'Price on request',
    addToCart: 'Add to cart',
    askWhatsApp: 'Ask on WhatsApp',
    added: name => `${name} added to your cart`,
    copied: 'Copied',
    decrease: 'Decrease quantity', increase: 'Increase quantity', remove: 'Remove',
    deliveryLater: 'Confirmed on WhatsApp',
    free: 'Free',
    plusDelivery: ' + delivery',
    waIntro: 'Hello WORX Kids, I would like a free quote.',
    waAsk: name => `Hello WORX Kids, I'm interested in the ${name}. Could you send me the price and details?`,
    order: {
      title: id => `New order ${id}`,
      subtotal: 'Subtotal', delivery: 'Delivery', total: 'Total',
      name: 'Name', phone: 'Phone', area: 'City / area', address: 'Address', notes: 'Notes',
      payment: bank => `Payment: InstaPay transfer to the ${bank} account (screenshot attached)`,
      paymentAsk: 'Payment: InstaPay (please send me your bank account details)',
    },
    waName: 'Name', waPhone: 'Phone', waProject: 'Project', waAge: "Child's age", waMessage: 'Message',
  },
  ar: {
    products: n => `${n} منتج`,
    money: n => `${n.toLocaleString('en-US')} ج.م`,
    priceOnRequest: 'السعر عند الطلب',
    addToCart: 'أضف إلى السلة',
    askWhatsApp: 'اسأل عبر واتساب',
    added: name => `تمت إضافة ${name} إلى السلة`,
    copied: 'تم النسخ',
    decrease: 'تقليل الكمية', increase: 'زيادة الكمية', remove: 'حذف',
    deliveryLater: 'يُحدد عبر واتساب',
    free: 'مجاني',
    plusDelivery: ' + التوصيل',
    waIntro: 'مرحباً WORX Kids، أود الحصول على عرض سعر مجاني.',
    waAsk: name => `مرحباً WORX Kids، أنا مهتم بـ ${name}. هل يمكنكم إرسال السعر والتفاصيل؟`,
    order: {
      title: id => `طلب جديد ${id}`,
      subtotal: 'المجموع', delivery: 'التوصيل', total: 'الإجمالي',
      name: 'الاسم', phone: 'الهاتف', area: 'المدينة / المنطقة', address: 'العنوان', notes: 'ملاحظات',
      payment: bank => `الدفع: تحويل إنستاباي إلى حساب ${bank} (مرفق صورة التحويل)`,
      paymentAsk: 'الدفع: إنستاباي (برجاء إرسال بيانات الحساب البنكي)',
    },
    waName: 'الاسم', waPhone: 'الهاتف', waProject: 'المشروع', waAge: 'عمر الطفل', waMessage: 'الرسالة',
  },
};
const t = STRINGS[lang];
const waLink = text => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = id => document.getElementById(id);
const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
const forSale = p => p && typeof p.price === 'number';

// Header shadow on scroll
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Product grid ----------
const priceHtml = p => {
  if (!forSale(p)) return `<span class="price price--ask">${t.priceOnRequest}</span>`;
  const old = p.oldPrice ? `<s>${t.money(p.oldPrice)}</s> ` : '';
  return `<span class="price">${old}${t.money(p.price)}</span>`;
};
$('products').innerHTML = PRODUCTS.map(p => `
  <article class="product" data-cat="${esc(p.cat)}">
    <div class="product__img"><img src="assets/img/products/${esc(p.img)}" alt="" width="400" height="400" loading="lazy">${p.badge ? `<span class="badge">${esc(p.badge[lang])}</span>` : ''}</div>
    <p class="product__cat">${esc(CATEGORIES[p.cat][lang])}</p>
    <h3>${esc(p.name[lang])}</h3>
    <p>${esc(p.desc[lang])}</p>
    <div class="product__foot">
      ${priceHtml(p)}
      ${forSale(p)
        ? `<button class="btn btn--orange product__add" data-id="${esc(p.id)}">${t.addToCart}</button>`
        : `<a class="btn btn--soft" href="${waLink(t.waAsk(p.name[lang]))}" target="_blank" rel="noopener">${t.askWhatsApp}</a>`}
    </div>
  </article>`).join('');

// Product filters; category links (top menu and round tiles) jump to the shop with that filter on
const products = [...document.querySelectorAll('.product')];
const filters = [...document.querySelectorAll('.filter')];
const catLinks = [...document.querySelectorAll('[data-show]')];
const setFilter = cat => {
  filters.forEach(b => {
    const on = b.dataset.filter === cat;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', on);
  });
  let shown = 0;
  products.forEach(p => {
    p.hidden = cat !== 'all' && p.dataset.cat !== cat;
    if (!p.hidden) shown++;
  });
  $('productCount').textContent = t.products(shown);
  catLinks.forEach(l => l.classList.toggle('is-active', !!l.closest('.cats') && l.dataset.show === cat));
};
filters.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));
catLinks.forEach(l => l.addEventListener('click', () => setFilter(l.dataset.show)));
setFilter('all');

// ---------- Cart (kept in this browser between visits) ----------
const CART_KEY = 'worxkids-cart';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { cart = {}; }
// Drop anything that is no longer for sale
Object.keys(cart).forEach(id => { if (!forSale(byId[id]) || !(cart[id] > 0)) delete cart[id]; });

const saveCart = () => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCart(); };
const cartLines = () => Object.entries(cart).map(([id, qty]) => ({ p: byId[id], qty }));
const subtotal = () => cartLines().reduce((sum, l) => sum + l.p.price * l.qty, 0);
const deliveryKnown = () => typeof STORE.deliveryFee === 'number';
const total = () => subtotal() + (deliveryKnown() ? STORE.deliveryFee : 0);
const totalText = () => t.money(total()) + (deliveryKnown() ? '' : t.plusDelivery);

const drawer = $('cart');
const views = { cart: $('cartView'), checkout: $('checkoutForm'), done: $('orderDone') };
const showView = name => {
  Object.entries(views).forEach(([k, el]) => { el.hidden = k !== name; });
  $('toCheckout').hidden = name !== 'cart';
  $('cartFoot').hidden = name === 'done' || !cartLines().length;
};

function renderCart() {
  const lines = cartLines();
  const count = lines.reduce((n, l) => n + l.qty, 0);
  $('cartCount').textContent = count;
  $('cartCount').hidden = !count;
  $('cartEmpty').hidden = !!lines.length;
  $('cartItems').innerHTML = lines.map(({ p, qty }) => `
    <li class="cart__item">
      <img src="assets/img/products/${esc(p.img)}" alt="" width="72" height="72">
      <div>
        <p class="cart__name">${esc(p.name[lang])}</p>
        <p class="cart__price">${t.money(p.price)}</p>
        <div class="qty">
          <button type="button" data-qty="${esc(p.id)}" data-step="-1" aria-label="${t.decrease}">−</button>
          <span>${qty}</span>
          <button type="button" data-qty="${esc(p.id)}" data-step="1" aria-label="${t.increase}">+</button>
        </div>
      </div>
      <button type="button" class="cart__remove" data-remove="${esc(p.id)}" aria-label="${t.remove}">×</button>
    </li>`).join('');
  $('subtotal').textContent = t.money(subtotal());
  $('delivery').textContent = !deliveryKnown() ? t.deliveryLater : STORE.deliveryFee === 0 ? t.free : t.money(STORE.deliveryFee);
  document.querySelectorAll('.js-total').forEach(el => { el.textContent = totalText(); });
  // Emptied the cart while checking out: go back to the (empty) cart
  if (!lines.length && !views.checkout.hidden) showView('cart');
  else if (views.done.hidden) $('cartFoot').hidden = !lines.length;
}

let lastFocus = null;
const openCart = () => {
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

$('products').addEventListener('click', e => {
  const btn = e.target.closest('.product__add');
  if (!btn) return;
  const p = byId[btn.dataset.id];
  cart[p.id] = (cart[p.id] || 0) + 1;
  saveCart();
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

views.checkout.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const o = t.order;
  const id = 'WK-' + Date.now().toString(36).slice(-5).toUpperCase();
  const lines = [
    o.title(id),
    '',
    ...cartLines().map(({ p, qty }) => `${qty} × ${p.name[lang]} — ${t.money(p.price * qty)}`),
    '',
    `${o.subtotal}: ${t.money(subtotal())}`,
    `${o.delivery}: ${$('delivery').textContent}`,
    `${o.total}: ${totalText()}`,
    '',
    `${o.name}: ${data.get('name')}`,
    `${o.phone}: ${data.get('phone')}`,
    `${o.area}: ${data.get('area')}`,
    `${o.address}: ${data.get('address')}`,
    data.get('notes') ? `${o.notes}: ${data.get('notes')}` : null,
    '',
    STORE.accountNumber ? o.payment(STORE.bank) : o.paymentAsk,
  ].filter(l => l !== null);
  const link = waLink(lines.join('\n'));
  window.open(link, '_blank', 'noopener');
  $('orderId').textContent = id;
  $('orderResend').href = link;
  cart = {};
  saveCart();
  e.target.reset();
  showView('done');
});

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
document.querySelectorAll('.product, .tiles li, .custom__card, .checks li, .steps li, .section__head').forEach(el => {
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
