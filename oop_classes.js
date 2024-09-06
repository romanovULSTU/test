"use strict";
/*Абстракция и инкапсуляция
    -название
    -режиссер
    -рейтинг
    -актеры
    -год выхода
    ...

*/

class Film {
  #name;
  #author;
  rating;
  #lenght;

  constructor(name, author, lenght) {
    this.#name = name;
    this.#author = author;
    this.#lenght = lenght;
  }

  get name() {
    return this.#name;
  }
  get author() {
    return this.#author;
  }
  get lenght() {
    return this.#lenght;
  }
}

const film = new Film("Avatar", "James Cameron", 150);
console.log(film);

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function () {
  console.log("buy");
};
/**
 * Create an AudioBook object, which is a type of Book with length in minutes.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} lenMin - The length of the book in minutes.
 * @returns {Object} An instance of the AudioBook class.
 */
const AudioBook = function (title, author, lenMin) {
  Book.call(this, title, author); // привязка контекста
  this.lenMin = lenMin;
};

AudioBook.prototype = Object.create(Book.prototype); // привязка prototype
AudioBook.prototype.constructor = AudioBook; // дополнение конструктора
AudioBook.prototype.log = function () {
  // дополнение метода
  console.log(`${this.title} - ${this.lenMin}`);
};

const book = new AudioBook("Lord of the Rings", "Cockin", 300);
book.log();
book.buy();
console.log(book);
console.log(book instanceof AudioBook);
console.log(book instanceof Book);
