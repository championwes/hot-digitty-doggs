// Hot Digitty Doggs LLC — site interactions

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close the mobile nav after tapping a link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Quote form → prefilled mailto
const QUOTE_EMAIL = 'hotdigittydoggs@gmail.com';

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const get = (name) => (f.elements[name] ? f.elements[name].value.trim() : '');

  const subject = `Quote Request — ${get('company') || get('name') || 'Website'}`;
  const body = [
    'New quote request from hotdigittydoggs website:',
    '',
    `Name:         ${get('name')}`,
    `Company:      ${get('company')}`,
    `Email:        ${get('email')}`,
    `Phone:        ${get('phone')}`,
    `Freight Type: ${get('type')}`,
    `Lane:         ${get('lane')}`,
    '',
    'Load details:',
    get('details'),
  ].join('\n');

  window.location.href =
    `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const note = document.getElementById('formNote');
  note.textContent = 'Opening your email client… If nothing happens, email us directly at ' + QUOTE_EMAIL + '.';
});
