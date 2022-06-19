function counterBuilder() {
    let counter = 0;

    return function() {
        counter++;
        console.log(counter);
    }
}

let counter = counterBuilder(); // closure

counter();
counter();
counter();
counter();