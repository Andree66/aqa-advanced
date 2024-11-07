// string
// number
// boolean
// undefined
// NaN
// Infinity
// BigInt
// Symbol

// ---Завдання 1: Оголошення змінних для примітивних типів---

/* Створіть програму, в якій ви оголосите змінні 
для кожного з примітивних типів даних: рядок, число, буль, null
та undefined. Присвойте їм значення та виведіть кожну змінну на консоль.*/

// string
let user1 = 'Ivan';
console.log(typeof user1);
console.log(user1);

// number
let age = 33;
console.log(typeof age);
console.log(age);

// boolean
let isUserExist = true;
let isUserRemoved = false;
console.log(typeof isUserExist, isUserExist);
console.log(typeof isUserRemoved, isUserRemoved);

// undefined
let underfinedVar;
console.log(typeof underfinedVar, underfinedVar);

// NaN
let result = "text" * 5;
console.log(result);

// Infinity
console.log(10/0);

// BigInt
const bigValue = 87735787345748545722323352352525252342343n;
console.log (typeof bigValue, bigValue);

// Symbol
const uniq1 = Symbol('value1');
const uniq2 = Symbol('value1');
console.log(uniq1 === uniq2);