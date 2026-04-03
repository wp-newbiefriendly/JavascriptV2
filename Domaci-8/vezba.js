// let p = document.createElement("p");
// p.textContent = "Zdravo";
// p.style.color = "red";
// document.getElementById("glavni").appendChild(p);

// let imena = ["Ana", "Marko", "Jovan"];
// let ul = document.getElementById("lista");
// for (ime of imena) {
//     let li = document.createElement("li");
//     li.textContent = ime;
//     ul.appendChild(li);
// }
//
// let broj = 15;
//
// let p = document.getElementById("par");
//
// if (broj > 10) {
//     p.textContent = "Broj je veći od 10";
// } else {
//     p.textContent = "Broj je manji ili jednak 10";
// }

// let ocene = [5,3,4,2,5];
// let zbir = 0;
// for (let ocena of ocene) {
//     zbir += ocena;
// }
// document.getElementById("zbir").textContent = zbir;

// let box = document.getElementById("box");
// let h2 = document.createElement("h2");
// h2.textContent = "Naslov";
// let p = document.createElement("p");
// p.textContent = "Opis";
// box.appendChild(h2);
// box.appendChild(p);
// document.getElementById("box")

// let gradovi = ["Beograd","Novi Sad","Niš","Negotin"];
// let ul = document.getElementById("gradovi");
// for (let grad of gradovi) {
//     if (grad.startsWith("N")) {
//         let li = document.createElement("li");
//         li.textContent = grad;
//         ul.appendChild(li);
//     }
// }

// let card = document.querySelector(".card");
// let h3 = document.createElement("h3");
// h3.textContent = "Kartica";
// let p = document.createElement("p");
// p.textContent = "Opis kartice";
// card.appendChild(h3);
// card.appendChild(p);
// document.querySelector(".card");

// let poeni = 72;
// let tekst = "";
//     if (poeni >= 85) {
//         tekst = "Odlican";
//     }
//     else if (poeni >= 60) {
//         tekst = "Dobar";
//     }
//     else {
//         tekst = "Nedovoljan"
//     }
//     document.getElementById("rezultat").textContent = tekst;

// let brojevi = [2,4,6,8,10];
// let ul = document.getElementById("listaBrojeva")
// for (let broj of brojevi) {
//  let li = document.createElement("li");
//  li.textContent = broj ** 2;
//  ul.appendChild(li);
// }

// let div = document.getElementById("container");
// for (let i = 1; i <= 5; i++) {
//     let p = document.createElement("p");
//     p.textContent = "Paragraf " + i;
//     div.appendChild(p);
// }

// let uloge = ["admin","user","guest"];
// let ul = document.getElementById("uloge");
//
// for (let uloga of uloge) {
//     let li = document.createElement("li");
//     switch (uloga) {
//         case "admin":
//             li.textContent = "Admin pristup";
//             break;
//         case "user":
//             li.textContent = "Korisnik";
//             break;
//         case "guest":
//             li.textContent = "Gost";
//             break;
//     }
//     ul.appendChild(li);
// }

// let statusi = [true,false,true];
// let ul = document.getElementById("statusi");
// for (let status of statusi) {
//     let li = document.createElement("li");
//     if (status == false) {
//         li.textContent = "Nije ulogovan";
//     } else {
//         li.textContent = "Ulogovan";
//     }
//     ul.appendChild(li);
// }

// let p = document.getElementById("tekst");
// p.innerHTML = "<strong>Novi tekst u bold</strong>";

// let brojevi = [1,3,5,7,9,10];
// let ul = document.getElementById("neparni");
// for (let broj of brojevi) {
//     if (broj % 2 !== 0) {
//         let li = document.createElement("li");
//         li.textContent = broj;
//         ul.appendChild(li);
//     }
// }

// let div = document.querySelector(".box");
// let p = document.createElement("p")
// p.textContent = "Hello";
// p.style.color = "blue";
//
// div.appendChild(p);

// let imena = ["Ana","Marko","Jovan"];
// let ul = document.getElementById("imena")
// for (let ime of imena) {
//     if (ime.length >= 4) {
//         let li = document.createElement("li");
//         li.textContent = ime;
//         ul.appendChild(li);
//     }
// }

// let div = document.getElementById("glavni")
// let h2 = document.createElement("h2")
// h2.textContent = "Naslov";
// let p = document.createElement("p")
// p.textContent = "Paragraf";
//
// div.appendChild(h2);
// div.appendChild(p);
//
// let pStari = document.getElementsByTagName("p");
// pStari[0].textContent = "Promenjen paragraf";

// let brojevi = [10,20,30,40,50];
// let ul = document.getElementById("listaBrojeva")
// for (let broj of brojevi) {
//     let li = document.createElement("li");
//     li.textContent = "Broj:"+ " " +broj;
//     ul.appendChild(li);
// }

// let div = document.querySelector(".container");
// let p1 = document.createElement("p")
// p1.textContent = "Paragraf 1";
// div.appendChild(p1);
//
// for (let i = 2; i <= 4; i++) {
//     let p = document.createElement("p");
//     p.textContent = `Paragraf ${i}`;
//     div.appendChild(p);
// }

// let ocene = [5, 4, 3, 2 ,1];
// let ul = document.getElementById("ocena");
//
// for (let ocena of ocene) {
//     let li = document.createElement("li");
//     if (ocena === 5) {
//         li.textContent = "Odlican";
//     } else if (ocena >= 3) {
//         li.textContent = "Dobar";
//     } else {
//         li.textContent = "Nedovoljan";
//     }
//     ul.appendChild(li);
// }