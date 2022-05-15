// Function declaration
function printFullName() {
    console.log("Petar Ivanov");
}
// Function invokation
printFullName();


function printFullName1(firstName, lastName) {
    firstName = "Georgi";
    lastName = "Georgiev";
    console.log(firstName + " " + lastName);
}
printFullName1();


function printFullName2(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
printFullName2("Radoslav", "Radev");


// Function expression
let countDown = function(number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}
countDown(10);


//Arrow function
let countUp = (max) => {
    for (let i  = 0; i < max; i++) {
        console.log(i);
    }
}
countUp(10);


// Return value
function sum (firstNum, secondNum) {
    return firstNum + secondNum;
};
let result = sum(20, 30);
console.log(result);
console.log(sum(1, 3));


let sumArrow = (firstNum, secondNum) => firstNum + secondNum;
console.log(sumArrow(20, 10))


// Defualt parameters values
function sum(number1 = 10, number2 = 5) {
    let result = number1 + number2;
    console.log(result);
}
sum();

