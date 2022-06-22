function sumTable() {
    // First way  <--!-->
    let sumElements = document.getElementById('total');

    let beerEl = document.getElementById('beer');
    let friesEl = document.getElementById('fries');
    let burgerEl = document.getElementById('burger');
    sumElements.textContent = Number(beerEl.textContent) + Number(friesEl.textContent) + Number(burgerEl.textContent);
}