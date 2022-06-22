class Circle {
    // private propertie
    #pi = Math.PI;

    constructor(radius) {
        this._radius = radius;
    }

    get area() {
        return this.#pi * this.radius ** 2;
    }

    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value < 0) {
            throw new Error('Radius cannot be lower than zero.');
        }

        this._radius = value;
    }
}

let circle = new Circle(3);
console.log(circle.area.toFixed(2));

circle.radius = 2;
console.log(circle.area.toFixed(2));

// circle.radius = -2; // Uncaught Error Error: Radius cannot be lower than zero.