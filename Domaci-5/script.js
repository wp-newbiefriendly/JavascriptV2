
let cars = [
    "bmw", "audi", "mercedes", "toyota", "honda", "ford", "chevrolet", "nissan", "mazda", "kia",
    "hyundai", "volkswagen", "skoda", "seat", "renault", "peugeot", "citroen", "fiat", "alfa romeo", "jeep",
    "dodge", "chrysler", "tesla", "volvo", "saab", "subaru", "mitsubishi", "suzuki", "isuzu", "lexus",
    "infiniti", "acura", "cadillac", "lincoln", "mini", "land rover", "jaguar", "porsche", "ferrari", "lamborghini",
    "maserati", "bugatti", "rolls royce", "bentley", "aston martin", "opel", "daewoo", "geely", "changan", "zastava"
];

for(let i = 0; i < cars.length; i++) {
    if (!cars[i].toLowerCase().startsWith("a")) {
        console.log(cars[i]);
    }
}


// ** Resenje sa casa 5.29 - 5.32**

// let cars = [
//     "bmw", "audi", "mercedes", "toyota", "honda", "ford", "chevrolet", "nissan", "mazda", "kia",
//     "hyundai", "volkswagen", "skoda", "seat", "renault", "peugeot", "citroen", "fiat", "alfa romeo", "jeep",
//     "dodge", "chrysler", "tesla", "volvo", "saab", "subaru", "mitsubishi", "suzuki", "isuzu", "lexus",
//     "infiniti", "acura", "cadillac", "lincoln", "mini", "land rover", "jaguar", "porsche", "ferrari", "lamborghini",
//     "maserati", "bugatti", "rolls royce", "bentley", "aston martin", "opel", "daewoo", "geely", "changan", "zastava"
// ];
//
// for(let i = 0; i < cars.length; i++) {
//
//     let firstLetter = cars[i][0].toLowerCase();
//
//     if (firstLetter === "a") {
//        continue;
//     }
//
//     console.log(cars[i])
// }