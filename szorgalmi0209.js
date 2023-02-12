const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];

function ObjektumFeltolto(feltoltendoElem) {
    const beolvasottAdat = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let objektum = {};
        let daraboltAdatSor = feltoltendoElem[i].split(';');
        objektum.nev = daraboltAdatSor[0];
        objektum.helyezes = daraboltAdatSor[1];
        objektum.valtozas = daraboltAdatSor[2];
        objektum.pontszam = daraboltAdatSor[3];
        beolvasottAdat.push(objektum);
    }
    return beolvasottAdat;
}
const fifaAdatok = ObjektumFeltolto(csapatAdat);


/*1) Adja meg aktuálisan hány csapat szerepel a ranglistán */

document.write("A ranglistán jelenleg " + csapatAdat.length + " csapat szerepel.<br>");


/*2) Írja ki mennyi a résztvevő csapatok átlagpontszáma*/

let atlag=0;
for(let j=0;j<fifaAdatok.length;j++){
    atlag=atlag+Number(fifaAdatok[j].pontszam);
}
atlag=atlag/csapatAdat.length;
document.write("A csapatok átlagpontszáma: " + atlag + "<br>");


/*3) Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!*/

document.write("Az átlagpontszámnál több pontot elérő országok:<br>");
for(let k=0;k<fifaAdatok.length;k++){
    if(fifaAdatok[k].pontszam>atlag){
        document.write(fifaAdatok[k].nev+" ("+fifaAdatok[k].pontszam+" pont)<br>");
    }
}