let car = {
    model : "BMW",
    year : 2010,
    facelift : true
}

let jsonCar = JSON.stringify(car); // string - {"model":"BMW","year":2010,"facelift":true}
console.log(jsonCar);
// console.log(jsonCar.model); // undefined

let parsedCar = JSON.parse(jsonCar);
console.log(parsedCar); // object - {model: 'BMW', year: 2010, facelift: true}
console.log(parsedCar.model); // BMW
