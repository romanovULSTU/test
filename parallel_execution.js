'use  strict';

// async function getAllProducts() {
//   const response = await fetch('https://dummyjson.com/products');
//   return response.json();
// }

// async function getProduct(id) {
//   const response = await fetch('https://dummyjson.com/products/' + id);
//   return response.json();
// }

// async function getProductError(id) {
//   const response = await fetch('https://dummyjsons.com/products/' + id);
//   return response.json();
// }

// async function main() {
//   // const res1 = await Promise.all([getProduct(1), getProduct(2)]);
//   // console.log(res1);

//   // const res2 = await Promise.allSettled([getProduct(1), getProductError(2)]);
//   // console.log(res2);

//   const res3 = await Promise.any([
//     getProduct(1),
//     getProduct(2),
//     getProductError(3),
//   ]);
//   console.log(res3);
// }

// main();

async function main() {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'michaelw',
      password: 'michaelwpass',
    }),
  });
  const data = await res.json();
  console.log(data);
}

main();
