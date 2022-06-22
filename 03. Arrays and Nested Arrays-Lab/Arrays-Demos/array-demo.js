let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);


// mixed array - not a good practice
let mixedArr = [1, "Pesho", 2, new Date()];
console.log(mixedArr);


let names = ["Rado", "Deni", "Gosho", "Ivancho"];
console.log(names);

console.log(names.length);
names.length = 10;
console.log(names.length);
console.log(names);

// Data can be stored at non-contiguous locations in the array
// JavaScript arrays are not guaranteed to be dense
// So I can create array with 1000000000 empty elements - no poblems - in C# will kill me :)

console.log(names[0])
console.log(names[80]);; // undefined
console.log(names[632871273]); // undefined
names[10] = "Pesho";
console.log(names);

names[11] = "Nikolai";
// The array will be resolved automatically
console.log(names);

// Dirty hack
names[-1] = "Haker";
console.log(names.length);
names["specialElement"] = "Hacker1";
console.log(names.specialElement);
console.log(names);

// Array Destructuring Assigment Syntax and Rest operator
let [firstName, secondName, thirdName, ...others] = names; 
console.log(firstName);
console.log(others);