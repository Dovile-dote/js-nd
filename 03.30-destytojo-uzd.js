// Ciklo for panaudojimas 

// 1 a
console.log('---1a---');
let suma = 0;

for (let i = 0; i <= 0; i++) {
    suma += i;
    console.log(suma);
}

function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumaIntervale(0,0), '-->', 0);

// 1 b
console.log('---1b---');

suma = 0;
for (let i = 0; i <= 4; i++) {
   suma += i;
}
console.log(suma);

// 1 c
console.log('---1c---');

suma = 0;
for (let i = 0; i <= 100; i++) {
    suma += i;
}
console.log(suma);

// 1 d
console.log('---1d---');

suma = 0;
for (let i = 574; i <= 815; i++) {
    suma += i;
}
console.log(suma);

// 1 e
console.log('---1e---');

suma = 0;
for (let i = -50; i <= 50; i++) {
    suma += i;
}
console.log(suma);

// 1 f
console.log('---1f---');

suma = 0;
for (let i = -70; i <= 30; i++) {
    suma += i;
}
console.log(suma);

// 2
console.log('---2---');

const text = 'abcdef';
const splitText = text.split('');
const reverseText = splitText.reverse();
const result = reverseText.join('');
console.log(result);

// 3a
console.log('---3a---');

let atsakymas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        atsakymas++;
    }
} 
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra ${atsakymas} vienetai.`);

atsakymas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 5 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra ${atsakymas} vienetai.`);

atsakymas = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 7 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra ${atsakymas} vienetai.`);

// 3 b
console.log('---3b---');

atsakymas = 0;
for (let i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra ${atsakymas} vienetai.`);

atsakymas = 0;
for (let i = 8; i <= 31; i++) {
    if (i % 5 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra ${atsakymas} vienetai.`);

atsakymas = 0;
for (let i = 8; i <= 31; i++) {
    if (i % 7 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra ${atsakymas} vienetai.`);

// 3 c
console.log('---3c---');

atsakymas = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ${atsakymas} vienetai.`);

atsakymas = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 5 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ${atsakymas} vienetai.`);

atsakymas = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 7 === 0) {
        atsakymas++;
    }
}  
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ${atsakymas} vienetai.`);