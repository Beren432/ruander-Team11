/*  Valló Gábor
    Junior Frontend
    Team 11*/

function keszito() {
    document.write("Valló Gábor<br>");
    document.write("Junior Frontend<br>");
    document.write("Team 11<hr>");
}

function hatvanyozo(szam, hatvany) {
    var eredmeny = Math.pow(szam, hatvany);
    return eredmeny;
}

function parosLetrehoz(also, felso) {
    let generaltParosSzam = Math.round(Math.random() * (felso - also)) + also;
    if (generaltParosSzam % 2 != 0) {
        if (generaltParosSzam != felso) {
            generaltParosSzam += 1;
        }
        else {
            generaltParosSzam -= 1;
        }
    }
    return generaltParosSzam;
}

function testTomegIndex(tomeg, magassag) {
    let TTI = tomeg / (magassag * magassag);
    if (TTI < 16) {
        return "sulyosSovanysag";
    }
    else if (TTI < 17) {
        return "mersekeltSovanysag";
    }
    else if (TTI < 18.5) {
        return "enyheSovanysag";
    }
    else if (TTI < 25) {
        return "normalisTestsuly";
    }
    else if (TTI < 30) {
        return "tulsulyos";
    }
    else if (TTI < 35) {
        return "IfokuElhizas";
    }
    else if (TTI < 40) {
        return "IIfokuElhizas";
    }
    else {
        return "IIIfokuElhizas";
    }
}

function egeszOsztoE(vizsgalandoSzam, oszto){
    if(vizsgalandoSzam%oszto==0){
        return true;
    }
    else{
        return false;
    }
}

keszito()

document.write(hatvanyozo(Number(prompt("Add meg a szám értékét:")), Number(prompt("Add meg hanyadik hatványra akarod emelni:")))+"<hr>");

document.write(parosLetrehoz(Number(prompt("Add meg a kisebbik szám értékét:")), Number(prompt("Add meg a nagyobbik szám értékét:")))+"<hr>");

document.write(testTomegIndex(Number(prompt("Add meg a testtömegedet kilogrammban:")), Number(prompt("Add meg a magasságodat méterben:")))+"<hr>");

document.write(egeszOsztoE(Number(prompt("Add meg a vizsgálandó számot:")), Number(prompt("Add meg a vizsgálni kívánt osztót:")))+"<hr>");
