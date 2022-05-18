function solve (array) {
    let newArr = array
        .sort((a, b) => b - a)
        .slice(0, Math.ceil(array.length / 2));

    newArr.sort((a, b) => a-b);
    console.log(newArr);

}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);