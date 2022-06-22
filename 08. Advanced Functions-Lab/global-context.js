// function solve() {
//     // console.log(this); // global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}
    
//     let obj = {
//         name : "Rado",
//         printName() { console.log(this) }, 
//     };

//     let printName = obj.printName;
//     console.log(printName);
//     // console.log(this); // global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}
//     // console.log(obj.printName()); // {name: 'Rado', printName: ƒ}
// }

// solve();

let person = {
    name : "Peter",
    age : 20,
    gender : "male",
    report() {
        console.log(this);
    }
};

person.report();

let report = person.report();
console.log(report);

// Global invocation
// Method invocation
// DOM elemnt