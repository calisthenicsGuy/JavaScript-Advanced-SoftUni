function cityTaxes(name, population, treasury) {
    let city = {
        taxRate : 10,
        name : name,
        population : population,
        treasury : treasury,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population *= percentage + 1;
        },
        appltRecession(percentage) {
            percentage /= 100;
            this.population *= percentage - 1;
        },
    };

    return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

