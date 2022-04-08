console.log('-----1-----')

let masyvas = [];
let nr = 0;
for (let i = 0; i < 20; i++) {
    masyvas[i] = ++nr;
    }
console.log(masyvas);
console.log(masyvas.length);

console.log('-----2-----');
const masyvoIlgis = 40 + Math.floor(Math.random() * 21); 
masyvas = [];
nr = 0;
for (let i = 0; i < masyvoIlgis; i++) {
    masyvas[i] = ++nr;
    }
console.log(masyvas);
console.log(masyvas.length);

console.log('-----3-----');
const masyvasLength = 10 + Math.floor(Math.random() * 6);
masyvas = [];

for (let i = 0; i < masyvasLength; i++) {
    masyvas[i] = 5 + Math.floor(Math.random() * 43)
}
console.log(masyvas);
console.log(masyvas.length);
let didziausias = masyvas[0];
for (let i = 0; i < masyvas.length; i++) {
    
    if (masyvas[i] > didziausias) {
        didziausias = masyvas[i];
    }
   
} console.log(`Didziausias skaicius:`, didziausias);

console.log('-----4-----');

const raid = 'DEFGH';
const raidMasyvas = [];

for (let i = 0; i < 100; i++) {
    let raide = raid[Math.floor(Math.random() * 5)];
    raidMasyvas[i] = raide;
}

console.log(raidMasyvas);
console.log(raidMasyvas.length);

console.log('-----5-----');

const raides = 'MNOP';
console.log(raides[3]);
const raidziuMasyvas = [];
for (let i = 0; i < 100; i++) {
    let raide = raides[Math.floor(Math.random() * 4)];
    raidziuMasyvas[i] = raide;
}

console.log(raidziuMasyvas);
console.log(raidziuMasyvas.length);

let sumaM = 0;
let sumaN = 0;
let sumaO = 0;
let sumaP = 0;

for (let i = 0; i < raidziuMasyvas.length; i++) {
        if (raidziuMasyvas[i] === 'M') {
        sumaM = sumaM + 1;
    } else if (raidziuMasyvas[i] === 'N') {
        sumaN++;
    } else if (raidziuMasyvas[i] === 'O') {
        sumaO++;
    } else {
        sumaP++;
    }
}

if (sumaM > sumaN && sumaM > sumaO && sumaM > sumaP) {
    console.log('Raidziu masyve yra daugiausia M raidziu');
} else if (sumaN > sumaM && sumaN > sumaO && sumaN > sumaP) {
    console.log('Raidziu masyve yra daugiausia N raidziu');
} else if (sumaO > sumaM && sumaO > sumaN && sumaO > sumaP) {
    console.log('Raidziu masyve yra daugiausia O raidziu');
} else if (sumaP > sumaM && sumaP > sumaN && sumaP > sumaO) {
    console.log('Raidziu masyve yra daugiausia P raidziu');
} else if (sumaM === sumaN && sumaM > sumaO && sumaM > sumaP) {
    console.log('Raidziu masyve daugiausiai isspausdino M ir N raidziu');
} else if (sumaM === sumaO && sumaM > sumaN && sumaM > sumaP) {
    console.log('Raidziu masyve daugiausiai isspausdino M ir O raidziu');
} else if (sumaM === sumaP && sumaM > sumaN && sumaM > sumaO) {
    console.log('Raidziu masyve daugiausiai isspausdino M ir P raidziu');  
} else if (sumaN === sumaO && sumaN > sumaM && sumaN > sumaP) {
    console.log('Raidziu masyve daugiausiai isspausdino N ir O raidziu');
} else if (sumaN === sumaP && sumaN > sumaM && sumaN > sumaO) {
    console.log('Raidziu masyve daugiausiai isspausdino N ir P raidziu');
} else if (sumaO === sumaP && sumaO > sumaM && sumaO > sumaN) {
    console.log('Raidziu masyve daugiausiai isspausdino O ir P raidziu');
}
// ar reikia dar testi kas, jeigu tris reiksmes sutaps arba visu raidziu isspausdins po vienodai?


console.log('-----6-----')

let masyvas5 = [];

while (masyvas5.length < 20) {
    
    let skaicius =  10 + Math.floor(Math.random() * 41);
    if (!(masyvas5.includes(skaicius))){
    masyvas5.push(skaicius);
    }
}
console.log(masyvas5);
console.log(masyvas5.length);
