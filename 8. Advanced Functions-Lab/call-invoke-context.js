function introduce(firstName, secondName) {
    console.log(`Hello ${firstName} ${secondName}, My name is: ${this.name}!`);
}

introduce('Gosho', 'Ivanov'); // Global invokation - Hello Gosho Ivanov, My name is: undefined!


// let obj = {
//     name : 'Peter',
//     introduce,
// };

// obj.introduce(); // Hello, My name is: Peter!


let objectContext = {
    name : 'Peter',
};

introduce.call(objectContext, 'Gosho', 'Ivanov'); // invoke using call - Hello, My name is: Peter!
// introduce.call({name : "Gosho"}); // Hello Gosho Ivanov, My name is: Peter!

introduce.apply(objectContext, ['Stamat', 'Stamatov']); // Hello Stamat Stamatov, My name is: Peter!


let superman = {
    name : 'Superman',
};

introduce.bind(superman, 'Lois', 'Lane'); // nothing will happend
let superIntoducion = introduce.bind(superman, 'Lois', 'Lane');
superIntoducion(); // Hello Lois Lane, My name is: Superman!

let superIntoducion2 = introduce.bind(superman);
superIntoducion2('Lois', 'Lane2'); // Hello Lois Lane2, My name is: Superman!



// function like parameter of other function
function saySomething(randomText) {
    return randomText;
}

function printResult(someText, name) {
    return someText + name
}

console.log(printResult(saySomething('Hello'), ' JS!')); // Hello JS!

// predicate

function solve(element) {
    if (IsMoreThanTen(element)) {
        return element + ' is larger than 10.';
    } else {
        return element + ' is smaller than 10.';
    }
}

function IsMoreThanTen(element) {
    return element > 10;
}

console.log(solve(18)); // 18 is larger than 10.
console.log(solve(6)); // 6 is smaller than 10.


// Pure function
let increase = n => n += 1;
let decrease = n => n -= 1;

console.log(increase(3)); // 4
console.log(decrease(3)); // 2