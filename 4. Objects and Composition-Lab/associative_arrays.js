let phoneBook = {
    "Ivan Ivanov" : 0878636242,
    "Georgi Arnaudov" : 0862437352,
    "Petar Petrov" : 0874621364,
    Pesho : 0876756242,
};

phoneBook["Ivan Ivanov"] = 0872532722
// console.log(phoneBook["Ivan Ivanov"]); // 872532722

// for in
for (let key in phoneBook) {
    console.log(`${key} - ${phoneBook[key]}`);
}

let keys = Object.keys(phoneBook);
console.log(keys); // (4) ['Ivan Ivanov', 'Georgi Arnaudov', 'Petar Petrov', 'Pesho']

let values = Object.values(phoneBook);
console.log(values); // (4) [872532722, 862437352, 874621364, 876756242]

Object.keys(phoneBook).forEach(
    x => console.log(`${x} - ${phoneBook[x]}`)
);
// Ivan Ivanov - 872532722
// Georgi Arnaudov - 862437352
// Petar Petrov - 874621364
// Pesho - 876756242

let entries = Object.entries(phoneBook);
console.log(entries); // (4) [Array(2), Array(2), Array(2), Array(2)]

for (let kvp of entries) {
    console.log(kvp);
}
// (2) ['Ivan Ivanov', 872532722]
// (2) ['Georgi Arnaudov', 862437352]
// (2) ['Petar Petrov', 874621364]
// (2) ['Pesho', 876756242]

entries.forEach(x => console.log(x));
// (2) ['Ivan Ivanov', 872532722]
// (2) ['Georgi Arnaudov', 862437352]
// (2) ['Petar Petrov', 874621364]
// (2) ['Pesho', 876756242]