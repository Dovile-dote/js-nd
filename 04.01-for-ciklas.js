console.log('-----1-----');

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}

console.log('-----2-----');

let skaicius = 0;
for (let i = 0; i < 5; i++) {
    console.log(skaicius);
    skaicius++;
}

console.log('-----3-----');

skaicius = 0;
for (let i = 0; i < 5; i++) {
    console.log(skaicius);
    skaicius += 10;
}

console.log('-----4-----');

skaicius = 49;
for (let i = 0; i < 5; i++) {
    console.log(skaicius);
    skaicius += 1;
}

console.log('-----5-----');

skaicius = 0;
for(let i = 0; i < 5; i++) {
    console.log(skaicius);
    skaicius = Math.floor(Math.random() * 11);
}

console.log('-----6-----');

skaicius = 0;
for (i = 0; i < 20; i++) {
    skaicius++;
    if (skaicius%3 !== 0) {
        console.log(skaicius);
    }
}

console.log('-----7-----');

let ivestasSkaicius = 5;
let daugiklis = 0;
for (let i = 0; i < 10; i++) {
    daugiklis++;
    let rezultatas = ivestasSkaicius * daugiklis;
    console.log(rezultatas);
}

console.log('-----8-----');

let colis = 0;
let centimetrai = 0;
let n = 10;

for (let i = 0; i < n; i++) {
    ++colis; 
    centimetrai = colis * 2.54; 
    console.log(`${colis} colis\\iai\\iu turi ${centimetrai} centimetra\\u\\us`);
}

console.log('-----9-----');

let indelis = 100;
let palukanos = indelis * 2 / 100;
n = 10; 
for (let i = 1; i < n + 1; i++) {
    indelis += palukanos;
    palukanos = indelis * 2/ 100;
    console.log(`${i}-ais metais palukanos bus ${palukanos.toFixed(2)}, indelis- ${indelis.toFixed(2)}`);
}

console.log("-----10-----");

let metai = 0;
let era = 2022;

for (let i = 0; i < 8; i++) {
    // cia i < 8 turetu buti i <= era !!!
      if((metai % 4 === 0 || metai % 400 === 0) && metai < era) {
        console.log(`Keliamieji metai ${metai}`)
        } else {
        // console.log('metai iprasti');
    } 
    metai++;
}