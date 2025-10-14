// --- TYPING EFFECT ---
const el = document.getElementById("typer");
const phrases = [
  "I optimize intelligence.",
  "I align language with action.",
  "I explore uncertainty.",
  "I research Human & Machines."
];

let i = 0, j = 0, deleting = false;
let delay = 0; // extra delay before deleting

function tick() {
  const full = phrases[i];
  el.textContent = full.slice(0, j) || " ";

  if (!deleting && j < full.length) {
    j++; // typing forward
  } else if (deleting && j > 0) {
    j--; // deleting backward
  } else if (!deleting && j === full.length) {
    // finished typing a full sentence — pause before deleting
    delay = 1200; // ← increase this number (in ms) for longer pause
    deleting = true;
  } else if (deleting && j === 0) {
    // finished deleting — move to next phrase
    deleting = false;
    i = (i + 1) % phrases.length;
  }

  // adjust speed: faster delete, slower type
  const speed = deleting ? 40 : 80;
  setTimeout(tick, delay || speed);
  delay = 0; // reset delay after use
}

tick();


// --- NAVBAR BEHAVIOR ---
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero');
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');

// Make navbar turn solid black when hero scrolls out of view
new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    nav.classList.remove('solid');
  } else {
    nav.classList.add('solid');
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`
}).observe(hero);


// --- MOBILE MENU TOGGLE ---
burger?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
