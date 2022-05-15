function stringLength (firstString, secondString, thirdString) {
    let lengthOfStrings = firstString.length + secondString.length + thirdString.length;
    let averageLength = Math.floor(lengthOfStrings / 3);

    console.log(lengthOfStrings);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
