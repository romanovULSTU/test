"use strict";

// const result = fetch("https://dummyjson.com/products/"); // контейнер в который придет ответ
// console.log(result); // fetch возвращает промис

// fetch("https://dummyjson.com/products")
//   .then((response) => {
//     console.log(response); // Promise {<pending>}
//     return response.json("error");
//   })
//   .then(({ products }) => {
//     console.log(products);
//   });

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

function getData(url, errorMessage, method = "GET") {
  return fetch(url, { method }).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`);
    }
    return response.json();
  });
}

const URL = "https://dummyjson.com/products";
getData(URL, "Can't get data")
  .then(({ products }) => {
    console.log(products);
    return getData(`${URL}/` + products[0].id, "Can't get product");
  })
  .then((data) => console.log(data))
  .catch((error) => {
    const el = document.getElementById("output");
    el.innerHTML = error.message;
  });
