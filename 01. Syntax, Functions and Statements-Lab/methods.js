// Methods
let firstName = "Pesho";
console.log(firstName.toUpperCase()); // PESHO
console.log(firstName.toLowerCase()); // pesho
console.log(firstName.length); // console.log(firstName.length()); - ERROR - length is not a function

console.log(firstName.indexOf("P")); // 0
console.log(firstName.indexOf("p")); // -1
console.log(firstName.toLowerCase().indexOf("p")); // 0


let firstTrimName = "Pesho   ";
console.log(firstTrimName + "-");
console.log(firstTrimName.trimEnd() + "-");



