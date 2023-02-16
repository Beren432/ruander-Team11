//Javascript felmérő
// Valló Gábor
// Junior Frontend Team 11

//1. feladat
function hosszEllenor(szoveg){
    if (szoveg.length<8){
        return false;
    }
    else{
        return true;
    }
}

if (hosszEllenor("feladatteszt")){
	document.write("szoveg jo");
}  
else{
    document.write("szoveg rossz");
}
document.write("<hr>");
    
//2. feladat
function tajSzamEllenor(tajszam){
	if (tajszam.length!=9){
        return false;
    }
    else {
        let paros=(Number(tajszam[1])+Number(tajszam[3])+Number(tajszam[5])+Number(tajszam[7]))*7;
        let paratlan=(Number(tajszam[0])+Number(tajszam[2])+Number(tajszam[4])+Number(tajszam[6]))*3;

        if ((paros+paratlan)%10==tajszam[8]){
            return true;
        }
        else {
            return false;
        }
    }
}

if (tajSzamEllenor("037687210")){
	document.write("TAJ-szám jo");
}  
else{
    document.write("TAJ-szám rossz");
}
document.write("<hr>");

//3. feladat
function tombTerjedelem(tomb){
    let legkisebb=tomb[0];
    let legnagyobb=tomb[0];
    for (let i=0;i<tomb.length;i++){
        if (tomb[i]<legkisebb){
            legkisebb=tomb[i];
        }
        if (tomb[i]>legnagyobb){
            legnagyobb=tomb[i];
        }
    }
    return legnagyobb-legkisebb;
}

let vizsgaltTomb= [3, 5, 10, 16, 9];
document.write(tombTerjedelem(vizsgaltTomb));
document.write("<hr>");

//4. feladat

const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

function legidosebbDolgozo(dolgozokAdatai){
    let legidosebb=0;
    for (let j=0;j<dolgozokAdatai.length;j++){
        if (dolgozokAdatai[j].kor>dolgozokAdatai[legidosebb].kor){
            legidosebb=j;
        }
    }
    return legidosebb;
}

document.write(legidosebbDolgozo(Dolgozok));
document.write("<hr>");

//5. feladat

function fizetesEmeles(dolgozokAdatai){
    let atlagfizetes=0;
    for (let k=0;k<dolgozokAdatai.length;k++){
        atlagfizetes+=dolgozokAdatai[k].fizetes;
    }
    atlagfizetes=atlagfizetes/dolgozokAdatai.length;

    for (let l=0;l<dolgozokAdatai.length;l++){
        if (dolgozokAdatai[l].fizetes<atlagfizetes){
            dolgozokAdatai[l].fizetes=Math.floor(dolgozokAdatai[l].fizetes*1.1);
        }
    }

    return dolgozokAdatai;
}

fizetesEmeles(Dolgozok);
for (let m=0;m<Dolgozok.length;m++){
    document.write(Dolgozok[m].nev+" fizetése: "+Dolgozok[m].fizetes+"<br>");
}