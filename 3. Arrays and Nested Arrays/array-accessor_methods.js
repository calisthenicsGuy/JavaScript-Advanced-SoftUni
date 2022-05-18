// Join
let array = ["I", "am", "Array"];
let result = array.join(' ');
console.log(result);

// Concat
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers3 = [7, 8, 9];
let numbers4 = [10, 11, 12];
let numbersResult1 = numbers1.concat(numbers2)
let numbersResult2 = numbers1.concat(numbers2, numbers3, numbers4);
console.log(numbersResult1);
console.log(numbersResult2);

// Slice
let cars = ["Opel", "Lada", "BMW", "Audi", "Mercedes", "Volvo", "Mazda"];
let slicedCars = cars.slice(1, 4);
console.log(slicedCars);
console.log(cars.slice(3));
console.log(cars.slice()); // Note: easy way to clone array
console.log(cars.slice(0, 3));

// Includes
let isContains = cars.includes("Lada");
console.log(isContains);
console.log(cars.includes("Trabant"));
// optional- includes.(element, fromIndex?)
console.log(cars.includes("Audi", 4));

// IndexOf
console.log(cars.indexOf("Audi"));
console.log(cars.indexOf("Lada"));
console.log(cars.indexOf("Trabant")); // return -1