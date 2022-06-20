function calc(a, b, operationSign) {
    let result;
    switch (operationSign) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        default: throw new Error('Invalid operation sign!');
    }

    return result;
}

module.exports = {
    name : 'Simple calculator',
    calculator : calc,
    description : 'Object with function - calculator.',
};

// We can exports evrytking like strings, obgects, functions...

// module.exports = calc;
// module.exports = 'Hello World!';