function mathOperation(firstNum, secondNum, opeartion) {
    let result;
    if (opeartion == "+") {
        result = firstNum + secondNum;
    }
    else if (opeartion == "-") {
        result = firstNum - secondNum;
    }
    else if (opeartion == "*") {
        result = firstNum * secondNum;
    }
    else if (opeartion == "/") {
        result = firstNum / secondNum;
    }
    else if (opeartion == "%") {
        result = firstNum % secondNum;
    }
    else if (opeartion == "**") {
        result = firstNum ** secondNum;
    }
    console.log(result);
}

mathOperation(3, 5.5, '*');