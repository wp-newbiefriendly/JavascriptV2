let broj = 7;
if(broj > 5) {
    console.log("Broj je veci od 5");
}

let godine = 16;
if(godine < 18) {
    console.log("Maloletan");
}
else {
    console.log("Punoletan");
}

let ocene = [5,3,4,2,5];
for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] >= 4) {
        console.log(ocene[i]);
    }
}

let imena = ["Ana", "Marko", "Jovan"];
for (let i = 0; i < imena.length; i++) {
    if(imena[i].toLowerCase().startsWith("a")) {
        console.log(imena[i]);
    }
}

let gradovi = ["Beograd", "Novi Sad", "Nis"];
for (let i = 0; i < imena.length; i++) {
    if(gradovi[i].length > 5) {
        console.log(gradovi[i]);
    }
}

let dan = 3;
switch(dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
}

let boja = "zelena";
switch (boja) {
    case "zelena":
        console.log("Kreni");
        break;
    case "crvena":
        console.log("Stop");
        break;
    case "zuta":
        console.log("Paznja");
        break;
}

let statusi = ["online", "offline", "online"];
for (let i = 0; i < statusi.length; i++) {
    switch(statusi[i]) {
        case "online":
            console.log("Korisnik aktivan");
            break;
        case "offline":
            console.log("Korisnik nije aktivan");
            break;
    }
}

let broj2 = 10;

if (broj2 % 2 === 0) {
    console.log("Paran");
} else {
    console.log("Neparan");
}

let rezultati = [45,70,90];
for (let i = 0; i < rezultati.length; i++) {
    if (rezultati[i] >= 60) {
        console.log(rezultati[i], "- Položio");
    }
    else {
        console.log(rezultati[i],"- Nedovoljno");
    }
}

let brojevi = [3,4,8,2];
let zbir = 0;

for (let i = 0; i < brojevi.length; i++) {
    zbir += brojevi[i];
}
console.log(zbir);

let brojevi2 = [1,2,3,4,5];
let max = brojevi2[0];

for (let i = 0; i < brojevi2.length; i++) {
    if (brojevi2[i] > max) {
        max = brojevi2[i];
    }
}
console.log(max);

let poruke = ["Hello", "World", "JS"];

for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].toLowerCase().includes("o")) {
        console.log(poruke[i]);
    }
}

let poeni = 85;

if (poeni >= 80) {
    console.log("Odlican");
} else if (poeni >= 60) {
    console.log("Dobar");
} else {
    console.log("Nedovoljan");
}

let uloge = ["admin", "user", "guest"];
for (let i = 0; i < uloge.length; i++) {
    switch (uloge[i]) {
        case "admin":
            console.log("Admin pristup");
            break;
        case "user":
            console.log("Korisnik");
            break;
        case "guest":
            console.log("Gost");
            break;
    }
}

let brojevi3 = [2, 4, 6, 8];
let i = 0;

while (i < brojevi3.length) {
    console.log(brojevi3[i]);
    i++;
}

let x = 5;

while (x > 0) {
    console.log(x);
    x--;
}

let ocene2 = [5, 4, 3, 2, 1];
let zbir2 = 0;

for (let i = 0; i < ocene2.length; i++) {
    zbir2 += ocene2[i];
}

let prosek = zbir2 / ocene2.length;

console.log(prosek);

let jezici = ["JS", "HTML", "CSS"];

for (let i = 0; i < jezici.length; i++) {
    switch (jezici[i]) {
        case "JS":
            console.log("JavaScript");
            break;

        case "HTML":
            console.log("HTML jezik");
            break;

        case "CSS":
            console.log("CSS jezik");
            break;
    }
}

let ulogovan = [true,false,true];

for (let i = 0; i < ulogovan.length; i++) {
    if (ulogovan[i] === true) {
        console.log("ulogovan");
    } else {
        console.log("Nije ulogovan");
    }
}

let vreme = "noc";
switch (vreme) {
    case "noc":
        console.log("Laku noc");
        break
    case "jutro":
        console.log("Dobro jutro");
        break;
    case "dan":
        console.log("Dobar dan");
        break;
}

let cifre = [1,2,3,4,5];
let zbir3 = 0;

for (let i = 0; i < cifre.length; i++) {
    if (cifre[i] > 3) {
        zbir3 += cifre[i];
    }
}
console.log(zbir3);


let ocene3 = [5,3,4,2,5];
let brojPetica = 0;

for (let i = 0; i < ocene3.length; i++) {
    if(ocene3[i] === 5) {
        brojPetica++;
    }
}
console.log(brojPetica);


let gradovi2 = ["Beograd", "Novi Sad", "Nis"];
let pronadjen = false;

for (let i = 0; i < gradovi2.length; i++) {
    if (gradovi2[i] === "Nis") {
        pronadjen = true;
    }
}

if (pronadjen) {
    console.log("Pronađen Nis");
} else {
    console.log("Nis nije pronađen");
}

let brojevi4 = [1, 2, 3, 4, 5];

for (let i = 0; i < brojevi4.length; i++) {
    brojevi4[i] += 10;
}

console.log(brojevi4);


let tip = "mobilni";

switch (tip) {
    case "mobilni":
        console.log("Mobilni uredaj");
        break;
    case "desktop":
        console.log("Desktop uredaj");
        break;
    default:
        console.log("Nepoznat uredaj");
}

let poruke2 = ["Zdravo", "Ćao", "Hello"];
let spojeno = "";

for (let i = 0; i < poruke2.length; i++) {
    spojeno += poruke2[i] + " ";
}

console.log(spojeno);


let brojevi5 = [10, 20, 30];

for (let i = 0; i < brojevi5.length; i++) {
    brojevi5[i] = brojevi5[i] / 2;
}

console.log(brojevi5);

let ocene = [5, 3, 4, 2, 5];

for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] >= 5) {
        console.log("Odličan");
    } else if (ocene[i] >= 3) {
        console.log("Dobar");
    } else {
        console.log("Nedovoljan");
    }
}