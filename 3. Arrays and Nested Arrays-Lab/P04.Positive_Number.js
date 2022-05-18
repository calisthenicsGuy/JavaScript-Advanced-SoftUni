function solve(array) {
    let resultArr = [];
    array.forEach(element => {
        if (element < 0) {
            resultArr.unshift(element);
        } else {
            resultArr.push(element);
        }
    });

    resultArr.forEach(element => console.log(element));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);