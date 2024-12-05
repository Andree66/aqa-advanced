
/*В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user

Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних*/



function fetchGetToDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');

}
fetchGetToDo()
  .then(response => response.json())
  .then(data => {
    console.log('GET ToDo Response:', data);
    
  })
  .catch(error => {
    console.error('Error:', error);
  });


 function fetchGetUser() {
     return fetch('https://jsonplaceholder.typicode.com/users/1');

}
fetchGetUser()
  .then(response => response.json())
  .then(data => {
    console.log('GET User Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

Promise.all([fetchGetToDo(), fetchGetUser()])
     .then(results => {
     const [todo, user] = results;
     console.log("Promise.all:", { todo, user });
 })
     .catch(error => {
     console.error("Promise.all: Error:", error.message);
 });


 Promise.race([fetchGetToDo, fetchGetUser])
     .then(result => {
         console.log("Promise.race: Перший результат:", result);
     })
     .catch(error => {
         console.error("Promise.race: Помилка:", error.message);
     });