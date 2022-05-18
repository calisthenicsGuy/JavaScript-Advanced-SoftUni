let nestedArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

nestedArray.forEach(printRow);
function printRow(row){
    console.log(row);
    row.forEach(printNumber);
}

function printNumber(num){
    console.log(num);
};
