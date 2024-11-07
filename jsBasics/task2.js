
//Завдання 2: Конкатенація радків та шаблонний рядок

/*Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, 
 створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль.
 Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.*/

let user1 = 'Ivan';
let user2 = 'Alex';
const helloUsers = 'Hello '+ user1 + ' and '+ user2 + '. How are you?';
console.log(helloUsers);

const template =  `Hello ${user1 } and ${user2}. How are you?`;
console.log(template);

//let userName = 'Ivan';
//const tamplateString = `User name is ${userName}`;
//console.log(tamplateString);