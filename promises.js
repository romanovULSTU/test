"use strict";

const result = fetch("https://dummyjson.com/products/"); // контейнер в который придет ответ
console.log(result); // fetch возвращает промис

// fetch("https://dummyjson.com/products/1").then((response) => {
//   console.log(response);  // Promise {<pending>}
//   return response.json();
// }).then((data) => {
//     console.log(data);
// })

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then(({ products }) => {
//     console.log(products);
//     return fetch("https://dummyjson.com/products/" + products[0].id);
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finally"));

function createSelect(arr) {
  const el = document.getElementById("output");
  el.innerHTML = `<select>
  ${arr.map((el) => `<option value="${el}">${el}</option>`)}
  </select>`;
}
function getCategories() {
  fetch("https://dummyjson.com/products/categories")
    .then((response) => response.json())
    .then((data) => {
      let categories = [];
      for (const category of data) {
        categories.push(category.slug);
      }
      createSelect(categories);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally"));
}

getCategories();
