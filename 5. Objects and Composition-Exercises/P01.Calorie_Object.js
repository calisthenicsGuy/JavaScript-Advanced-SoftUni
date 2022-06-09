function solve(input) {
    let foods = { };

    for (let i = 0; i < input.length; i+=2) {
        let name = input[i];
        let calorie= input[i+1];

        foods[name] = calorie;
    }

    return foods;

    // return Object.keys(foods).forEach(
    //     x => console.log(`${x} : ${foods[x]}`)
    // )
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));