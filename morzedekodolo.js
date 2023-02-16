const morzeABC = [
    "A	.-",
    "Á	.--.-",
    "Ä	.-.-",
    "B	-...",
    "C	-.-.",
    "D	-..",
    "E	.",
    "É	..-..",
    "F	..-.",
    "G	--.",
    "H	....",
    "I	..",
    "J	.---",
    "K	-.-",
    "L	.-..",
    "M	--",
    "N	-.",
    "O	---",
    "Ö	---.",
    "P	.--.",
    "Q	--.-",
    "R	.-.",
    "S	...",
    "T	-",
    "U	..-",
    "Ü	..--",
    "V	...-",
    "W	.--",
    "X	-..-",
    "Y	-.--",
    "Z	--..",
    "!	--.--",
    ")	-.--.-",
    "(	-.--.",
    ",	--..--",
    "-	-....-",
    "+	.-.-.",
    ".	.-.-.-",
    "/	-..-.",
    ":  ---...",
    "?	..--..",
    /*    ""  .-..-.",
    "'	.----."*/
]

const morzeKod = [
    ".-   .-.   ..   ...   --..   -   ---   -   .   .-..   ..-..   ...   --..",
    ".-       -...   .-   .-.   .--.-   -   ...   .--.-   --.       .-   --..   --..--       .-   --   ..   -.-   ---   .-.       .   --.   -.--       .-..   ..-..   .-..   .   -.-       -.-   ..-..   -       -   .   ...   -   -...   .   -.       .-..   .-   -.-   ..   -.-   .-.-.-     --.   .-.   .-   ..-.   ..-.   ..   -   ..   ",
/*    -.   .       .-   --.   --.   ---   -..   .---       .-   --..       .   --.   ..-..   ...   --..   ...   ..-..   --.   .   -..       --   ..   .-   -   -   --.--       .   .-..   --   ..-   .-..   ..   -.-   .-.-.-
    .-..   .   ---   -.   .-   .-.   -..       -.-.   ---   ....   .   -.   ;.---   .--.-   .-.   ---   -..       .-   --..       ..-   -   .-   -..   --..--       .---   .--.-   .-.   ---   --       .-   --..       ..-   -   .-   -..       ..-..   -.       ..   ...   .-.-.-
    -.-   ---   ...   --..   -   ---   .-..   .--.-   -.   -.--   ..       -..   .   --..   ...   ---   ;-.-.   ...   .-   .-..   ---   -..   -.   ..       -.-.   ...   .-   -.-       .-   --..       -   ..-   -..   --..--       .-   -.-   ..       ...-   .-   .-..   .-   ....   .-       ....   ..   -   -   .-.-.-
    .   .-.   -.   .   ...   -       ....   .   --   ..   -.   --.   .--   .-   -.--   ;--   .   --.   ..-..   .-.   -   .   -.   ..       .-   -.   -.   -.--   ..   --..--       --   ..   -.   -       --   .   --.   -...   ---   -.-.   ...   .--.-   -   .-   -.   ..   .-.-.-
    ..-.   .-.   .-   -.   -.-.   ---   ..   ...       --   .-   ..-   .-.   ..   .-   -.-.   ;.-       ..-.   ..-..   .-..   .   .-..   .   --       .-       -...   ---.   .-..   -.-.   ...   .   ...   ...   ..-..   --.       -.-   .   --..   -..   .   -   .   .-.-.-
    ..-.   .-.   .-   -.   -.-       ....   .   .-.   -...   .   .-.   -   ;....   .-       -.   .   --       ....   .-   .---   .-..   ..-   -.   -.-   --..--       .-   -.-   -.-   ---   .-.       .   .-..   -   ---.   .-.   ....   .   -   ..--   -.   -.-   .-.-.-
    .-.   .-   .-   -.   .-       .-.   .-   .-   ...   ;-.   .   --       .-       -.-.   ..-..   .-..       .-       ..-.   ---   -.   -   ---   ...   --..--       ....   .-   -.   .   --       .-   --..       ..-   -   .-.-.-
    --.   ..-   ..   .-..   .-..   .-   ..-   --   .       --   ..-   ...   ...   ---   ;-   ..-   -..   -.   ..       -.-   .   .-..   .-..       --   .   --.   -...   ---   -.-.   ...   .--.-   -   .-   -.   ..       ..-..   ...       ..-.   .   .-..   .   .---   -   .   -.   ..   .-.-.-
    ..-.   .-.   ..   .   -..   .-.   ..   -.-.   ....       -.   ..   .   -   --..   ...   -.-.   ....   .   ;--..   .   -.   .       -.   ..-..   .-..   -.-   ..--   .-..       .-   --..       ..-..   .-..   .   -       -   ..-..   ...-   .   -..   ..-..   ...       ...-   ---   .-..   -.   .-   .-.-.-
    .--.   ---   .--.   .--.   .   .-.       .--.   ..-..   -   .   .-.   ;---.   -.   -   ..-   -..   .-   -   .-..   .-   -.   ..-   .-..       .   .-..   -.-   ---.   ...-   .   -   .   -   -       -...   ..-   -.       -.   ..   -.   -.-.   ...   .-.-.-
    ...   -   .   .--.   ....   .   -.       -.-   ..   -.   --.   ;.-       ...   --..   .   .-.   .   -   .   -       -.   .   --       ..   ...   --   .   .-.       .-   -.-   .-   -..   .--.-   .-..   -.--   -   .-.-.-
    ...-   ---   .-..   -   .-   ..   .-.   .   ;--   ..   -.   -..   .   -.       --   ..-   ..-.   .-   .---       .---   ---   --..--       -.-   ..   ...-   ..-..   ...-   .       .-   --..       ..-   -.   .-   .-..   --   .-   ...   -   .-.-.-
    .-   -.   -   ---   -.       .--.   .-   ...-   .-..   ---   ...-   ..   -.-.   ...       -.-.   ...   .   ....   ---   ...-   ;.-       -   .   .-..   ..       ....   .-   ...       -.   .   --       -   .-   -.   ..-   .-..       ...   --..   ..   ...-   .   ...   .   -.   .-.-.-
    .-   .-.   ..   ...   --..   -   ---   -   .   .-..   ..-..   ...   --..   ;--   ..   -.   -..   .   -.       .   --   -...   .   .-.   -...   .   -.       ...-   .-   -.       ...-   .-   .-..   .-   --   ..       .---   ---   .-.-.-
    -.-.   ...   ..   ---...       --   ..   .-   --   ..       ....   .   .-..   -.--   ...   --..   ..   -.   .   .-..   ---   -.-       -.-.   .-.-.-       ..-.   ..   .-..   --   ;.-       .-..   .   --.   .---   ---   -...   -...       ...-   ..-..   -..   .   .-..   .   --   ---...       .-       -...   .   -.-.   ...   ..--   .-..   .   -   .-.-.-
    .--.   ---   .-..   .-   .-.       .   -..-   .--.   .-.   .   ...   --..   ...   --..       -.-.   .-.-.-       ..-.   ..   .-..   --   ;.-       -.-   .-   .-.   .--.-   -.-.   ...   ---   -.   -.--   ..       -.-.   ...   ---   -..   .-       .-       ...   --..   ..   ...-   .   -..   -...   .   -.       .-..   .-   -.-   ..   -.-   .-.-.-
    .---   ---   ....   -.       .-.   ---   -.   .-   .-..   -..       .-.   .   ..-   .   .-..       -   ---   .-..   -.-   ..   .   -.   ;.-       ....   .-   .---   -.   .-   .-..       --   ..-..   --.   ..   ...       .-   --..       .   --   -...   .   .-.   .   -.-       ---.   .-.   ---.   -.-       .-.   .   --   ..-..   -.   -.--   .   .-.-.-"*/
]

const daraboltABC = [];
for (let i = 0; i < morzeABC.length; i++) {
    let objektum = {};
    let daraboltAdatSor = morzeABC[i].split("	");
    objektum.betu = daraboltAdatSor[0];
    objektum.kod = daraboltAdatSor[1];
    daraboltABC.push(objektum);
}

for (let j=0; j<daraboltABC.length;j++){
	document.write(daraboltABC[j].betu+" betű kódja: "+daraboltABC[j].kod+"<br>");
}

const daraboltSzavak = [];
for (let k=0; k<morzeKod.length;k++){
	daraboltSzavak.push(morzeKod[k].split("       "));
}

const daraboltBetuk=[];
for (let l=0;l<daraboltSzavak.length;l++){
	for(let m=0;m<daraboltSzavak[l].length;m++){
        daraboltBetuk[l]=daraboltSzavak[l][m].split(" ");
        
        for(let n=0;n<daraboltBetuk[n].length;n++){
   	     	document.write(daraboltBetuk[n]);
   		 }
    }
}



/*const daraboltBetuk = [];
for (let k = 0; k < daraboltSzavak[k].length; k++) {
    document.write(daraboltSzavak[k].length);
}


for (let l=0;l<daraboltBetuk.length;l++){
	document.write(daraboltBetuk[l][0]+"<br>");
}


const daraboltABC = [];
for (let i = 0; i < morzeABC.length; i++) {
    let objektum = {};
    let daraboltAdatSor = morzeABC[i].split("	");
    objektum.betu = daraboltAdatSor[0];
    objektum.kod = daraboltAdatSor[1];
    daraboltABC.push(objektum);
}

for (let j=0; j<daraboltABC.length;j++){
	document.write(daraboltABC[j].betu+" betű kódja: "+daraboltABC[j].kod+"<br>");
}

const daraboltSzavak = [];
daraboltSzavak = morzeKod.split("       ");*/