function getBiggestElement(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {
        let currentBiggestElement = Math.max(...matrix[i]);
        if (currentBiggestElement > biggestElement) {
            biggestElement = currentBiggestElement;
        }
    }

    return biggestElement;
}

console.log(getBiggestElement(
    [[20, 50, 10],
    [8, 33, 145],
    [20, 15, 10, -200]]
));

console.log(getBiggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));

console.log(getBiggestElement(
    [[-3, -5, -7, -12],
    [-1, -4, -33, -2],
    [-8, -3, -1, -4]]
));