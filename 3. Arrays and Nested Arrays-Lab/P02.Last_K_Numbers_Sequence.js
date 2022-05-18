function solve (n, k) {
    let array = [1, 1];
    array.length = n;

    for (let i = 2; i < array.length; i++) {
        let nextElement = 0;
        for (let j = i-1; j >= i-k; j--) {
            if (j < 0) {
                break;
            }

            nextElement += array[j];
        }
        array[i] = nextElement;
    }
    
    console.log(array);
}

solve(8, 2);