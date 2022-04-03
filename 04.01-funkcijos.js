console.log('-----1-----');

function suma(a, b){
    return `${a} + ${b} = ${a + b}`;
}

let patikrinimas = suma(52, 67);
console.log(patikrinimas);

console.log('-----2-----');

function palyginimas(a, b){
    if (a > b) {
        return `pirmas skaicius didesnis`;
    } else if (a < b){
        return `antras skaicius didesnis`
    } else {
        return `skaiciai yra lygus`
    }
}

patikrinimas = palyginimas(52, 67);
console.log(patikrinimas);

patikrinimas = palyginimas(67, 12);
console.log(patikrinimas);

patikrinimas = palyginimas(-10, -10);
console.log(patikrinimas);

console.log('-----3-----');

function keliamiejiMetai(metai) {
    if(metai % 4 === 0 && metai > 0) {
        return `${metai} yra keliamieji metai.`;
    }
    else {
        return `${metai} nera keliamieji metai.`;
    }
}
m = 15;
patikrinimas = keliamiejiMetai(m);
console.log(patikrinimas);

console.log('-----4-----');

function kvadratas(x) {
    return `${x} pakelus kvadratu gausime: ${x ** 2}`;
}

patikrinimas = kvadratas(9);
console.log(patikrinimas);

console.log('-----5-----');


function skaiciuSuma(sk) {
    if(sk > 1) {
        let ats = 0;
        for(let i = 1; i <= sk; i++) {
            ats = ats + i;
        }
            return `nuo 0 iki ${sk} skaiciu suma lygi ${ats} `
    } else {
        return `pasirinkite didesni skaiciu!`
    }
}

let ska = 3;
patikrinimas = skaiciuSuma(ska);
console.log(patikrinimas);

ska = -6;
patikrinimas = skaiciuSuma(ska);
console.log(patikrinimas);


console.log('-----6-----');

skaicius = 20;
kiekSveiku = -1;
for(let i = 0; i < skaicius; i++) {
    if(skaicius % i === 0){
        kiekSveiku++;
    }
    
}console.log(kiekSveiku);

console.log('-----7-----');

function textLength(text) {
    return `"${text}" - tekstas turi ${text.length} simboliu.`
}

let abc = 'kazkur kazkas kazkam';
patikrinimas = textLength(abc);
console.log(patikrinimas);

// function onlyText(tekstas) {
//     if (String.isString(tekstas) === true) {
//  return `${tekstas} - tekstas turi ${tekstas.length} simboliu.`
//     } else {
//  return `tai ne tekstas!`
//     }
// }
// let abc = 'kazkur kazkas kazkam';
// console.log(typeof(abc));
// patikrinimas = onlyText(abc);
// console.log(patikrinimas);

// abc = 7;
// console.log(typeof(abc));
// patikrinimas = onlyText(abc);
// console.log(patikrinimas);


console.log('-----8-----');

function telefonoNumeris(skaiciai) {
    if (Array.isArray(skaiciai) === true) {
        if (skaiciai.length === 10) {
            return `(${skaiciai[0]} ${skaiciai[1]} ${skaiciai[2]}) ${skaiciai[3]} ${skaiciai[4]} ${skaiciai[5]} - ${skaiciai[6]} ${skaiciai[7]} ${skaiciai[8]} ${skaiciai[9]}`;
        } else if (skaiciai.length < 10) {
            return `truksta skaiciu`;
        } else {
            return `skaiciu per daug`;
        }
    } else {
        return `netinkami duomenys`;
    }
}

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
patikrinimas = telefonoNumeris(x);
console.log(patikrinimas);

x = [1, 2, 3, 4, 5];
patikrinimas = telefonoNumeris(x);
console.log(patikrinimas);

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
patikrinimas = telefonoNumeris(x);
console.log(patikrinimas);

x = 'kjvlkjag';
patikrinimas = telefonoNumeris(x);
console.log(patikrinimas);

console.log('-----9-----');

function tekstuPalyginimas(text1, text2) {
    if (text1.length > text2.length) {
        return `"${text1}" turi daugiau simboliu nei "${text2}".`;
    } else if (text1.length === text2.length) {
        return `abu tekstai yra vienodo ilgio`;
    } else {
        return `"${text1}" yra trumpesnis uz "${text2}"`;
    }       
}

let a = 'labai labai ilgas tekstas apie nieka';
let b = 'trumpas tekstas';
patikrinimas = tekstuPalyginimas(a, b);
console.log(patikrinimas);

a = 'as';
b = 'tu';
patikrinimas = tekstuPalyginimas(a, b);
console.log(patikrinimas);

a = 'trumpai';
b = 'ilgai ir apie nieka';
patikrinimas = tekstuPalyginimas(a, b);
console.log(patikrinimas);

console.log('-----10-----');

function suskaiciuokA(tekstas) {
    let atskirosRaides = tekstas.split("");
    let kiekRaidziu = 0;
    for(let i = 0; i < tekstas.length; i++) {
        if (atskirosRaides[i] === 'a') {
           kiekRaidziu ++;
         }
    } 
    return `Siame tekste yra ${kiekRaidziu} "a" raidziu.`
}
patikrinimas = suskaiciuokA(b);
console.log(patikrinimas);
