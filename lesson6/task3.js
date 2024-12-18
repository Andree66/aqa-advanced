//Завдання 3

/*Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає 
повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”*/



function checkOrder(available, ordered) {
  switch (true) {
    case available < ordered:
        console.log('“Your order is too large, we don’t have enough goods.”');
        break;
    case ordered === 0:
        console.log('“Your order is empty”');
        break;
    case available > ordered:
        console.log('“Your order is accepted!”');
        break;
    }
}    
checkOrder(2, 1);

