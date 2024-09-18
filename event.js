'use strict';

// function generate() {}
// const button = document.querySelector('.generate');

// const eventHandler = function (event) {
//   console.log('Event 1');
// };

// button.addEventListener('mouseover', eventHandler);
// button.addEventListener('click', (event) => {
//   console.log('Event 2');
//   button.removeEventListener('click', eventHandler);
// });

const wrapper = document.getElementById('twentyone');

for (let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.innerHTML = `User id ${i}`;
  el.setAttribute('data-id', i); // добавляем атрибут
  wrapper.append(el);
}

wrapper.addEventListener('click', (event) => {
  // подписываемся родителем на событие
  const i = event.target.getAttribute('data-id'); // получаем атрибут
  console.log(`Deleted user id ${i}`); // работаем с любым элементом по id
});
