// //    ForEach // Использование : Последовательно перебирает элементы массива и выполняет указанную функцию для каждого элемента.
// Назначение : в основном используется для перебора элементов массива, но ничего не возвращает

// let number = [1,2,3,4,5];

// number.forEach(square); // 
// number.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize)
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }

// //   .map // Использование : Проходит по массиву и применяет указанную функцию к каждому элементу, возвращая новый массив с измененными значениями.
// Цель : создать новый массив, содержащий измененное значение каждого исходного элемента.

// const number = [1,2,3,4,5];
// const squares = number.map(square); 

// console.log(squares)

// function square(element){
//     return Math.pow(element, 2)
// }

// function cube(element){
//     return Math.pow(element, 2)
// }

// const students = ["apple", "orange", "banana", "coconut"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower)

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// const dates = ["12-23-2025", "01-23-2009", "10-13-2019", "05-03-2020"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split('-')
//     return `${parts[1]}.${parts[0]}.${parts[2]}`
// }

// .filter  // Использование : выполняет цикл по массиву и возвращает новый массив, содержащий только те элементы, которые соответствуют указанному условию.
// Цель : Фильтрация массива, сохранение только элементов, соответствующих определенным критериям.

// let number = [1,2,3,4,5];
// let evenNums = number.filter(isEven)
// let oddNums = number.filter(isOdd)

// console.log(evenNums)

// function isEven(element){
//     return element % 2 == 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// const age = [16,18,20,23,14,51];
// const adults = age.filter(isAdult)

// console.log(adults)

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

// const fruits = ["apple", "orange", "banana", "coconut"];
// const short = fruits.filter(getShortWords)

// console.log(short);

// function getShortWords(element){
//     return element.length >= 5;
// }

// // .reduse // Использование : выполняет итерацию по массиву и собирает значения каждого элемента в один результат, который возвращается после обработки всех элементов.
// Цель : объединить все элементы массива в одно значение (например, сумму, произведение или более сложный объект).

// const prices = [5,25,50,8,27];
// const totat = prices.reduce(sum);
// console.log(`$${totat.toFixed(2)}`);

// function sum(accum, element){
//     return accum + element;
// }

// const grades = [5,25,50,8,27];

// const max = grades.reduce(getMaxMin);

// console.log(max)

// function getMaxMin(accum, element){
//     return Math.max(accum, element);
//     return Math.min(accum, element);
// }



// // function declaration

// function hello(){
//     console.log("Hello");
// }
// hello();

// setTimeout(useCallback, 3000) // время 

// setTimeout(function(){
//     console.log("Hello");
// }, 3000)

// const number = [1,2,3,4,5];
// const squares = number.map(function square(element){
//     return Math.pow(element, 2);
// }); 
// const cubes = number.filter(function square(element){
//     return Math.pow(element, 3);
// }); 
// const evenNums = number.filter(function square(element){
//     return element % 2 === 0;
// }); 
// console.log(squares)


// // arrov function

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)};
// hello(`Mike`, 25);

// setTimeout( () => console.log("hello"), 3000);

// const num = [1,2,3,4,5];
// const squares = number.map((element) => Math.pow(element, 2));
// const cubes = number.map((element) => Math.pow(element, 2));
// const evenNums = number.map((element) => Math.pow(element, 2));
// const oddNums = number.map((element) => Math.pow(element, 2));
// const total = number.map((element) => Math.pow(element, 2));