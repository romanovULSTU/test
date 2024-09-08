"use strict";

const res = fetch("https://dummyjson.com/products/1").; // контейнер в который придет ответ
console.log(res); // fetch возвращает промис

// fetch("https://dummyjson.com/products/1").then((response) => {
//   console.log(response);  // Promise {<pending>}
//   return response.json();
// }).then((data) => {
//     console.log(data);
// })

const result = fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then(({ products }) => {
    console.log(products);
    return fetch("https://dummyjson.com/products/" + products[0].id);
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
