function solve(input) {
    let matches = input.match(/\w+/g).map(word => word.toUpperCase());
    let result = matches.join(', ');

    console.log(result);
}

solve('Hi, how are you?');
solve('Hello');