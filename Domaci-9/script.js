let cities = [
    "Beograd",
    "Subotica",
    "Novi Sad",
    "Sarajevo",
    "Podgorica",
    "Zagreb",
    "Ljubljana",
    "Skopje",
    "Tirana",
    "Priština",
    "Mostar",
    "Banja Luka",
    "Niš",
    "Kragujevac",
    "Novi Pazar",
    "Split",
    "Rijeka",
    "Osijek",
    "Zenica",
    "Bitola",
    "Shkodër",
    "Bar",
    "Peja",
    "Vranje",
    "Užice",
    "Čačak"
]

let types = [
    "Stanovi",
    "Kuce",
    "Poslovni prostori",
    "Placevi",
    "Garaže/parking"
];

let roomNumbers = [
    "Garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan"
]

let realEstates = [
    {
        city: "Beograd",
        option: "Garsonjera",
        type: "Stanovi",
        price: 50000,
        size: 25
    },
    {
        city: "Novi Sad",
        option: "null",
        type: "Kuce",
        price: 22000,
        size: 85
    },
    {
        city: "Niš",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 42000,
        size: 38
    },
    {
        city: "Kragujevac",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 61000,
        size: 56
    },
    {
        city: "Subotica",
        option: "null",
        type: "Kuce",
        price: 78000,
        size: 120
    },
    {
        city: "Podgorica",
        option: "Garsonjera",
        type: "Stanovi",
        price: 47000,
        size: 27
    },
    {
        city: "Zagreb",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 135000,
        size: 78
    },
    {
        city: "Mostar",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: 53000,
        size: 44
    },
    {
        city: "Split",
        option: "null",
        type: "Poslovni prostori",
        price: 160000,
        size: 95
    },
    {
        city: "Užice",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price: 69000,
        size: 63
    }
]

let selectElement = document.querySelector("#cities");
let typesSelector = document.querySelector("#typeSelector")
let roomSelector = document.querySelector("#roomSelector");

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;
    selectElement.appendChild(cityOption);
}
for (let type of types) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;

    typesSelector.appendChild(typeOption);
}
for (let room of roomNumbers) {
    let roomOption = document.createElement("option");
    roomOption.textContent = room;
    roomSelector.appendChild(roomOption);
}

let currentCity = null;
let currentRoom = null;
let currentType = null;


selectElement.addEventListener("change", function (event) {
    currentCity = event.currentTarget.value;
})

typesSelector.addEventListener("change", function (event) {
    currentType = event.currentTarget.value;
})

roomSelector.addEventListener("change", function (event) {
    currentRoom = event.currentTarget.value;
})

document.querySelector("#searchProperties").addEventListener("click", function () {
    console.log(currentCity, currentType, currentRoom);
})

for (let estate of realEstates) {

    let estateHolder = document.createElement("div");
    let estateTitle = document.createElement("p");
    estateTitle.innerText = estate.type+" "+estate.city;

    let estateOption = document.createElement("p");

    if (estate.option == null) {
        estateOption.innerText = "-";
    } else {
        estateOption.innerText = estate.option;
    }

    let estatePrice = document.createElement("p");
    estatePrice = estate.price;

    let estateSize = document.createElement("p");
    estateSize = estate.size;

    estateHolder.append(estateTitle);
    estateHolder.append(estateOption);
    estateHolder.append(estatePrice);
    estateHolder.append(estateSize);

    document.querySelector("#estates").appendChild(estateHolder);

}

