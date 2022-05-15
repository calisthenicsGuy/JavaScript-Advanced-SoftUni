function sum(n, m) {
    let firstNum = Number(n);
    let secondNum = Number(m);
    let result = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    return result;
}

console.log(sum('-8', '20'));