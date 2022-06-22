function solve(name, population, treasury) {
    // First way:
    // let city = {
    //     name : name,
    //     population : population,
    //     treasury : treasury,        
    // };

    // return city;


    // Second way:
    // let city = {};
    // city.name = name;
    // city.population = population;
    // city.treasury = treasury;
    // return city;

    // Third way - shorthand syntax
    let city = { name, population, treasury };
    return city;
}

console.log(solve('Tortuga', 7000, 15000));
console.log(solve('Santo Domingo', 12000, 23500));