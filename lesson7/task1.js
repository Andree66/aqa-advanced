//Завдання 1

/*1.Створіть функцію handleNum яка буде приймати 3 параметри.
-число
-Колбек функцію яку треба викликати якщо передане число парне
-Колбек функцію яку треба викликати якщо передане число непарне

2.Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має 
виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”

3.Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше*/

function handleNum(number, evenNumberCb, oddNumberCb) {
    
    if (number % 2 === 0) {
        evenNumberCb(number);
    }
    else {
        oddNumberCb(number);

    }
}

function handleEven(number) {
    console.log(` ${number} - “number is even”`);
}

function handleOdd(number) {
    console.log(` ${number} - “number is odd”`);
}

handleNum(13, handleEven, handleOdd);

