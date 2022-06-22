class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    produceSound() {
        console.log(`Hello, I am ${this.type} and my name is ${this.name}...`);
    }

    static eat() {
        console.log('I eating now...');
    }
}

let animal1 = new Animal('Cat', 'Pisana');
let animal2 = new Animal('Dog', 'Sharo');

animal1.produceSound(); // Hello, I am Cat and my name is Pisana...
animal2.produceSound(); // Hello, I am Dog and my name is Sharo...

let animals = [animal1, animal2];
console.log(animals);

// instanceof
console.log(animal1 instanceof Animal); // true
console.log(class Dog {} instanceof Animal); // false
console.log(animal2 instanceof Object); // true

// static methods
Animal.eat(); // I eating now...

