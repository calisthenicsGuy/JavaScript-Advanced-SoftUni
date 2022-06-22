function solve(input) {
    let heros = [];
    for (const heroArgs of input) {
        let[name, level, items] = heroArgs.split(" / ");
        let hero = {};

        if (items.length != 0) {
             hero = {
                name,
                level,
                items : items.split(", "), 
            };
        } else if (items.length == 0) {
             hero = {
                name,
                level,
                items : [], 
            };
        }

        heros.push(hero);
    }

    let jsonHeros = JSON.stringify(heros);
    return jsonHeros;
}

console.log(solve
    (['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));