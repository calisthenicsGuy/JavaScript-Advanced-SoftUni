let car = {
    model : "BMW",
    year : 2010,
    facelift : true,
    honk : function() {
         console.log("Beep beep");
    },
    drive : (direction) => { 
        console.log(direction);
    },
    stop() {
        console.log("stop");
    },
}

car.honk();
car.drive("up");
car.stop();
car["honk"]();


// Object as function library

let divide = (a, b) => {
    return a / b;
}

let calc = {
    sum : (a, b) => {
        return a+b;
    },
    subtract : function (a, b) {
        return Math.abs(a - b);
    },
    multiplication (a, b) {
        return (a * b).toFixed(2);
    },
    divide,
};


let count = 5;
function command (cmd) {
    switch(cmd) {
        case "increment":
            count++;
            break;
        case "decrement":
            count--;
            break;
        case "reset":
            count = 0;
            break;
    };

    return count;
}
console.log(command("increment")); // 6

let otherCommand = {
    increment() { count++; return count},
    decrement() { count--; return count },
    reset() { count = 0; return count },
}
console.log(otherCommand.increment()); // 7


let action = function(hour) {
    switch(hour) {
        case "00:00":
            return "sleep";
        case "08:00":
            return "make breakfast";
        case "12:00":
            return "make a lunch";
        case "18:00":
            return "make a dinner"
    }
}
console.log(action("18:00")); // make a dinner


let action1 = {
    hour : "null",
    sleep() { this.hour = "00:00"; return this. hour; },
    breakfast() { this.hour = "08:00"; return this.hour; },
    lunch() { this.hour = "12:00"; return this.hour; },
    dinner() { this.hour = "18:00"; return this.hour; }
};
console.log(action1.sleep()); // 00:00
console.log(action1.breakfast()); // 08:00
console.log(action1.lunch()); // 12:00
console.log(action1.dinner()); // 18:00

// Object Composition
let student = {
    firstName : (fName) => { this.firstName = fName; return this.firstName; },
    lwstName : "Georgiev",
    age : 20,
    location : {
        someBoolean : {
            isOnEarth : true,
            isInEurope : true,
            isInNorthAnerica : false,
        },
        country : "Bulgaria",
        city : "Varha",
    },
};
// Print nested value
console.log(student.firstName("Gosho")); // Gosho
console.log(student.location.someBoolean); // Bulgaria
console.log(student.location.someBoolean); // {isOnEarth: true, isInEurope: true, isInNorthAnerica: false}
console.log(student.location.someBoolean.isInEurope); // true;

console.log(student["location"]["country"]); // Bulgaria
console.log(student.location["country"]); // Bulgaria
console.log(student["location"]["someBoolean"].isInNorthAnerica); // false

// Nested destructuring
let { location : { country } } = student;
console.log(country); // Bulgaria



function print() {
    console.log(`${this.name} is printing a page`);
  }
function scan() {
    console.log(`${this.name} is scanning a document`);
  }
const printer = { 
    name: 'ACME Printer',
    print,
};
const scanner = { 
    name: 'Initech Scanner',
    scan,
};
const copier = { 
    name: 'ComTron Copier',
    print,
    scan,
};
  