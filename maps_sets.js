"use strict";

let wetherMap = new Map([
  ["London", 10],
  ["Moskow", 7],
  ["Dubeo", 14],
]);

wetherMap = new Map([...wetherMap].map((el) => el.reverse()));
console.log(wetherMap);

console.log([...wetherMap]);
console.log([...wetherMap.keys()]);
console.log([...wetherMap.values()]);

let a = { a: 1 };
let b = { b: 2 };
const map = new WeakMap();
map.set(a, "testA");
map.set(b, "testB");
console.log(map.get(a));
console.log(map.has(b));
console.log(map);

setTimeout(() => {
  console.log(map);
}, 1);

let cache = new WeakMap();
function getValue(obj) {
  if (!cache.has(obj)) {
    const res = 1;
    cache.set(obj, res);
  }
  return cache.get(obj);
}
const res = getValue(b);
console.log(res);

const set = new WeakSet([a, b]);
a = null;
console.log(set);
setTimeout(() => {
  console.log(set);
}, 1000);
