console.log("Hello bro");

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

/*const myMoney = 1000;
console.log(`I have ${myMoney} dollars`);

const gift = prompt('Give me some money');

const updatedVallet = Number(myMoney) + Number(gift);

console.log(`now I am rich, I have ${updatedVallet} dollars, ty for your gift <3`);*/
let orderedQuantity;
let pricePerDroid;
let deliveryFee;

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message(
    `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
  );

  // Change code above this line
  return message;
}
makeOrderMessage(3, 5000, 250);
