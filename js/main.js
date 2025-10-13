const el = document.getElementById("typer");
const phrases = [
  "I optimize intelligence.",
  "I align language with action.",
  "I explore uncertainty.",
  "I research Human & Machines."
];

let i=0, j=0, deleting=false;

function tick(){
  const full = phrases[i];
  el.textContent = full.slice(0, j) || " ";
  if(!deleting && j < full.length) j++;
  else if(deleting && j > 0) j--;
  else {
    deleting = !deleting;
    if(!deleting) i = (i+1) % phrases.length;
  }
  setTimeout(tick, deleting ? 40 : 80);
}
tick();


// shrink nav on scroll
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');

function onScroll(){
  if (window.scrollY > 20) nav.classList.add('shrink');
  else nav.classList.remove('shrink');
}
window.addEventListener('scroll', onScroll);
onScroll();

// mobile menu toggle
burger?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// short, bold typing effect (optional)
const phrases = [
  "Optimizing intelligence.",
  "Aligning language with action.",
  "Teaching machines to decide.",
  "Exploring uncertainty."
];
const el = document.getElementById("typer");
let i=0, j=0, del=false;
(function tick(){
  const s = phrases[i];
  el.textContent = s.slice(0, j) || " ";
  if(!del && j < s.length) j++;
  else if(del && j > 0) j--;
  else { del = !del; if(!del) i = (i+1) % phrases.length; }
  setTimeout(tick, del ? 40 : 80);
})();
