'use strict';

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // The wrong way
    // this.greet = function() {
    //     console.log(`Hello, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    // }
}

// The correct way
Person.prototype.greet = function() {
    console.log(`Hello, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
}

let person1 = new Person('Stamat', 'Stamatov', 20);
let person2 = new Person('Georgi', 'Ivanov', 25);
person1.greet();
person2.greet();

console.log(person1.greet == person2.greet); 