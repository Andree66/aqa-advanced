/*Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі*/

const users = [
    { name: "John", email: "john@mail.com", age: 30 },
    { name: "Jane", email: "jane@mail.com", age: 25 },
    { name: "Mike", email: "mike@mail.com", age: 40 }
  ];

  for (const { name, email, age } of users) {
   
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
  }