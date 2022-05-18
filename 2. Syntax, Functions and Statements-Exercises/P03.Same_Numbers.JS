function solve (number) {
    number = String(number);
    
    let isSame = true;

    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] != number[i+1]) {
            isSame = false;
            break;
        }
    }

    let newNumber = number.split('');
    // let newNumber = Array.from(number);
    newNumber = newNumber.map(Number);
    const sum = newNumber.reduce((a, b) => a += b);

    console.log(isSame);
    console.log(sum)
}

solve(1234);