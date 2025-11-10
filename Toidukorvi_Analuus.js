let shoppingCart = [
  { name: "apple", quantity: 4 },
  { name: "banana", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "milk", quantity: 1 },
  { name: "bread", quantity: 2 }
];

let totalQuantity = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
console.log("Total quantity:", totalQuantity); 

shoppingCart.push({ name: "yogurt", quantity: 3 });
console.log(shoppingCart);

let apple = shoppingCart.find(item => item.name === "apple");
if (apple) {
  apple.quantity += 3;
} else {
  shoppingCart.push({ name: "apple", quantity: 3 });
}
console.log(apple);

let banana = shoppingCart.findIndex(item => item.name === "banana");
if (banana !== -1) {
  shoppingCart.shift(item => item.name === "banana");
} else {
  console.log("Banana not found — nothing to remove.");
  console.log(shoppingCart);
}
console.log(shoppingCart);

let productName = shoppingCart.map(item => item.name);
console.log(productName);

let hasMilk = shoppingCart.some(item => item.name === "milk");
console.log("Is milk in shopping card?", hasMilk);

shoppingCart.sort((a, b) => b.quantity - a.quantity);
console.log(shoppingCart);