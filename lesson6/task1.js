//Завдання 1

/*Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/


///////////////function declaration
function CalculateRectangleArea(width, height) {
    console.log (`The Rectangle Area is ${width*height}`);

}
CalculateRectangleArea (30, 40);

/////////////function expression
const rectangleArea = function(width, height) {
    console.log (`The Rectangle Area is ${width*height}`);
}
rectangleArea (10, 20);

//////////////arrow function
const rectangleArea3 = (width, height) => {
    console.log (`The Rectangle Area is ${width*height}`);

}
rectangleArea3 (40, 50);