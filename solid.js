"use strict";

class Character {
  #inventory = [];
  #health = 100;

  pickItem(item) {
    this.#inventory.push(item);
  }

  receiveDamage(damage) {
    this.#health -= damage;
  }
}

// class DB {
//   save(item) {
//     localStorage.setItem("char", item);
//   }

//   load() {}
// }

class Treasure {
  value = 0;
}

class Coin extends Treasure {
  value = 1;
}

class Crystal extends Treasure {
  value = 10;
}

class Brilliant extends Treasure {
  value = 20;
}

class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value;
  }
}

class User {
  #role = "user";
  getRole() {
    return this.#role;
  }
}

class Admin extends User {
  #role = ["admin", "user"];

  getRole() {
    return this.#role.join(", ");
  }
}

/**
 * Logs the role of the given user
 * @param {User|Admin} user User or Admin object
 */
function logRole(user) {
  console.log("Role: " + user.getRole().toUpperCase());
}
const admin = new Admin();
console.log(admin.getRole());
logRole(new User());
logRole(new Admin());

class Weapon {
  cost;

  dealDamage() {}
}

class Rifle extends Weapon {
  shoot() {
    this.dealDamage();
  }
}

class Sword extends Weapon {
  strike() {
    this.dealDamage();
  }
}

class DB {
  save(items) {
    console.log(`Saved: ${items}`);
  }
}

class MongoDB extends DB {
  save(items) {
    console.log(`Saved to Mongo: ${items}`);
  }
}
class ToDoList {
  items = [1, 2, 3];
  db;
  constructor(db) {
    this.db = db;
  }
  saveToDB() {
    this.db.save(this.items);
  }
}

const list1 = new ToDoList(new DB());
list1.saveToDB();
const list2 = new ToDoList(new MongoDB());
list2.saveToDB();
