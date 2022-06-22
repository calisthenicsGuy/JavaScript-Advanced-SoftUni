// For of
let cars = ["opel", "Lada", "BMW", "Audi", "mercedes", "Volvo", "mazda"];

for (let element of cars) {
    console.log(element)
}

// ForEach
cars.forEach(element => console.log(element));

// Some 
console.log(cars.some(element => element.startsWith("V") || element.startsWith("C")));
console.log(cars.some(element => element.startsWith("V")));
console.log(cars.some(element => element.startsWith("C")));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let isEven = function (element) {
    return element % 2 == 0;
}
console.log(numbers.some(isEven))

// Find
console.log(numbers.find(element => element > 6))

// Filter - Note: change the original array !!!
let carsAtEvenPosititon = cars.filter((element, index) => index % 2 == 0);
console.log(carsAtEvenPosititon);

// Map
let newCarsArray = cars.map(value => value.toLocaleLowerCase());
console.log(newCarsArray);

let numbersToString = numbers.map(n => String(n));
// let numbersToString = numbers.map(String);
console.log(numbersToString);

let doubledNumber = numbers.map(value => value * 2);
console.log(doubledNumber);



// function solve (array) {
//     return array.filter((num, index) => index % 2 == 1)
//     .map(n => n * 2)
//     .reverse();
// }

// console.log(solve([10, 15, 20, 25]));
// console.log(solve([3, 0, 10, 4, 7, 3]));


// Reduce
let sum = doubledNumber.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log(sum);