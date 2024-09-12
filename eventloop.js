"use strict";

// console.log(1); // 1

// setTimeout(() => {
//   // 4
//   console.log(2);
// }, 0);
// Promise.resolve(3).then((res) => {
//   console.log(res); // 3
//   for (let i = 0; i < 1000000; i++) {} // 2 блокировка
// }); // третий

// console.log(4); // 2

// for (let i = 0; i < 1000000; i++) {} // 1 блокировка

// const prom = new Promise((resolve, reject) => {
//   if (new Date() < new Date(2030, 0, 1)) {
//     reject(new Error("Error"));
//   }
//   resolve("success"); // resolve(data)
// });

// prom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// function timeout(sec) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, sec * 1000);
//   });
// }

// timeout(1)
//   .then(() => {
//     console.log(1);
//     return timeout(1);
//   })
//   .then(() => {
//     console.log(1);
//     return timeout(1);
//   });

// const prom = new Promise((resolve) => {
//   // 1 последовательное выполнение кода
//   console.log("Constructpr");
//   setTimeout(() => {
//     // 4 Ассинхронный код , делегируется WEB API
//     resolve("Timer");
//   }, 1000);
// });
// prom.then((data) => console.log(data));

// Promise.resolve("Instant").then((data) => console.log(data)); // 2
// Promise.reject(new Error("Error")).catch((error) => console.log(error)); // 3

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", function () {
      if (request.status > 400) {
        reject(new Error(this.status));
      }
      resolve(this.responseText);
    });

    request.addEventListener("error", function () {});

    request.addEventListener("timeout", function () {
      reject(new Error("Timeout"));
    });
  });
}

myFetch("https://dummyjson.com/products")
  .then((data) => console.log(JSON.parse(data)))
  .catch((error) => console.error(error));
