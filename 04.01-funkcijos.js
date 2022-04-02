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
console.log('-----4-----');
console.log('-----5-----');
console.log('-----6-----');
console.log('-----7-----');
console.log('-----8-----');

function telefonoNumeris(skaiciai) {
    if (Array.isArray(skaiciai)===true) {
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
