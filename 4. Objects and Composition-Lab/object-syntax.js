let person = {
    firstName : "Pesho",
    lastName : "Petrov",
    age : 20,
    isMale : true,
};

// console.log(person); // {firstName: 'Pesho', lastName: 'Petrov', age: 20, isMale: true}
// console.log(person.nickname); // undefined

let dog = {};
let propName = "age";
dog.name = "Sharo"; // Dot notation
dog["breed"] = "Bulgarian Karakachanka"; // Bracket notation
dog["fur-color"] = "black"; // Specific situation for Backet notation
dog[propName] = 5; // Specific situation for Backet notation

console.log(dog.name);
console.log(dog.breed);
console.log(dog.age);
// console.log(dog.fur-color); // error

console.log(dog["name"]);
console.log(dog["breed"]);
console.log(dog["fur-color"]);
console.log(dog["age"]);

// console.log(dog); // {name: 'Sharo', breed: 'Bulgarian Karakachanka', fur-color: 'black', age: 5}
let {age, ...rest} = dog;
// console.log(age) // 5
// console.log(rest); // {name: 'Sharo', fur-color: 'black'}

let otherDog = dog; // copy bt reference !!!
otherDog.name = "Navcho";
console.log(otherDog.name); // Navcho
console.log(dog.name); // Navcho !!!

// Clone object
let {...clonedDog} = dog;
// console.log(clonedDog); // {name: 'Navcho', breed: 'Bulgarian Karakachanka', fur-color: 'black', age: 5}
// console.log(dog); // {name: 'Navcho', breed: 'Bulgarian Karakachanka', fur-color: 'black', age: 5}
// clonedDog.name = "Sharo";
// console.log(clonedDog); // {name: 'Sharo', breed: 'Bulgarian Karakachanka', fur-color: 'black', age: 5}
// console.log(dog); // {name: 'Navcho', breed: 'Bulgarian Karakachanka', fur-color: 'black', age: 5}
// let {breed} = dog; // breed already is value type, not ref type !!!
// breed = "OtherBreed";
// console.log(breed); // OtherBreed

// Comparing objects
console.log(otherDog == dog); // true - comparing by reference !!!
console.log(clonedDog == dog); // false - comparing by reference !!!
console.log(clonedDog == otherDog); // false - comparing by reference !!!