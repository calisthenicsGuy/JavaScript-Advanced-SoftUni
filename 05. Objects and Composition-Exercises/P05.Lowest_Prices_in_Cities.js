function solve(townsAsArrayOfStrings) {
    let products = getLowestProductPricesPerTown(townsAsArrayOfStrings);
    printProducts(products);

    function getLowestProductPricesPerTown(townsProductsInputArray) {

        let products = {};
        for (const townProductInput of townsProductsInputArray) {
            let [town, product, price] = townProductInput.split(' | ')
                .filter(x => x !== '');

            if (!products.hasOwnProperty(product)) {
                products[product] = {
                    town,
                    price: Number(price)
                };
            } else {
                if (Number(price) < products[product].price) {
                    products[product] = {
                        town,
                        price: Number(price)
                    };
                }
            }
        }

        return products;
    };

    function printProducts(products) {
        for (const product in products) {
            console.log(`${product} -> ${products[product].price} (${products[product].town})`);
        }
    }
};

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);