console.log('Hello bro');

/*let balance = prompt('Enter balance');
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
console.log('Операція завершена');*/

const myMoney = 1000;
console.log(`I have ${myMoney} dollars`);

const gift = prompt('Give me some money');

const updatedVallet = Number(myMoney) + Number(gift);

console.log(`now I am rich, I have ${updatedVallet} dollars, ty for your gift <3`);
