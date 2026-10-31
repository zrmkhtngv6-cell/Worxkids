// WhatsApp number used by the order buttons, form and floating button (international format, digits only)
const WHATSAPP_NUMBER = '201117776589';

// Text set from script, per page language (index.html = en, ar.html = ar)
const STRINGS = {
  en: {
    products: n => `${n} product${n === 1 ? '' : 's'}`,
    waIntro: 'Hello WORX Kids, I would like a free quote.',
    waOrder: name => `Hello WORX Kids, I'm interested in the ${name}. Could you send me the price and details?`,
    waName: 'Name', waPhone: 'Phone', waProject: 'Project', waAge: "Child's age", waMessage: 'Message',
  },
  ar: {
    products: n => `${n} منتج`,
    waIntro: 'مرحباً WORX Kids، أود الحصول على عرض سعر مجاني.',
    waOrder: name => `مرحباً WORX Kids، أنا مهتم بـ ${name}. هل يمكنكم إرسال السعر والتفاصيل؟`,
    waName: 'الاسم', waPhone: 'الهاتف', waProject: 'المشروع', waAge: 'عمر الطفل', waMessage: 'الرسالة',
  },
};
const t = STRINGS[document.documentElement.lang] || STRINGS.en;
const waLink = text => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Header shadow on scroll
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Product filters
const products = [...document.querySelectorAll('.product')];
const filters = [...document.querySelectorAll('.filter')];
const count = document.getElementById('productCount');
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
  count.textContent = t.products(shown);
  catLinks.forEach(l => l.classList.toggle('is-active', l.closest('.cats') && l.dataset.show === cat));
};
filters.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.filter)));
// Category links (top nav and round tiles) jump to the shop with that filter on
catLinks.forEach(l => l.addEventListener('click', () => setFilter(l.dataset.show)));
setFilter('all');

// "Order on WhatsApp" buttons carry the product name
products.forEach(p => {
  const name = p.querySelector('h3').textContent.trim();
  const btn = p.querySelector('.product__order');
  btn.href = waLink(t.waOrder(name));
  btn.target = '_blank';
  btn.rel = 'noopener';
});

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
document.getElementById('quoteForm').addEventListener('submit', e => {
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

document.getElementById('year').textContent = new Date().getFullYear();
