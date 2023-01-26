//Tömb generálása és megjelenítése
let aHalmaz = [];
let bHalmaz = [];
for (let i = 0; i < 10; i++) {
    aHalmaz.push(Math.round(Math.random() * 100));
}
for (let i = 0; i < 10; i++) {
    bHalmaz.push(Math.round(Math.random() * 100));
}
document.write("A generált halmazok elemei:");
document.write("<br>A halmaz:");
for (let i = 0; i < aHalmaz.length; i++) {
    document.write(aHalmaz[i] + ",");
}
document.write("<br>B halmaz:");
for (let i = 0; i < bHalmaz.length; i++) {
    document.write(bHalmaz[i] + ",");
}

//Halmazművelet METSZET
let metszet = [];
// A halmaz
for (let i = 0; i < aHalmaz.length; i++) {
    for (let j = 0; j < bHalmaz.length; j++) {
        if (aHalmaz[i] == bHalmaz[j]) {
            let szerepelE = false;
            for (let k = 0; k < metszet.length; k++) {
                if (aHalmaz[i] == metszet[k]) {
                    szerepelE = true;
                }
            }
            if (szerepelE == false) {
                metszet.push(aHalmaz[i]);
            }
        }
    }
}


document.write("<br>METSZET:");
if (metszet.length == 0) {
    document.write("nincs közös elem!");
}
else {
    for (let i = 0; i < metszet.length; i++) {
        document.write(metszet[i] + ",");
    }
}