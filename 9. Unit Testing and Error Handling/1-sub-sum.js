function solve(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    } if (array.length == 0) {
        return 0;
    }

    // if (startIndex < 0) { startIndex = 0 }
    // if (endIndex >= array.length) {endIndex = array.length - 1 }
    startIndex = Math.max(startIndex, 0);
    endIndex = Math.min(endIndex, array.length - 1);

    let subNumbers = array.slice(startIndex, endIndex + 1);
    let sum  = subNumbers.reduce((a, x) => a + Number(x), 0)

    return sum;
}


module.exports = solve;


// console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(solve([10, 'twenty', 30, 40], 0, 2));
// console.log(solve([], 1, 2));
// console.log(solve('text', 0, 2));