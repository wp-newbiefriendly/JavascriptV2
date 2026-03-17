// Brojevi i if

    let broj = 10;
if(broj > 5)
{
    console.log("Broj je veci od 5");
}

let godine = 18;
if(godine == 18)
{
    console.log("Punoletan");
}

let x = 3;
let y = 5;
if(x < y)
{
    console.log("X je manje od Y");
}

let poeni = 70;
if(poeni >= 60)
{
    console.log("Polozio");
}

let temperatura = 30;
if(temperatura > 25)
{
    console.log("Vruce je");
}

// Boolean i if

let jeOnline = true;
if(jeOnline == true)
{
    console.log("Korisnik je online");
}

let imaNalog = false;
if(imaNalog == false)
{
    console.log("Nema nalog");
}

let ulogovan = true;
if(ulogovan == true)
{
    console.log("Uspesno ste ulogovani");
}

let punoletan = true;
if(punoletan == true)
{
    console.log("Dozvoljen pristup");
}

let jeAdmin = false;
if(jeAdmin == false)
{
    console.log("Nemate admin prava");
}

// String i if

let ime = "Ana";
if(ime == "Ana")
{
    console.log("Zdravo Ana");
}

let grad = "Beograd";
if(grad == "Beograd")
{
    console.log("Glavni grad");
}

let jezik = "Javascript";
if(jezik == "Javascript")
{
    console.log("Ucis JS");
}

let status = "Online";
if(status == "Online")
{
    console.log("Korisnik je online");
}
let dan = "Ponedeljak"
if(dan == "Ponedeljak")
{
    console.log("Pocetak nedelje");
}

// Array i if

let brojevi = [1, 2, 3];
if(brojevi[0] > 0)
{
    console.log("Pozitivan broj");
}

let imena = ["Ana", "Marko"];
if (imena[0] === "Ana") {
    console.log("Pronađena Ana");
}

let ocene = [5, 4, 3];
if(ocene[0] == 5)
{
    console.log("Odlican")
}

let statusi = [true, false];
if(statusi[1] == false)
{
    console.log("Offline");
}

let jezici = ["HTML", "CSS", "Javascript"];
if(jezici[2] == "Javascript")
{
    console.log("JS pronadjen");
}

// Kombinovane vežbe

let broj2 = 8;

if (broj2 % 2 === 0) {
    console.log("Paran broj");
}

let rezultat = 45;
if(rezultat < 50)
{
    console.log("Nedovoljan");
}

let lozinka = "1234";
if(lozinka == "1234")
{
    console.log("Slaba lozinka");
}

let poruka = "Ucim Javascript";
if(poruka.includes("Javascript"))
{
    console.log("JS poruka");
}

let korisnici = ["admin", "user"];

if (korisnici[0] === "admin") {
    console.log("Admin pristup");
}
