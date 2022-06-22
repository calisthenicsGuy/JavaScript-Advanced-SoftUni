function fruit (fruit, grams, pricePerKilogram) {
    let kilograms = grams / 1000;
    let totalPrice = pricePerKilogram * kilograms;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);