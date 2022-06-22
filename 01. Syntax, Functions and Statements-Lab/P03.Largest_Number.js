function lagestNumber(a, b, c) {

    let largestNumber;

    if (a > b && a > c) {
        lagestNumber = a;
    }
    else if (b > a && b > c) {
        lagestNumber = b;
    }
    else if (c > a && c > b) {
        lagestNumber = c;
    }

    console.log("The largest number is " + lagestNumber + ".")
}

lagestNumber(5, -3, 16);