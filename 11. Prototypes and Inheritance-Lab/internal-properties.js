let person = {
    'name' : 'Pesho',
    'age' : 20,
};

let internalPropertiesOfPersonObjectProperties = Object.getOwnPropertyDescriptors(person);
// {
//     name: {
//       value: 'Pesho',   
//       writable: true,   
//       enumerable: true, 
//       configurable: true
//     },
//     age: { value: 20, writable: true, enumerable: true, configurable: true }
//   }


let internalNameProperties = Object.getOwnPropertyDescriptor(person, 'name');
// {
//     value: 'Pesho',   
//     writable: true,   
//     enumerable: true, 
//     configurable: true
//   }

// Modify internal properties of existing properties
Object.defineProperty(person, 'name', { enumerable : false });
console.log(internalNameProperties); // {value: 'Pesho', writable: true, enumerable: true, configurable: true}
Object.keys(person).forEach(x => console.log(x)); // age  |  without property name

// Add new properties and configure internal properties
let internalWeightProperties = Object.defineProperty(person, 'weight', { value : 70, enumerable : false })
console.log(internalWeightProperties); // {age: 20, name: 'Pesho', weight: 70}
Object.keys(person).forEach(x => console.log(x)); // age  |  without properties name and weight

console.log(JSON.stringify(person)); // {"age":20}  |  do not stringify name and weight


Object.defineProperty(person, 'height', { value : 190, writable : false}); // Cannot change value of non writeable property
person.height = 180;
console.log(person.height); // 190

// configurable - after set configurable : false, we cannot change internal properties of object property


// Change internal properties of more than one object property 
Object.defineProperties(person, {
    name : {
        enumerable : true,
    },
    age : {
        value : 21,
        writable : false,
    }
});
Object.keys(person).forEach(x => console.log(x)); // name, age


Object.defineProperty(person, 'info', {
    get : function() {
        return `${this.name} - ${this.age}`;
    },
    set : function(value) {
        let [ name, ageText] = value.split(' - ')
        this.name = name,
        this.age = Number(ageText) // cannot change value of age, because we SET FALSE of internal property (writeable)  
    },
});

console.log(person.info); // Pesho - 21

person.info = 'Gosho - 30';
console.log(person.info); // Gosho - 21
console.log(person.name); // Gosho
console.log(person.age); // 21


// freeze - cannot change whole object and him properties
// Object.freeze(person); 
// person.age = 70;
// console.log(person.age); // 21


// seal - cannot change object (to add new property or delete existing property), but can change particular ONLY value of object property
// Object.seal(person);
// Object.defineProperty(person, 'name', { value : false }); // nothing will happend
// person.name = 'Rado'; // will change
// console.log(Object.getOwnPropertyDescriptor(person, 'name')); // {value: 'Rado', writable: true, enumerable: true, configurable: false}
