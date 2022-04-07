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

const raides = 'MNOP';
console.log(raides[3]);
const raidziuMasyvas = [];
for (let i = 0; i < 100; i++) {
    let raide = raides[Math.floor(Math.random() * 4)];
    raidziuMasyvas[i] = raide;
}

// const raidziuArray = [ M, N, O, P ]
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

const sumuMasyvas = [sumaM, sumaN, sumaO, sumaP];
console.log(sumuMasyvas);

console.log('-----5-----')
let masyvas5 = [];

console.log(masyvas5);
for( let i = 0; i < 20; i++) {
    let skaicius =  10 + Math.floor(Math.random() * 41);
    if (!(masyvas5[i] === skaicius)) {
        masyvas5[i] = skaicius;
    }
}
console.log(masyvas5);