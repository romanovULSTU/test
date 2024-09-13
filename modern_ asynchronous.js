"use strict";

// асинхронная функция = промис
// async function getProducts() {
//   try {
//     const productsResponse = await fetch("https://dummyjson.com/products");
//     if (!productsResponse.ok) {
//       throw new Error(productsResponse.status);
//     }
//     const { products } = await productsResponse.json();
//     console.log(products);

//     const productResponse = await fetch(
//       "https://dummyjson.com/products/" + products[0].id
//     );
//     const product = await productResponse.json();
//     console.log(product);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log("Finally");
//   }
// }

// getProducts();
// console.log("End");

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ latitude: coords.latitude, longitude: coords.longitude });
      },
      (err) => {
        reject(err);
      }
    );
  });
}

async function getLocation() {
  try {
    const { latitude, longitude } = await getPosition();
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

getLocation();
