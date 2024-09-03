"use strict";
const User = function (email, password) {
  this.email = email;
  this.password = password + "%%%";
};

const user1 = new User("123@a.ru", "123");
console.log(user1);

const user2 = new User("romanov-i.v@ro.ru", "qwerty!6254");
console.log(user2);

console.log(user2 instanceof User);
//   1 создается пустой объект
//   2 вызывается User функция
//   3 this = пустому объекту
//   4 объект связывается с prototype
//   5 возвращается объек

const Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
};
Book.prototype.read = function () {
  // дополняем исходный prototype из которого будет создана книга
  this.isRead = true;
};
const basicOOP = new Book("Basic OOP", "Igor Romanov");
Book.prototype.info = "Stadying in JS";

basicOOP.read();

console.log(basicOOP);
console.log(basicOOP.info);
console.log(basicOOP.hasOwnProperty("author"));
console.log(basicOOP.hasOwnProperty("info"));

console.log(basicOOP.__proto__);
console.log(basicOOP.__proto__ === Book.prototype);

console.log(Book.prototype.isPrototypeOf(basicOOP));
console.log(Book.prototype.isPrototypeOf(Book));

Array.prototype.first = function () {
  return this[0];
};
const array = [1, 2, 3];
a.first();

/**
 * @class Product
 * @description Class for creating a product
 * @param {number} id - product id
 * @param {string} name - product name
 * @param {number} count - product count
 */
const Product = function (id, name, count) {
  this.id = id;
  this.name = name;
  this.count = count;
};
console.log(Product.prototype);

/**
 * @class Cart
 * @description Class for creating a cart
 * @property {Product[]} products - list of products in cart
 */
const Cart = function () {
  this.products = [];
};

// Метод добавления нового продукта в корзину
Cart.prototype.addProduct = function (id, name, count) {
  if (this.products.find((product) => product.id === id)) {
    return;
  }
  const product = new Product(id, name, count);
  this.products.push(product);
};

// Метод увеличения количества продукта в корзине
Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id == id) {
      product.count++;
      return product;
    }
    return product;
  });
};

// Метод уменьшения количества продукта в корзине
Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id == id) {
        product.count--;
        return product;
      }
      return product;
    })
    .filter((product) => product.count > 0);
};

const cart = new Cart(); // Создание новой корзины
console.log(cart);
cart.addProduct(1, "Milk", 1); // Добавление молока
cart.addProduct(2, "Bread", 2); // Добавление хлеба
