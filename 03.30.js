// Papildomi uzdaviniai

// 1

let n = 0;
if (n < 0) {
    console.log('Blogas');
} else if (n > 0) {
    console.log('Geras');
}

// 2

n = 2;
if (n === 1) {
    console.log('Galite eiti');
} else if (n === 2) {
    console.log('Palaukite');
} else {
    console.log('Eiti draudziama!');
}

// 3

let d = 3;
let k = 15;
n = 5;

if (k/n <= d) {
    console.log('Knygos telpa i dezes');
} else {
    console.log('Knygos netelpa i dezes');
}

// 4

let a = 100;
let b = 9;

if (a > b) {
    console.log(--a);
    console.log(++b);
} else {
    console.log(++a);
    console.log(--b);
}

// 5

let c = 50;
let p = 20;
k = Math.floor(c / p);
m = c % p;
console.log('Saulius gali nusipirkti ' + k + ' porcijas ledu ir jam liks ' + m + ' centu.');


// 6

n = 6;

if (n % 3 === 0) {
    console.log('Trikampi sudelioti galima.');
} else {
    console.log('Trikampio sudelioti negalima.');
}

// 7

n = 2;
if (n === 2) {
    d = 28;
} else if (n % 2 === 0) {
    d = 30;
} else {
    d = 31;
}
console.log('Sis menuo turi ' + d + ' dienu.');

// 8

k = 4;
if (k % 2 === 0) {
    console.log('Kambari tvarkys vyresnelis.')
} else {
    console.log('Kambari tvarkys jaunelis.')
}

// 9

m = 1900;

console.log(m)

if ((m - 1896) % 4 === 0) {
    n = 1 + ((m - 1896) / 4);
    console.log(`${m} metais vyko ${n}-os rungtynes.`)
} else {
    console.log(`Metai neolimpiniai.`)
}


// 10

v1 = 8;
m1 = 29;
m2 = 23;
v = 9;
m = 5;

if (v1 * 60 + m1 + m2 < v * 60 + m) {
    console.log('Petras i mokykla neveluos.');
} else {
    console.log('Petras i mokykla paveluos.');
}