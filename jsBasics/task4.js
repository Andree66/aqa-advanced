//Завдання 4: Обчислення площі та об'єму

/*Завдання 4.1

*π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

Створіть змінну radius і присвойте їй числове значення радіуса кола.
Обчисліть площу кола за формулою π * radius^2 і виведіть результат.*/

const radius1 = 50;
const result1 = Math.PI * radius1 * radius1;
console.log(result1.toFixed(2));

/*Завдання 4.2

Створіть змінну length і присвойте їй числове значення довжини прямокутника.
Створіть змінну width і присвойте їй числове значення ширини прямокутника.
Обчисліть площу прямокутника за формулою length * width і виведіть результат.*/

let length = 10;
let width = 5;
let result2 = length*width;
console.log(result2);

/*Завдання 4.3

Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
Створіть змінну height і присвойте їй числове значення висоти циліндра.
Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
Округліть кожне отримане значення до 2 значень після крапки */

let radius3 = 20;
let height = 10;
const result3 = Math.PI * radius1 * radius1 * height;
console.log(result3.toFixed(2));
