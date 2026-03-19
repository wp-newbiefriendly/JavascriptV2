
alert("Dobrodosao");

let name = prompt("Upisite vase ime").toLowerCase();
console.log(name);

let names = ["admin", "administrator", "milan"];
if (names.includes(name)) {
    console.log("Dobrodosao administratore");
}
else {
    console.log("Nemate pristup");
}