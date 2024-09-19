'use strict';

const wrapper = document.getElementById('twentyone');
const input = document.querySelector('.input');

for (let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.innerHTML = i;
  wrapper.append(el);
}

function search(event) {
  // функция для события onchange
  const inputValue = event.target.value; // содержание поиска
  for (const el of [...wrapper.children]) {
    if (el.innerHTML.includes(inputValue)) {
      el.classList.add('yellow'); // background yellow
      continue;
    }
    el.classList.remove('yellow');
  }
}
