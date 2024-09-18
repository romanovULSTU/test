'use strict';

const wrapper = document.getElementById('twentyone');
console.log(wrapper);

const inner = wrapper.querySelector('.inner'); // получение элемента вложенного в wrapper
const button = inner.querySelector('.button');
console.log(inner);
console.log(inner.children[0]); // первый потомок
console.log([...inner.children]); // массив потомков

console.log(inner.parentElement); // получение родительского элемента
console.log(inner.parentNode);

console.log(button.closest('.button'));
console.log(button.closest('.twentyone'));

console.log(button.previousElementSibling); // ближайший ДО элемент на уровне
console.log(button.previousSibling);

console.log(button.nextElementSibling); // ближайший ПОСЛЕ элемент на уровне
console.log(button.nextSibling);

console.log(button.parentElement.children[2]); // получение 3ей кнопки на уровне
