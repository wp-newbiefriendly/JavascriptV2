let temperatura = 28;

if (temperatura > 25) {
    console.log("Vruce");
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Umereno");
} else {
    console.log("Hladno");
}

let poeni = [45, 78, 90, 62];
for (let i = 0; i < poeni.length; i++) {
    if (poeni[i] >= 60) {
        console.log("Polozio "+poeni[i]);
    }
    else {
        console.log("Nedovoljno "+poeni[i]);
    }
}

let brojevi = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] % 3 === 0) {
        console.log(brojevi[i]);
    }
}

let imena = ["Ana","Marko","Jovan","Ivana"];
for (let i = 0; i < imena.length; i++) {
    if (imena[i].length >= 4 ) {
        console.log(imena[i]);
    }
}

let godina = 2026;

if ((godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0) {
    console.log("Prestupna");
} else {
    console.log("Nije prestupna");
}

let ocene = [5,4,3,2,1];
let brojac = 0;

for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] === 2) {
        brojac++;
    }
}
console.log(brojac);

let dan = "subota";
switch (dan) {
    case "subota":
        console.log("Vikend");
        break;
    default:
        console.log("Radni dan");
}


let statusi = ["online","offline","offline","online"];
for (let i = 0; i < statusi.length; i++) {
    switch (statusi[i]) {
        case "online":
            console.log("Aktivan");
            break;
        case "offline":
            console.log("Neaktivan");
            break;
    }
}

let brojevi2 = [5, 8, 12, 3];
let najmanji = brojevi2[0];

for (let i = 0; i < brojevi2.length; i++) {
    if (brojevi2[i] < najmanji) {
        najmanji = brojevi2[i];
    }
}

console.log(najmanji);

let ocene2 = [5,3,4,2,5];
let zbir = 0;

for (let i = 0; i < ocene2.length; i++) {
    zbir += ocene2[i];
}
console.log(zbir);

let vreme = "jutro";

switch (vreme) {
    case "jutro":
        console.log("Dobro jutro");
        break;
    case "dan":
        console.log("Dobar dan");
        break;
    case "noc":
        console.log("Laku noc");
        break;
}


let jezici = ["JS","HTML","CSS","Python"];
for (let i = 0; i < jezici.length; i++) {
    switch (jezici[i]) {
        case "JS":
            console.log("Javascript");
            break;
        case "HTML":
            console.log("HyperText Markup Language");
            break
        case "CSS":
            console.log("Cascading Style Sheets");
            break;
        case "Python":
            console.log("Python");
            break;
    }
}

let brojevi3 = [2,4,6,8,10];
for (let i = 0; i < brojevi3.length; i++) {
    brojevi3[i] = brojevi3[i] / 2;
    console.log(brojevi3[i]);
}


let poruke = ["Zdravo","Ćao","Hello","Hi"];
for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].length >= 2) {
        console.log(poruke[i]);
    }
}

let ulogovan = [true,false,true,false];
    for (let i = 0; i < ulogovan.length; i++) {
        if (ulogovan[i] === true) {
            console.log("Ulogovan");
    } else {
            console.log("Nije ulogovan");
        }
}


let broj = 15;
    if (broj % 3 === 0) {
        console.log("Broj deljiv sa 3");
    } else {
        console.log("Broj nije deljiv sa 3");
    }

let ocene3 = [1,2,3,4,5];
    for (let i = 0; i < ocene3.length; i++) {
        if (ocene3[i] === 5) {
            console.log("Odlican");
        }
        else if (ocene3[i] >= 3 && ocene3[i] <= 4) {
            console.log("Dobar");
        } else {
            console.log("Nedovoljan");
        }
    }

let gradovi = ["Beograd","Novi Sad","Niš","Subotica"];

    for (let i = 0; i < gradovi.length; i++) {
        if (gradovi[i].startsWith("N")) {
            console.log(gradovi[i]);
        }
    }

let brojevi5 = [1,2,3,4,5];
let zbir5 = 0;
    for (let i = 0; i < brojevi5.length; i++) {
        if (brojevi5[i] % 2 === 0) {
            zbir5 += brojevi5[i];
        }

    }
    console.log(zbir5);


let poeni2 = 72;

if (poeni2 >= 80) {
    console.log("Odličan");
} else if (poeni2 >= 60) {
    console.log("Dobar");
} else {
    console.log("Nedovoljan");
}

let uloge = ["admin","user","guest"];
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
    }
}

let brojevi6 = [3,7,2,8,5];
let najveci = brojevi6[0];

for (let i = 1; i < brojevi6.length; i++) {
    if (brojevi6[i] > najveci) {
        najveci = brojevi6[i];
    }
}

console.log(najveci);

let temperatura2 = [12,25,30,18];
for (let i = 0; i < temperatura2.length; i++) {
    if (temperatura2[i] > 25) {
        console.log("Vruce "+temperatura2[i]);
    }
    else if (temperatura2[i] >= 15 && temperatura2[i] <= 25) {
        console.log("Umereno "+temperatura2[i]);
    }
    else {
        console.log("Hladno "+temperatura2[i]);
    }
}

let poruke2 = ["Hello","World","JS","Bye"];
let rezultat = "";
for (let i = 0; i < poruke2.length; i++) {
    rezultat += poruke2[i];
}
console.log(rezultat);

let tip = "desktop";
switch (tip) {
    case "desktop":
        console.log("Desktop uredjaj");
        break;
    case "mobile":
        console.log("Mobilni uredjaj");
        break;
    default:
        console.log("Nepoznat uredjaj");
}

let ocene4 = [5,3,4,2,5,3,1];
let brojac4 = 0;

for (let i = 0; i < ocene4.length; i++) {
    if (ocene4[i] >= 4) {
        brojac4++;
    }
}
console.log(brojac4);


let gradovi28 = ["Beograd","Novi Sad","Nis"];
for (let i = 0; i < gradovi28.length; i++) {
    if (gradovi28[i] === "Nis") {
        console.log("Pronadjen Nis");
    }
    else {
        console.log("Nis nije pronadjen");
    }
}

let brojevi29 = [10,20,30];
let novi = [];

for (let i = 0; i < brojevi29.length; i++) {
    novi.push(brojevi29[i] + 5);
}
console.log(novi);


let ocene30 = [5,3,4,2,5,1];

for (let i = 0; i < ocene30.length; i++) {
    if (ocene30[i] === 5) {
        console.log("Odličan " + ocene30[i]);
    }
    else if (ocene30[i] === 3 || ocene30[i] === 4) {
        console.log("Dobar " + ocene30[i]);
    }
    else {
        console.log("Nedovoljan " + ocene30[i]);
    }
}