let sum = function (array) {
    array = array.map(Number);

    let firstNumber = array.shift();
    // let firstNumber = array[0];
    let lastNumber = array.pop();
    // let lastNumber = array[array.length-1];

    return firstNumber + lastNumber;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));