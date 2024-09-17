'use strict';

console.log(document);

const el = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
console.log(el);
console.log(el2);

const el3 = document.getElementsByClassName('wrapper');
const el4 = document.getElementsByTagName('meta');
console.log(el3[0]);
console.log(el4);

el.classList.add('active');
el.classList.remove('wrapper');

const button = document.createElement('button');
button.innerHTML = 'Hello';

const button2 = document.createElement('button');
button2.innerHTML = 'Hello2';

// el.append(button);
// el.prepend(button2);
el.before(button2);
el.after(button);

function getCard(event) {
  console.log(`X offset: ${window.pageXOffset}`);
  console.log(`Y offset: ${window.pageYOffset}`);
  console.log(`clienr width: ${document.documentElement.clientWidth}`);
  console.log(`clienr height: ${document.documentElement.clientHeight}`);

  const el = document.querySelector('.down');
  console.log(el.getBoundingClientRect());

  const rect = el.getBoundingClientRect();

  window.scrollTo({
    left: window.pageXOffset + rect.left,
    top: window.pageYOffset + rect.top,
    behavior: 'smooth',
  });
}

const card = document.querySelector('.sit');
card.addEventListener('click', getCard);
