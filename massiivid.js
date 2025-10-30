// Massiivid

// let fruits = ["apple", "banana", "cherry", "coconut"];
// let fruits = new Array ("apple", "banana", "cherry");

// console.log(fruits[0]); //apple
// console.log(fruits); //apple, banana, cherry

// fruits.push("grape"); // добавляет новый элемент в конец массива:
// fruits.pop(); // удаляет элемент из последней позиции массива
// fruits.shift(); //  для удаления  первого элемента в начало массива соответственно:
// fruits.unshift("mango"); //  для добавления первого элемента в начало массива соответственно:
// let citrus = fruits.slice(1, 3); // возвращает подмножество массива без изменения исходного массива
// fruits.splice(1, 1, "lemon"); // добавляет, удаляет или заменяет элементы в определенном месте (влияет на исходный массив):
// fruits.forEach((fruit) => console.log(fruit)); // позволяет обрабатывать каждый элемент массива:
// fruits.join(" * ") // Метод join() объединяет все элементы массива в строку(Banana * Orange * Apple * Mango)
// let username = "Mike";
// let letters = [...username].join("-"); // M-i-k-e

// let upperFruits = fruits.map((fruit) => fruit.toUpperCase()); // создает новый массив, применяя заданную функцию к каждому элементу

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");
// for(let i=fruits.length - 1; i >=0 ; i--){  // перечисляет элементы в списке 
//     console.log(fruits[i]);
// }

// fruits.sort().reverse(); // сорт от последнего
// for(let fruit of fruits){
//     console.log(fruit);
// }

// let numbers = ["1", "2", "3", "4", "5"];
// let maximum = Math.max(...numbers) 
// let min = Math.min(...numbers)

// let vegetables = ["carrots", "celery", "potatoes"];
// let fruits = ["apple", "banana", "cherry"];

// let food = [...fruits, ...vegetables, "eggs", "milk"]; // добавить 2 списка в 1
// console.log(food)

// // Rest Parameters

// function openFridge(...foods){ // rest
//     console.log(foods); // spread
// }
// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "apple";
// const food3 = "burger";
// const food4 = "sushi";

// openFridge(food1, food2, food3, food4);
// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// function sum(...numbers){ // rest
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = sum (75,221,30,49,50);
// console.log(total)

// function combineStrings(...strings){
//     return strings.join(" ");
// }
// const FullName = combineStrings("mr.", "Johnson", "Vedal");
// console.log(FullName);


// // Callback
// hello(leave); // Write "Hello" then "Leave"

// function hello(callback){
//     console.log("Hello");
//     callback();
// }
// function leave(){
//     console.log("Leave!");
// }
// function goodbye(){
//     console.log("Goodbye");
// }

sum(displayPage, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}
