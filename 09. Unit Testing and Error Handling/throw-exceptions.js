function rndFunction(rndText) {
    if (rndText.length <= 5) {
        // throw new Error('Your text is too small!');

        // Throw error like object ( example )
        throw {
            message : 'Ypur text is too small!',
            type : 'SOME_ERROR_TYPE',
        };
    } 

    return 'Process!';
}

// console.log(rndFunction('r')); // {message: 'Ypur text is too small!', type: 'SOME_ERROR_TYPE'}
// console.log(rndFunction('too big text :)')); // Process!


function app() {
    try {
        let input = rndFunction('r'); 
        console.log(input);
    } catch (err) {
        console.log(err); // {message: 'Ypur text is too small!', type: 'SOME_ERROR_TYPE'}
    } finally {
        console.log("always executes last");
    }
}

app()
