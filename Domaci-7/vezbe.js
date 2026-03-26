

let pText = document.getElementById("paragraf1");
console.log(pText.innerHTML);

let pTekst = document.getElementsByClassName("tekst")
console.log(pTekst[0].innerHTML);

let h1Naslov = document.querySelector("#naslov")
h1Naslov.innerText = "Novi Naslov";

let box = document.querySelector(".box");
box.innerText = "Novi sadržaj";

let p = document.querySelector("#par1");
p.innerHTML = "<strong>Bold Test</strong>";

let pItem = document.getElementsByClassName("item");
pItem[0].innerHTML = "Prvi promenjen"

let dStari = document.getElementById("glavni")
dStari.innerText += " Dodato";

let ulLista = document.getElementsByClassName("lista");
ulLista[1].innerHTML = "Kruska";

let para = document.querySelector(".para");
para.style.color = "red";

let box1 = document.querySelector("#box1");
box1.innerHTML = "<p>Novi paragraf</p>";

let pStaritekst = document.querySelector("#tekst1");
pStaritekst.innerText += " + dodatak";

//

let cards = document.getElementsByClassName("card");
// for (let c in cards) {
//     cards[c].innerHTML = "Promenjeno";
// }
Array.from(cards).forEach(card => {
    card.innerHTML = "Promenjeno";
});

//
let sBroj = document.getElementById("broj");
sBroj.innerText = +sBroj.innerText + 5;
console.log(sBroj.innerText);

let pOpis = document.querySelector(".opis");
pOpis.innerText = "Novi opis";

let dSadrzaj = document.querySelector("#sadrzaj");
dSadrzaj.innerHTML += '<ul><li>Prvi</li><li>Drugi</li></ul>';

let p12 = document.getElementsByClassName('para1')
Array.from(p12).forEach(p => {
    p.innerText = 'Promenjeno';
})

let h2naslov = document.querySelector("#naslov2");
h2naslov.innerText = "Novi naslov";

let dBox2 = document.getElementsByClassName("box2");
dBox2[1].innerText = "Box 2 Promenjen";

let pPara2 = document.getElementById("para2");
pPara2.innerText = pPara2.innerText + " + dodatni tekst";

let divGlavni = document.querySelector("#glavniDiv");
divGlavni.innerHTML += '<h3>Novi naslov</h3>';

let items = document.getElementsByClassName("sitem");
items[0].innerText = "10";
items[1].innerText = "20";

// next 22

let poruka = document.querySelector("#poruka");
poruka.style.color = "blue";

let kartica1 = document.querySelector(".kartica");
kartica1.innerHTML += "<p>Opis kartice</p>";

let test = document.querySelector(".test");
test.innerText += " "+"World";

let glavniBox = document.querySelector("#glavniBox");
glavniBox.innerHTML = "<ul><li>A</li><li>B</li></ul>";

let par4 = document.getElementsByClassName("para4");
Array.from(par4).forEach(p => {
    p.innerText = "Promenjeno";
})

let broj15 = document.querySelector("#broj15");
broj15.innerText = +broj15.innerText + 10;
console.log(broj15.innerText);

let dCard5 = document.querySelector(".card5");
dCard5.innerHTML += "<h2>Naslov</h2><p>Opis</p>";

let tekst2 = document.querySelector("#tekst2");
tekst2.style.fontSize = "24px";

let dItem4 = document.getElementsByClassName("item4");
dItem4[0].innerText = "Prvi";
dItem4[1].innerText = "Drugi";