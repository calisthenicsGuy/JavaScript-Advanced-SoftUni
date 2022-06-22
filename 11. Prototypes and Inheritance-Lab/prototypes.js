let person = {
    'name' : 'Pesho',
    'age' : 22,
    'height' : 190,
};

let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 80;
console.log(personPrototype); // {weight: 80, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
console.log(person); // {name: 'Pesho', age: 22, height: 190}  |  do not return property 'weight'
console.log(person.weight); // 80

console.log(person == personPrototype); // false
console.log(person.__proto__ == personPrototype); // true

