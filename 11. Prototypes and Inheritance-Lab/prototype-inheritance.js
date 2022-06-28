// function Animal(type, name, age, sound) {
//     this.type = type
//     this.name = name;
//     this.age = age;
//     this.sound = sound;
// }

// Animal.prototype.makeSound = function() {
//     console.log(`${this.type} with name ${this.name} say ${this.sound}`);
// }

// function Cat(name, age) {
//     Cat = Animal.call(this, 'Cat', name, age, 'Meow');
// }
// Cat.prototype = Object.create(Animal.prototype);

// let cat = new Cat('Navcho', 15);
// console.log(cat);// Cat {type: 'Cat', name: 'Navcho', age: 7, sound: 'Meow'}
// cat.makeSound(); // Cat with name Navcho say Meow


// Sugar synatx
class Animal {
    constructor(type, name, age, sound) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.type} with name ${this.name} say ${this.sound}`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super('Cat', name, age, 'Meow');
    }
}

let cat = new Cat('Navcho', 7);
console.log(cat); // Cat {type: 'Cat', name: 'Navcho', age: 7, sound: 'Meow'}
cat.makeSound(); // Cat with name Navcho say Meow
