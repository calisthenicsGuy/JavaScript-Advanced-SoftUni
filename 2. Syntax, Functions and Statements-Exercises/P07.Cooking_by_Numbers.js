function solve (number, operation1, operation2, operation3, operation4, operation5) {
    number = Number(number);
    let operations = [operation1, operation2, operation3, operation4, operation5];
    
    for (let i = 0; i < operations.length; i++) {
        let currOperation = operations[i];

        if (currOperation == "chop") {
            chop();
        } else if (currOperation == "dice") {
            dice();
        } else if (currOperation == "spice") {
            spice();
        } else if (currOperation == "bake") {
            bake();
        } else if (currOperation == "fillet") {
            fillet(); 
        }
    }


    function chop() {
        number /= 2;
        console.log(number);
    } function dice() {
        number = Math.sqrt(number);
        console.log(number);
    } function spice() {
        number++;
        console.log(number);
    } function bake() {
        number *= 3;
        console.log(number);
    } function fillet () {
        number -= number * 0.20;
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');