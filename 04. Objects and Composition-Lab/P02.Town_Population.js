function solve(input) {
    let towns = {};

    for (const line of input) {
        // let singleLine = line.split(" <-> ");
        // let town = singleLine[0];
        // let population = Number(singleLine[1]);
        let [town, populationText] = line.split(" <-> ");
        let population = Number(populationText);

        if (!towns[town]) {
            towns[town] = 0;
        }
        towns[town] += population;
    }

    return Object.keys(towns).forEach(
        x => console.log(`${x} : ${towns[x]}`)
    );
}

console.log(solve(
    ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));

console.log(solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));