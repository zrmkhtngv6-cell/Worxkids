// WhatsApp number used by the form and floating button (international format, digits only)
const WHATSAPP_NUMBER = '201117776589';

// Text set from script, per page language (index.html = en, ar.html = ar)
const STRINGS = {
  en: {
    openMenu: 'Open menu', closeMenu: 'Close menu',
    waIntro: 'Hello WORX Kids, I would like a free quote.', waName: 'Name', waPhone: 'Phone', waProject: 'Project', waAge: "Child's age", waMessage: 'Message',
  },
  ar: {
    openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة',
    waIntro: 'مرحباً WORX Kids، أود الحصول على عرض سعر مجاني.', waName: 'الاسم', waPhone: 'الهاتف', waProject: 'المشروع', waAge: 'عمر الطفل', waMessage: 'الرسالة',
  },
};
const t = STRINGS[document.documentElement.lang] || STRINGS.en;

const header = document.querySelector('.header');
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');

// Mobile menu
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? t.closeMenu : t.openMenu);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', t.openMenu);
}));

// Header shadow on scroll
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section in view
const links = [...nav.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => sectionObserver.observe(s));

// Fade blocks in as they scroll into view
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.card, .world, .checks li, .steps li, .section__head').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Floating button opens a WhatsApp chat
document.querySelector('.fab').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waIntro)}`;

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
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
