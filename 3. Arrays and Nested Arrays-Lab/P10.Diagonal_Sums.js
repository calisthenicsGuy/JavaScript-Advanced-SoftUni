function getDiagonalSums(inputArray) {
    let numMatrix = [];

    for (let i = 0; i < inputArray.length; i++) {
        numMatrix[i] = inputArray[i].map(el => parseInt(el));
    }

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let row = 0; row < numMatrix.length; row++) {
        leftDiagonalSum += numMatrix[row][row];
        rightDiagonalSum += numMatrix[row][numMatrix.length - 1 - row];
    }
    
    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

getDiagonalSums(
    [[20, 40],
    [10, 60]]);

getDiagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);