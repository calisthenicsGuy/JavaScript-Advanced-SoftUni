function getEqualNeighbours(inputMatrix) {
    let equalPairs = 0;

    for (let row = 0; row < inputMatrix.length; row++) {
        for (let col = 0; col < inputMatrix[row].length; col++) {

            let currentElement = inputMatrix[row][col];

            if (row + 1 < inputMatrix.length) {
                let nextVerticalElement = inputMatrix[row + 1][col];
                if (currentElement == nextVerticalElement) {
                    equalPairs++;
                }
            }

            if (col + 1 < inputMatrix[row].length) {
                let nextHorizontalElement = inputMatrix[row][col + 1];
                if (currentElement == nextHorizontalElement) {
                    equalPairs++;
                }
            }
        }
    }

    return equalPairs;
}

console.log(getEqualNeighbours(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']
    ]));

console.log(getEqualNeighbours(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]));

console.log(getEqualNeighbours(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ]));