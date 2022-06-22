function areaOfCircle(argument) {
    let  argumentTyoe = typeof(argument);

    if(argumentTyoe == "number") {
        let result = Math.PI * argument * argument;
        console.log(result.toFixed(2));
    }
    else {
        console.log("We can not calculate the circle area, because we receive a string.");
    }
}

areaOfCircle(5);