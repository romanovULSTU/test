"use strict";

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   buy() {
//     console.log("buy");
//   }

//   info() {
//     console.log(`${this.title} - ${this.author}`);
//   }
// }

// class AudioBook extends Book {
//   constructor(title, author, lenMin) {
//     super(title, author);
//     this.lenMin = lenMin;
//   }

//   log = function () {
//     console.log(`${this.title} - ${this.lenMin}`);
//   };
// }

// const book = new AudioBook("Lord of the Rings", "Cockin", 300);
// book.log();
// book.buy();
// console.log(book);

// const book1 = new Book("Lord of the Rings", "Cockin");
// book1.info();

// class EBook extends Book {
//   constructor(title, author, pages) {
//     super(title, author);
//     this.pages = pages;
//   }

//   info() {
//     console.log(`${this.title} - ${this.author} - ${this.pages}`);
//   }
// }

// const book2 = new EBook("Lord of the Rings", "Cockin", 300);
// book2.info();

// Класс меча, который имеет силу и метод нанесения урона
class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.recieveDamage(this.#damage);
  }
}

// Класс врага со здоровьем и методом получения урона
class Enemy {
  constructor(health) {
    this.health = health;
  }

  recieveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Orc extends Enemy {
  #evasion;
  constructor(health) {
    super(health);
    this.#evasion = 0.5;
  }

  recieveDamage(damage) {
    if (Math.random() < 0.5) {
      this.health = this.health - damage;

      console.log(`*hit - ${this.health}`);
    } else {
      console.log("miss");
    }
  }
}

class Troll extends Enemy {}

const sword = new Sword(10);
const orc = new Orc(100);
const troll = new Troll(1000);
sword.strike(orc);
sword.strike(orc);
sword.strike(troll);
sword.strike(troll);

const arr = [1, 2, 3];
arr
  .map((a) => a * 2)
  .filter((a) => a > 0)
  .find((a) => a < 10); // чейнинг методов

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this; // возвращаем ссылку на наш объект
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
const res = wallet.add(100).remove(10).add(10); // remove применяется к тому что возвращает add
console.log(res);

class Builder {
  house = {};

  addRoof() {
    this.house.roof = "Roof";
    return this;
  }
  addFloor() {
    this.house.floor = "Floor";
    return this;
  }

  execute() {
    return this.house;
  }
}

const res2 = new Builder().addFloor().addRoof();
console.log(res2);
