"use strict";

console.log(1);

const messages = [
  "Мистер Анджело?",
  "Мистер Сальери передает вам привет",
  "Boom!",
];
const deadAngelo = setTimeout(
  (message1, message2, message3) => {
    console.log(message1);
    console.log(message2);
    console.log(message3);
  },
  1000,
  ...messages
);

console.log(3);
const mark1 = performance.now();

setTimeout(() => {
  const mark2 = performance.now();
  console.log(mark2 - mark1);
}, 1000);

const interval = setInterval(() => {
  console.log(new Date());
}, 1000);

const timer = setTimeout(() => {
  clearInterval(interval);
}, 5000);

console.log(interval);
console.log(timer);

function pizzaTimer(time) {
  const intTimer = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("ru-RU", {
        minute: "numeric",
        second: "numeric",
      }).format(new Date(time * 1000 + 100))
    );
    time -= 1;
    if (time < 0) {
      const timer = setTimeout(() => {
        console.log("питса готова");
        clearInterval(intTimer);
      }, 0);
    }
  }, 1000);
  return "Вы поставили питсу готовиться!";
}
console.log(pizzaTimer(12));

function pizzaTimer(time) {
  const end = new Date().getTime() + time * 1000;
  const intTimer = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("ru-RU", {
        minute: "numeric",
        second: "numeric",
      }).format(end + 100 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    console.log("питса готова");
    clearInterval(intTimer);
  }, time * 1000);
}
