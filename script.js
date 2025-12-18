console.log('script.js chargé');

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('menu-close');

function openMenu(){
  menu.classList.add('show');
  overlay.classList.add('show');
  toggle.setAttribute('aria-expanded','true');
  menu.setAttribute('aria-hidden','false');
  if (overlay.hasAttribute('hidden')) overlay.removeAttribute('hidden');
  overlay.setAttribute('aria-hidden','false');
  toggle.setAttribute('aria-label','Fermer le menu');
  // permettre focus programmatique sur bouton fermer
  if(closeBtn) closeBtn.focus();
}

function closeMenu(){
  menu.classList.remove('show');
  overlay.classList.remove('show');
  toggle.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-hidden','true');
  overlay.setAttribute('aria-hidden','true');
  overlay.setAttribute('hidden','');
  toggle.setAttribute('aria-label','Ouvrir le menu');
  toggle.focus();
}

toggle.addEventListener('click', ()=>{
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  if(expanded) closeMenu(); else openMenu();
});

// fermer au clic sur overlay
overlay.addEventListener('click', closeMenu);

// fermer si on clique sur un lien du menu (pratique mobile)
menu.addEventListener('click', (e)=>{
  if(e.target.tagName === 'A') closeMenu();
});

// bouton X fermer
if(closeBtn) closeBtn.addEventListener('click', closeMenu);

// fermer sur Escape
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && menu.classList.contains('show')) closeMenu();
});

// Met à jour dynamiquement l'année dans le footer
document.addEventListener('DOMContentLoaded', ()=>{
  const yearEls = document.querySelectorAll('.js-year');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());
});
