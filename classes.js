"use strict";

// const Book = function (title, author) {
//   this.title = title;
//   this.author = author;
// };
// Book.prototype.isRead = false;

// const lordOfTheRings = new Book("1", "Lord of the Rings");

// console.log(Book.prototype.__proto__);
// new Object();
// console.log(Object.prototype.__proto__);

// //
// console.log(lordOfTheRings.hasOwnProperty("isRead")); // false
// console.log(lordOfTheRings.hasOwnProperty("title")); // true
// console.log(lordOfTheRings.isRead); // false

class Book {
  isRead = false;
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read() {
    this.isRead = true;
  }
}

const lordOfTheRings = new Book("Lord of the Rings", "Cockin");
console.log(lordOfTheRings);
console.log(lordOfTheRings instanceof Book);
console.log(lordOfTheRings.__proto__);

const task = {
  title: "Task 1",
  dueTo: new Date("2023/01/01"),
  get isOverdue() {
    return this.dueTo < new Date();
  },

  set isOverdue(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date();
    }
  },
};
console.log(task.isOverdue);
task.isOverdue = false;
console.log(task);

class Task {
  constructor(title, dueTo) {
    this.title = title;
    this.dueTo = dueTo;
  }

  get isOverdue() {
    return this.dueTo < new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date;
  }
}

const newTask = new Task("Task 1", new Date());
console.log(newTask.isOverdue);
console.log((newTask.dueDate = new Date("2025/01/01")));
console.log(newTask);

/*--------------STATIC------------------*/

// const Test2 = function () {};
// Test2.hello = function () {
//   // static = добавление в сам класс а не прототип
//   console.log("hello");
// };
// Test2.hello();

class Test {
  static a = 1;
  static hello() {
    console.log("hello");
  }

  static {
    let b = 5;
    this.a = 5;
  }
}
Test.hello();

// class Car {
//   #vin = 6789; // приватное свойство
//   speed;
//   #test2;

//   constructor() {
//     this.#test2 = 5; // error must be declared before constructor
//     this.test3 = 5; // работает
//     delete this.#vin; // error private can not be deleted
//   }

//   #changeVin() {
//     // приватный метод
//     console.log("changed");
//   }

//   test() {
//     this.#changeVin();
//   }

//   static #field = 3;

//   static {
//     this.#field = 4;
//   }
// }

// const car = new Car();
// car.test(); // 'changed'
// car.#changeVin(); // error

// class User {
//   #login;
//   #password;
//   constructor(login, password) {
//     this.#login = login;
//     this.#password = password.split("").reverse().join("");
//   }

//   validPassword(pass) {
//     this.passcheck = pass.split("").reverse().join("");
//     if (this.#password == this.pass) {
//       console.log("Пароли совпадают");
//       return true;
//     } else {
//       return false;
//     }
//   }

//   get getLogin() {
//     console.log(this.#login);
//   }

//   get getPassword() {
//     return this.#password;
//   }

//   setPassword(passcheck, newPassword) {
//     if (!this.validPassword(passcheck)) {
//       console.log("validPassword: Пароли не совпадают");
//       return;
//     } else {
//       this.#password = newPassword.split("").reverse().join("");
//       console.log("setPassword: Пароль успешно изменён");
//     }
//   }
// }

// const user1 = new User("romanov", "12345");
// user1.getLogin;
// user1.validPassword("12345");
// user1.setPassword("12345", "34567");

class User {
  #login;
  #_password; // временное приватное свойство password->setter #password(pass)(_#password => pass.split("").reverse().join(""))
  constructor(login, password) {
    this.#login = login;
    this.#password = password; // setter
  }

  set #password(pass) {
    this.#_password = pass.split("").reverse().join("");
  }

  get #password() {
    return this.#_password.split("").reverse().join("");
  }

  get getLogin() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass; // getter
  }

  setPassword(oldPass, newPass) {
    if (!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass; // setter
    return true;
  }
}

const user = new User("romanov", "12345");
console.log(user);
console.log(user.getLogin);
console.log(user.checkPassword("12345"));
console.log(user.setPassword("12345", "345"));
console.log(user);

const Logger = {
  init(message, date) {
    this.message = message;
    this.date = date;
  },
  log() {
    console.log("log");
  },
};

const logger = Object.create(Logger);
logger.log();
logger.init("hello", "2023-01-01");
console.log(logger);

const admin = Object.create(logger);
console.log(admin);
