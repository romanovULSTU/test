"use strict";

console.log(0.1 + 0.2 === 0.3);
console.log(Number("10"));
console.log(+"20");
console.log(Number.parseInt("15", 10));
console.log(Number.parseFloat("11.5 sec", 10));
console.log(Number.parseFloat("sec 11.5", 10));

console.log(Number.isNaN(Number("123sdasdas"))); //true
console.log(Number.isNaN(Number(10 / 0))); //false
console.log(Number.isFinite(10 / 0)); //false
console.log(Number.isFinite(Number("123sdasdas"))); //false
console.log(Number.isFinite(Number(10))); //true

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.4));

console.log(Math.sqrt(36));
console.log(36 ** (1 / 2));
console.log(Math.cbrt(27));
console.log(16 ** (1 / 4));

console.log(Math.sign(-12));
console.log(Math.sign(765));
console.log(Math.abs(-345));
console.log(Math.abs(236));

console.log(Math.exp(2));

console.log(Math.max(1, 2, 3, 4, 5, -6, 7, 8, "9", "-10"));
console.log(Math.min(1, 2, "3asd", 4.2, 5, 6, true, "-8", 9, 10)); //NaN  3asd ЛОМАЕТ

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...arr));

console.log(Math.random());

console.log(Math.round(1.4));
console.log(Math.round(1.5));

console.log(Math.ceil(1.1)); // ДО ВЕРХНЕГО ЗНАЧЕНИЯ
console.log(0.1);

console.log(Math.floor(1.9)); // ДО НИЖНЕГО ЗНАЧЕНИЯ
console.log(Math.floor(1.1));

console.log(Math.trunc(1.51234234)); // УДАЛЯЕТ ЗНАЧЕНИЯ ПОСЛЕ .
console.log(Number((1.51234234).toFixed(2))); // ВОЗВРАЩАЕТ СТРОКУ

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // 0 <= Math.random() < 1
}
console.log(getRandomInt(5, 10));

console.log(15 % 2); // 1
console.log(14 % 2); // 0

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;
function isEvenFunc(n) {
  return n % 2 === 0;
}
console.log(isEven(12));
console.log(isEvenFunc(13));
console.log(isOdd(11));

const bigNum1 = 3_503_000_300; // _ РАЗДЕЛИТЕЛЬ ТОЛЬКО ДЛЯ ОБЪЯВЛЕНИЯ ЧИСЕЛ
const bigNum2 = 3503000300;
const payment = 15_12;
const paymentInR = 15.12;
const paymentInR2 = 1_5.1_2;

console.log(Number("350500000"));
console.log(Number("350_500_000"));
console.log(Number.parseInt("350_500_000")); // 350
console.log(Number.parseFloat("350_500_000"));

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max + 1);

console.log(123136532469245862034850123452349n);
console.log(BigInt(123136532469245862034850123452349));
console.log(BigInt("123136532469245862034850123452349"));

console.log(10n + 10n);
console.log(BigInt(10) + 10n);
console.log(10n * 10n);
// console.log(10 * 10n); // error
console.log(
  123136532469245862034850123452349n * 123136532469245862034850123452349n
);

console.log(10n < 20); //true
console.log(10n == 10); // true
console.log(10n === 10); // false
console.log(typeof 10n); // bigint
console.log(10n / 3n); // 3n не может быть числом с плаващей точкой

/* ----------ИНТЕРНАЦИОНАЛИЗАЦИЯ ЧИСЕЛ----------*/
const options = {
  style: "currency",
  currency: "RUB",
  useGrouping: true,
};
const options2 = {
  style: "currency",
  currency: "USD",
};
const options3 = {
  style: "decimal",
};
const options4 = {
  style: "percent",
};
const options5 = {
  style: "unit",
  unit: "celsius",
};

console.log(new Intl.NumberFormat("ru-RU", options).format(23000));
console.log(new Intl.NumberFormat("en-US", options2).format(23000));
console.log(new Intl.NumberFormat("ru-RU", options3).format(10000));
console.log(new Intl.NumberFormat("ru-RU", options4).format(0.1));
console.log(new Intl.NumberFormat("ru-RU", options5).format(25));

// /**
//  * Converts currency from one type to another
//  * @param {number} sum - initial sum of money
//  * @param {string} initialCurrency - currency of initial sum of money
//  * @param {string} convertCurrency - currency to which we want to convert
//  * @returns {string|null} converted sum of money in converted currency or null if currency is not found
//  */
function corvertCurrency(sum, initialCurrency, convertCurrency) {
  const allCurrencies = [
    {
      name: "RUB",
      mult: 1 / 90,
    },
    {
      name: "USD",
      mult: 1,
    },
    { name: "EUR", mult: 1.15 },
  ];
  const initialMult = allCurrencies.find((el) => el.name === initialCurrency);
  if (!initialMult) return null;

  const convertMult = allCurrencies.find((el) => el.name === convertCurrency);
  if (!convertMult) return null;

  sum = (sum * initialMult.mult) / convertMult.mult;
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: `${convertCurrency}`,
    useGrouping: true,
  }).format(sum);
}
console.log(corvertCurrency(10000, "RUB", "EUR"));
console.log(corvertCurrency(10000, "RUB", "USD"));
console.log(corvertCurrency(100, "USD", "EUR"));
console.log(corvertCurrency(100, "EUR", "RUB"));
console.log(corvertCurrency(100, "TG", "RUB"));
