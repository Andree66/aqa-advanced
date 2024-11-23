/*Завдання 4: Відбір парних чисел

Вам потрібно створити програму, яка відфільтровує парні числа з масиву.

Ось кроки, які вам потрібно виконати:

Створіть масив чисел, наприклад, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
Cтворіть новий масив, який міститиме лише парні числа.
Виведіть отриманий масив парних чисел на консоль.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pairwiseNumbers = numbers.filter(function(number) {
    
    if (number % 2 === 0) {
        return true; 
    } else {
        return false;
    }
}
);

console.log('Масив парних чисел:', pairwiseNumbers);