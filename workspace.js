console.log('Hello bro');

let balance = 1000;
const payment = 2000;

console.log(
  `Загальна ціна замовлення ${payment} кредитів.Перевіряємо кількість доступних кредитів на вашому ранунку.`
);
if (balance >= payment) {
  balance = balance - payment;
  console.log(`На вашому рахунку залишилося ${balance} кредитів.`);
} else {
  console.log('На рахунку недостатньо коштів для проведення операції!');
}
console.log('Операція завершена');
