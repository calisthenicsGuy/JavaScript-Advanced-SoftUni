const divisor = function (firstNum, secondNum) {
    let smallerNum = firstNum;
    if (firstNum > secondNum) {
        smallerNum = secondNum;
    }

    for (let i = smallerNum; i > 1; i--) {
        if (firstNum % i == 0 && secondNum % i == 0) {
            return i;
        }
    }

    return 1;
}

console.log(divisor(1, 3));