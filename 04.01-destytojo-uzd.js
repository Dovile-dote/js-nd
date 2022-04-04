// Funkcijos

console.log('-----1-----');

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log('-----2-----');

function daugyba(a, b) {
    let sandauga = a * b;
    return `${a} * ${b} = ${sandauga}`;
}
console.log(daugyba(1, 2));
console.log(daugyba(3, 2));
console.log(daugyba(1, 3));

console.log('-----------');

function dauginimas(a, b) {
    // jei a nera skaicius -> ERROR
    if(typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if(isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    // jei b nera skaicius -> ERROR
    if(typeof b !==  'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if('' + b === 'NaN') {
        return 'ERROR: antras parametras turi buti tikras skaicius';
    }

    return a * b;
}

console.log(dauginimas(7, 5));
console.log(dauginimas(-7, 5));
console.log(dauginimas(-7, -5));
console.log(dauginimas(7, -5));
console.log(dauginimas(7.7, -5));
console.log(dauginimas(7.7, 'labas'));
console.log(dauginimas('labas', 5));
console.log(dauginimas(7.7, ''));
console.log(dauginimas('', 5));

// console.log('-----3-----');

// function skaitmenuKiekisSkaiciuje(n) {
//     if (isNaN(n) || n === true || n === false){
//         return `Pateikta netinkamo tipo reiksme`;
//     } else {
//         let string = n.toString()
//         const skaitmenuKiekis = string.length;
//         return `${n} skaiciuje yra ${skaitmenuKiekis} skaitmenu.`;
//     }
// }
// console.log(skaitmenuKiekisSkaiciuje(5));
// console.log(skaitmenuKiekisSkaiciuje(781));
// console.log(skaitmenuKiekisSkaiciuje(37060123456));
// console.log(skaitmenuKiekisSkaiciuje(true));
// console.log(skaitmenuKiekisSkaiciuje("asd"));
// console.log(skaitmenuKiekisSkaiciuje(NaN));


// console.log('-----4-----');

// function didziausiaisSkaiciusSarase(sarasas) {
//     if (Array.isArray(sarasas) === false) {
//         return `Pateikta netinkamo tipo reiksme`;
//     } else if (sarasas.length === 0) {
//         return `Pateiktas sarasas negali buti tuscias.`;
//     } else {
//         let didziausias = sarasas[0];
//         for (let i = 0; i < sarasas.length; i++) {
//             if (didziausias < sarasas[i]) {
//                 didziausias = sarasas[i];
//             }
//         }
//         return `Didziausias skaicius: ${didziausias}`
//     }
// }

// let x = [1];
// let atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);

// x = [1, 2, 3];
// atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);

// x = [-5, 78, 14, 0, 18];
// atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);

// x = [69, 69, 69, 69, 66];
// atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);

// x = [-1, -2, -3, -4, -5, -6, -7, -8];
// atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);

// x = "pomidoras";
// atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);

// x = [];
// atsakymas = didziausiaisSkaiciusSarase(x);
// console.log(atsakymas);
