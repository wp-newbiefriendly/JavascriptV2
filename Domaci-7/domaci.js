let ads = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://www.automanijak.com/resources/images/variant/601/octavia_7.jpg"
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://gcdn.polovniautomobili.com/user-images/thumbs/2865/28650253/e2a54f10f7f3-370x278.jpg"
    }
];

// Domaci bez resenja //

// let carList = document.getElementById("products");
//
// ads.forEach(ad => {
//     carList.innerHTML += `
//     <div>
//        <h2>${ad.title}</h2>
//        <p>${ad.price}</p>
//        <img src="${ad.image}" width="150">
//     </div>
// `;
//
// });

// Resenje domaceg #7.26 + #7.27//

let productsElement = document.getElementById("products");

for (let ad in ads) {
    console.log(ads[ad]['title'], ads[ad]['price'], ads[ad]['image']);
    productsElement.innerHTML += ads[ad]['title']+" "+ads[ad]['price']+ " "+ads[ad]['image']+"<br>";
}




