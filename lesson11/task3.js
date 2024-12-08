
// Функція для отримання todo з async/await
async function fetchGetTodoAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    //return data;
   console.log('GET ToDo Response:', data);
}

// Функція для отримання user з async/await
async function fetchGetUserAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    //return data;
    console.log('GET User Response:', data);
}
 fetchGetTodoAsync();
 fetchGetUserAsync();
