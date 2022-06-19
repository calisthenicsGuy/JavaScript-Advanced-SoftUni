const car = {
    make : 'Audi',
    model : 'RS6',
    year : 1017,
    report() { 
        const getModel = function() { 
            this.model;
        };

        return getModel();
    },

    reportWithArrow() {
        const getModel = () => {
            return this.model;
        }

        return getModel();
    },
};

console.log(car.report()); // unndefined
console.log(car.reportWithArrow()); // RS6 
// Arrow function incheritance main function