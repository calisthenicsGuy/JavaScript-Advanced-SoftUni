function carFactory(carArgs) {
 
    function createEngine(hp) {
        const engine = {}
        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }
        return engine;
    }
 
    function createCarriage(color, type) {
        const carriage = { type, color };
        return carriage;
    }
 
    function makeWheels(wheelSize) {
        let newSize = wheelSize % 2 == 0 ? wheelSize-- : wheelSize;
        const wheels = new Array(4).fill(newSize);
        return wheels;
    }
    return {
        model: carArgs.model,
        engine: createEngine(carArgs.power),
        carriage: createCarriage(carArgs.color, carArgs.carriage),
        wheelsize: makeWheels(carArgs.wheelsize)
    }
}

console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));