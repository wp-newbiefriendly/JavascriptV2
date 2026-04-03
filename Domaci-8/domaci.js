let cars = [
    { name: "Volvo XC60", price: 59990, year: 2023, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2866/28663591/d892ba8a8206-205x154.jpg" },
    { name: "Audi Q3", price: 24990, year: 2020, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2857/28576074/2793f3a70ecd-205x154.jpg" },
    { name: "BMW X3", price: 8790, year: 2008, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2854/28547679/93dc086ae4c9-205x154.jpg" },
    { name: "Audi RS3", price: 55555, year: 2022, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2826/28264115/3dd2988eb626-205x154.jpg" },
    { name: "Audi Q7", price: 52900, year: 2020, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2872/28720962/113a013f3f73-205x154.jpg" },
    { name: "Audi A5", price: 59990, year: 2025, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2836/28369387/e4e61ec940db-205x154.jpg" },

    { name: "Citroen DS4", price: 9000, year: 2015, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2875/28752136/993ceed66690-205x154.jpg" },
    { name: "Audi A3", price: 9990, year: 2013, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2858/28584466/ae7b839a7495-205x154.jpg" },
    { name: "Mercedes Benz S 350", price: 15000, year: 2012, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2246/22462799/074ce723100e-205x154.jpg" },
    { name: "Mercedes Benz GLE 63", price: 139990, year: 2023, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2827/28270092/a38402a1263f-205x154.jpg" },
    { name: "Mercedes Benz E 220", price: 41999, year: 2023, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2837/28374036/0c217c1783ed-205x154.jpg" },
    { name: "Seat Arona", price: 12400, year: 2018, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2516/25161901/5f1d2ce7afd7-205x154.jpg" },

    { name: "Škoda Kodiaq", price: 15500, year: 2017, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2875/28758437/e4b5fcc9d5d5-205x154.jpg" },
    { name: "Opel Astra J", price: 6250, year: 2014, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2851/28514053/224312cc75f9-205x154.jpg" },
    { name: "Volkswagen Golf 6", price: 6400, year: 2010, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2855/28550085/385fcf95cd31-205x154.jpg" },
    { name: "Volkswagen Touran", price: 5300, year: 2011, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2819/28199267/e102f43d9c10-205x154.jpg" },
    { name: "Citroen DS3", price: 4500, year: 2012, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2876/28761804/80e7b44d2d29-205x154.jpg" },
    { name: "Mercedes Benz A 35 AMG", price: 39999, year: 2021, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2877/28770788/fe042cec7d40-205x154.jpg" },

    { name: "Fiat Panda", price: 7990, year: 2014, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2854/28547669/b2f1d737b1f1-205x154.jpg" },
    { name: "Toyota RAV 4", price: 23999, year: 2020, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2864/28641896/439f66f70715-205x154.jpg" },
    { name: "Audi A4", price: 41990, year: 2024, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2875/28754789/83efb81344c4-205x154.jpg" },
    { name: "BMW 320", price: 11999, year: 2012, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2869/28699705/5b723de59a91-205x154.jpg" },
    { name: "Volkswagen Tiguan", price: 57129, year: 2026, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2862/28628530/3cdc4d6323be-205x154.jpg" },
    { name: "Volkswagen Taigo", price:  21490, year: 2026, image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2600/26001141/62aa5a049fc2-205x154.jpg" }
];

for (let car of cars) {
    let div = document.createElement("div");
    div.classList.add("card");

    let image = document.createElement("img");
    image.src = car.image;

    let title = document.createElement("h3");
    title.textContent = car.name;

    let price = document.createElement("p");
    price.classList.add("price");
    price.textContent = car.price + " €";

    let year = document.createElement("span");
    year.classList.add("year");
    year.textContent = car.year + ". god.";

    let row = document.createElement("div");
    row.classList.add("price-row");

    row.append(price, year);

    div.append(image, title, row);

    if ( car.year === 2025 || car.year === 2026 ) {
        let badge = document.createElement("span");
        badge.classList.add("badge");
        badge.textContent = "NOVO";

        div.append(badge);
        div.classList.add("new");
    }

    document.querySelector("#main").appendChild(div);
}