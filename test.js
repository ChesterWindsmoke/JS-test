// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
  

//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// const userName = prompt("Напишіть свій логін:")
// alert(userName);

// let password;
// let programAnswer;

// if (userName === "Адмін") {
//      password = prompt("Введіть пароль:")
// }
// else if(userName === "") {
//      programAnswer = alert("Cкасовано")
// }
     
     
     
     
// if  (password === "Я головний") {
//     programAnswer = alert("Здрастуйте!")
// }
// else if (password != "Я головний") {
//     programAnswer = alert("Невірний пароль!")
// }
// else {
//    programAnswer = alert("Я вас не знаю")
// }


// function calculateTotal(number) {
 // Change code below this line

//     let sum = 0;
    
// for ( let i = 1; i >= 1 && i <= number; i += 1 ) {
//     sum += i;
// }

//     console.log(sum);

//   // Change code above this line
// }

// calculateTotal(24)

// function findLongestWord(string) {


//    let longestWord = "";
//   const StringSplit = string.split(" ")

//   while (longestWord.length > StringSplit.length) {
//     console.log(longestWord);
//     StringSplit += 1;
// }

// }


// findLongestWord("The quick brown fox jumped over the lazy dog");


// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//  console.log(numbers[i])

//   }


//   console.log(numbers);
// }

// createArrayOfNumbers(1, 3);





// function getEvenNumbers(start, end) {


//   const array = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//         array.push(i);
//     }
//   }

// console.log(array);

// }
  
// getEvenNumbers(8, 8);



// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// let values = Object.values(salaries)
//   for (const key of values) {
// totalSalary += values;
//   }


//   console.log (totalSalary);

// }
//   countTotalSalary({ mango: 100, poly: 150, alfred: 80})

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for ( const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors)
// console.log(rgbColors)



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

  
// for (const key of products) {
//   if (products.name === productName) {
//     console.log (products.price);
//   }
  
// }
// }

// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//   let totalPrice = 0;
// for (const product of products) {
//   if (product === productName) {
//     totalPrice = products.price * products.quantity;
//     console.log(totalPrice);
//   }
  
// }



// }

// calculateTotalPrice('Radar')


// Напиши скрипт который подсчитывает общую сумму зарплат работников .
// К-во работников хранится в переменной employers
// Зарплата каждого работника это случайное число от 500 до 5000
// записать сумму в переменную totalSalary и вывести ее в консоль

// const employers = 10;
// const max = 5000;
// const min = 500;

// let totalSalary = 0;

// for (let i = 1; i <= employers; i += 1) {
//     totalSalary = Math.round(Math.random() * (max - min));
//     console.log(`Cумма зарплат работника ${i}: ${totalSalary}`)
// }

//Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон чиссел в переменных от min до max
// Например , если min = 0 и max = 5 , в нем два четных числа 2 и 4 , их сумма = 6

// const min = 6;
// const max = 13;
// let sum = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }

// console.log(sum);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// сonst {
//   today : {low: lowToday , high: highToday,icon: todayIcon ="https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//   tomorrow : {low: lowTomorrow , high: highTomorrow,icon: todayIcon ="https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}
// } = forecast;


// Change code below this line
// function calculateMeanTemperature(forecast) {
 
//     const { today: { low: todayLow, high: todayHigh,
//     },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

  

//   // Change code above this line
//     forecast()
//   console.log (todayLow);
// }




// function add(...args) {
//   let sum = 0;
//     for (let i = 0; i <= args.length; i += 1) {
//   sum += args;
// }
//   console.log(sum);

// }
// add(15, 27);




// Встановлення підключення до IndexedDB
// let request = window.indexedDB.open("database_name", 1);

// let db;
// request.onerror = function(event) {
//   console.log("Помилка підключення до бази даних");
// };

// request.onsuccess = function(event) {
//   db = event.target.result;
//   console.log("Підключення до бази даних встановлено");
// };

// request.onupgradeneeded = function(event) {
//   let db = event.target.result;
//   let objectStore = db.createObjectStore("table", { keyPath: "id", autoIncrement: true });

//   objectStore.createIndex("Найменування", "Найменування", { unique: false });
//   objectStore.createIndex("Витрати", "Витрати", { unique: false });
//   objectStore.createIndex("Доходи", "Доходи", { unique: false });
// };


// let db;

// Встановлення підключення до IndexedDB
// let request = window.indexedDB.open("database_name", 1);

// request.onerror = function(event) {
//   console.log("Помилка підключення до бази даних");
// };

// request.onsuccess = function(event) {
//   db = event.target.result;
//   console.log("Підключення до бази даних встановлено");

//   let transaction = db.transaction(["table"], "readonly");
//   let objectStore = transaction.objectStore("table");
//   let request = objectStore.getAll();

//   request.onerror = function(event) {
//     console.log("Помилка отримання даних з бази даних");
//   };

//   request.onsuccess = function(event) {
//     let data = event.target.result;
//     console.log(data);
//     // тут можна записати дані до таблиці
//   };
// };

// request.onupgradeneeded = function(event) {
//   let db = event.target.result;
//   let objectStore = db.createObjectStore("table", { keyPath: "id", autoIncrement: true });

//   objectStore.createIndex("Найменування", "Найменування", { unique: false });
//   objectStore.createIndex("Витрати", "Витрати", { unique: false });
//   objectStore.createIndex("Доходи", "Доходи", { unique: false });

//   // тут можна внести початкові дані до таблиці
//   objectStore.add({Найменування: "Продукти харчування", Витрати: 100, Доходи: 0});
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

//       const bookName = this.books.indexOf(oldName);
//     this.books.splice(0, newName.length);
   
//   },
// };

