function solve (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    let [smallestNum1, smallestNum2] = array;
    console.log(`${smallestNum1} ${smallestNum2}`);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);

// function solve (array) {
//     let result = array
//         .sort((a, b) => a - b)
//         .slice(0, 2)
//         .join(" ");

//     console.log(result);
// }