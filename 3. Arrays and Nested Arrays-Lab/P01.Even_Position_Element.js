function findElementsOnEvenPositions(arr) {
    return arr
            .filter((num, index) => index % 2 === 0)
            .join(" ");
}

console.log(findElementsOnEvenPositions([20, 30, 40, 50, 60]));