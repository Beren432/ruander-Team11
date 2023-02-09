const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

/*1) Írd ki mely ország csatlakozott utoljára az UNIO-hoz.*/

let utolsoOrszag = 0;

for (let i = 0; i < EuropaiUnio.length; i++) {
    let csatlakozasiDatum = EuropaiUnio[i].csatlakozas.slice(0, 4);
    if (csatlakozasiDatum > EuropaiUnio[utolsoOrszag].csatlakozas.slice(0, 4)) {
        utolsoOrszag = i;
    }
}
document.write("Utoljára " + EuropaiUnio[utolsoOrszag].orszag + " csatlakozott az EU-hoz.<br>");


/*2) Készíts statisztikát, melyik évben hány ország csatlakozott....
(Ha ügyes vagy, csak azokat az éveket listázod amelyekben történt csatlakozás!)*/

let orszagszam = 0;

for (let i = 1950; i < 2020; i++) {
    for (let j = 0; j < EuropaiUnio.length; j++) {
        if (EuropaiUnio[j].csatlakozas.slice(0, 4) == i) {
            orszagszam = 0;
            for (let k = 0; k < EuropaiUnio.length; k++) {
                if (EuropaiUnio[k].csatlakozas.slice(0, 4) == i) {
                    orszagszam++;
                }
            }
            document.write("Év: " + i + " Csatlakozott országok száma: " + orszagszam + "<br>");
            break;
        }
    }
}


/*3) Próbáld meg az EU feladasorban lévő függvényeket módosítani az alábbi módon

A csatlakozás évét, bármelyik paraméterben megadott évre le tudja szűrni...
A csatlakozott állam nevének, bármilyen államot meg tudjunk adni...
A csatlakozás hónapja bármilyen hónap lehet... */

function csatlakozottK7(ev) {
    let k7 = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.startsWith(ev)) {
            k7++;
        }
    }
    return k7;
}
let ev = Number(prompt("Add meg az évet!"));
document.write(`<br>${ev}-ben csatlakozott államok száma: ${csatlakozottK7(ev)}`);

function CsatlakozottE(orszagNeve) {
    let csatlakozottE = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == orszagNeve) {
            csatlakozottE = true;
        }
    }
    return csatlakozottE;
}

function EredmenyKiiro(eredmeny,eredmenySzovegEgy, eredmenySzovegKetto){
	if(eredmeny==true){
		document.write("<br>"+orszagNeve+eredmenySzovegEgy);
	}
    else{
    	document.write("<br>"+orszagNeve+eredmenySzovegKetto);
    }
}
let orszagNeve = prompt("Add meg az országot!");
EredmenyKiiro(CsatlakozottE(orszagNeve), " tagja az EU-nak.", " nem tagja az EU-nak.");
