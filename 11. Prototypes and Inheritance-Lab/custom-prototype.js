let animal = {
    type : '',
    name : '',
    age : '',
    gender : '',
    sound : '',
    isHungry : false,
    introduce() {
        console.log(`Hello from ${this.type}! My name is ${this.name} and I am ${this.age} years old.`);
    },
    produceSound() {
        console.log(`${this.name} say ${this.sound}!`);
    },
    report() {
        console.log(`This is ${this.type} with:`);
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        console.log('Gender: ' + this.gender);
    }
};

let cat = Object.create(animal);
cat.type = 'Cat';
cat.name = 'Navcho';
cat.age = 5;
cat.gender = 'Male';
cat.sound = 'Meow';
cat.isHungry = false;
console.log(cat); // { type: 'Cat',  name: 'Navcho', age: 5, gender: 'Male', sound: 'Meow', isHungry: false }

console.log(cat.__proto__ == animal); // true
console.log(animal == Object.getPrototypeOf(cat)); // true

// let c2 = Object.assign({}, animal);
// console.log(c2); 
// // {type: '', name: '', age: '', gender: '', sound: '', IsHungry; false, introduce: [Function: introduce], produceSound: [Function: produceSound], report: [Function: report]
// console.log(c2.__proto__ == cat.__proto__); // false


// Linked prototyprs - example
let perCat = Object.create(cat);
console.log(perCat.__proto__); // { type: 'Cat',  name: 'Navcho', age: 5, gender: 'Male', sound: 'Meow', isHungry: false }
console.log(perCat.__proto__.__proto__); // { type: '',  name: '', age: '', gender: '', sound: '', isHungry: false }

// Check if property is own
console.log(perCat.hasOwnProperty('name')); // false | perCat has acsses to property 'name', but the property is not his
console.log(cat.hasOwnProperty('name')); // true
