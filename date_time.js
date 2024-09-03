const now = new Date();
console.log(now);
console.log(new Date("11-08-2021"));
console.log(new Date("11/08/2022"));
console.log(new Date("2023/11/08"));
console.log(new Date("11 Aug 2020"));

console.log(new Date(2024, 7, 30)); // Fri Aug 30 2024 00:00:00 GMT+0300 (GMT+03:00)
console.log(new Date(2024, 7, 52)); // Sat Sep 21 2024 00:00:00 GMT+0300 (GMT+03:00)
console.log(new Date(2024, 7, 12, 10, 5, 23));
console.log(new Date(2024, 7, 12, 10 + 100));
console.log(new Date(0)); // Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)
console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 02:00:00 GMT+0200 (GMT+03:00)
console.log(Date.now()); // 1725013681895 миллисекунд
console.log(new Date(Date.now())); // Fri Aug 30 2024 13:28:01 GMT+0300 (GMT+03:00)

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(new Date().getSeconds());
console.log(now.getTime()); // 1725014394458 миллисекунд

console.log(new Date(now.setFullYear(2030))); // Fri Aug 30 2030 13:40:49 GMT+0300 (GMT+03:00)

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2025, 11, 15);
console.log(Number(date1));
console.log(Number(date2));
console.log(date2 - date1);

function getDaysBetweenDates(dateFirst, dateSecond) {
  return (dateSecond - dateFirst) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2));

const first = new Date(2024, 10, 4);
const second = new Date(2024, 11, 15);
const third = new Date(2024, 10, 4);
console.log(first.getTime() < second.getTime());
console.log(first < second);

console.log(first.getTime() === third.getTime()); // TRUE
console.log(first.getTime() === third.getTime()); // СРАВНИВАЕТ КОЛИЧЕСТВО МИЛЛИСЕКУНД - TIME STAMP
console.log(Number(first) === Number(third)); // true
console.log(+first === +third); // true

const option = {
  name: "Vasya",
  birthday: "08/30/2024",
};

// /**
//  * @function isBirthday
//  * @description Checks if today is a birthday of a given person
//  * @param {object} person - person object with birthday property
//  * @returns {boolean} true if today is a birthday, false otherwise
//  */
function isBirthday({ birthday }) {
  const birthdayDate = new Date(birthday);
  const now = new Date();
  return birthdayDate.getMonth() === now.getMonth() &&
    birthdayDate.getDate() === now.getDate()
    ? true
    : false;
}
console.log("---");
console.log(isBirthday(option));

const date = new Date();
console.log(new Intl.DateTimeFormat("ru-RU").format(date));
const options = {
  hour: "numeric",
  minute: "numeric",
};
console.log(new Intl.DateTimeFormat("ru-RU", options).format(date));
const options2 = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  month: "long",
  weekday: "short",
  year: "2-digit",
};
console.log(new Intl.DateTimeFormat("en-US", options2).format(date));
console.log(new Intl.DateTimeFormat("ru-RU", options2).format(date));
console.log(new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(date));

console.log(navigator.language);
console.log(new Intl.DateTimeFormat(navigator.language, options).format(date));
