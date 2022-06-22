// Pop
let cars = ["BMW", "Audi", "Opel"];
console.log(cars); // (3) ['BMW', 'Audi', 'Opel']

let lastElement = cars.pop( );
console.log(lastElement);
console.log(cars); // (2) ['BMW', 'Audi']

// Push
cars.push("Mercedes");
console.log(cars); // (3) ['BMW', 'Audi', 'Mercedes']

// Shift
let firstElement = cars.shift();
console.log(firstElement); // "BMW"
console.log(cars); // (2) ['Audi', 'Mercedes']

// Unshift
cars.unshift("Mazda");
console.log(cars) // (3) ['Mazda', 'Audi', 'Mercedes']
cars.shift();
cars.unshift("Mazda", "Bugatti");
console.log(cars); // (4) ['Mazda', 'Bugatti', 'Audi', 'Mercedes']

// Splice - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
cars.splice(1, 0, "Opel"); // add Opel at index 1 - ['Mazda', 'Opel', 'Bugatti', 'Audi', 'Mercedes']
console.log(cars);
cars.splice(1, 1); // remove 1 element (Opel) with start from index 1 - ['Mazda', 'Bugatti', 'Audi', 'Mercedes']
cars.splice(1, 0, "Opel", "Hundai"); // (6) ['Mazda', 'Opel', 'Hundai', 'Bugatti', 'Audi', 'Mercedes']
console.log(cars);

// Fill
// cars.fill("car", 0); - ['car', 'car', 'car', 'car', 'car', 'car']
// cars.fill("bestCar", 4, 5); - (6) ['Mazda', 'Opel', 'Hundai', 'Bugatti', 'bestCar', 'Mercedes']

// Reverse
cars.reverse();
console.log(cars);

// cars.splice(1, 0, "Rado", "Gosho");
// console.log(cars);
// cars.splice(1, 2, "Nz", "Nz2");
// console.log(cars);

// let [gClass, bestCar, zaBugatite, ...others] = cars;
// let array = others;
// array.splice(1, 0, "pesho");
// console.log(array);
// console.log(`${gClass}, ${bestCar}, ${zaBugatite}----${others.join(", ")}`);