// --- TYPING EFFECT ---
const el = document.getElementById("typer");
const phrases = [
  "I optimize intelligence.",
  "I align language with action.",
  "I explore uncertainty.",
  "I research Human & Machines."
];

// Define which words to highlight and their colors
const highlights = {
  "optimize": "#b30000",   // crimson
  "align": "#2b66c3",    // deep blue
  "explore": "#00897b",       // teal
  "Machines": "#c43d00"          // orange accent
};

let i = 0, j = 0, deleting = false;
let delay = 0; // extra delay before deleting

function tick() {
  const full = phrases[i];
  const current = full.slice(0, j) || " ";
  
  // Show text normally while typing/deleting
  el.innerHTML = current;

  if (!deleting && j < full.length) {
    j++; // typing forward
  } else if (deleting && j > 0) {
    j--; // deleting backward
  } else if (!deleting && j === full.length) {
    // finished typing full phrase
    highlightWords();       // add colors ✨
    delay = 1500;           // pause before deleting
    deleting = true;
  } else if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % phrases.length; // move to next phrase
  }

  const speed = deleting ? 40 : 80;
  setTimeout(tick, delay || speed);
  delay = 0;
}


function highlightWords() {
  let html = el.innerHTML;
  for (const [word, color] of Object.entries(highlights)) {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    html = html.replace(
      regex,
      `<span style="color:${color}; font-weight:600;">$&</span>`
    );
  }
  el.innerHTML = html;
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
