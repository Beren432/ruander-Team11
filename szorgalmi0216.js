/*1) Csak a fele
Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből minden második karaktert törli. */

function csakafele(atadottSzoveg){
	let felezettSzoveg="";
    for(let i=1;i<atadottSzoveg.length;i=i+2){ 	
    	felezettSzoveg+=atadottSzoveg[i];
    }
    return felezettSzoveg;
}
document.write(csakafele("tizkarakter"));
document.write("<hr>");

/*2) Tabusító
Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből bizonyos szintén paraméterként kapott karaktert töröl.*/

function tabusito(atadottSzoveg,torlendoKar){
    let tabusitottSzoveg="";
    for(let j=0;j<atadottSzoveg.length;j++){ 
        if (atadottSzoveg[j]!=torlendoKar){
            tabusitottSzoveg+=atadottSzoveg[j];
        }
    }
    return tabusitottSzoveg;
}
document.write(tabusito("répa retek mogyoró","r"));
document.write("<hr>");

/*3) Magánhangzó tabusító
Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből törli az összes magánhangzót.*/

function MaganhTabusito(atadottSzoveg){
    let MghTabuSzoveg="";
    let maganhangzok=["a","á","e","é","i","í","o","ó","ö","ő","u","ú","ü","ű"];
    for(let k=0;k<atadottSzoveg.length;k++){ 
                let szerepele=false;
        for (let l=0;l<maganhangzok.length;l++){
            if (atadottSzoveg[k]==maganhangzok[l]){
                szerepele=true;
            }
        }
        if (szerepele==false){
            MghTabuSzoveg+=atadottSzoveg[k];
        }
    }
    return MghTabuSzoveg;
}
document.write(MaganhTabusito("korán reggel ritkán rikkant a rigó"));
document.write("<hr>");
