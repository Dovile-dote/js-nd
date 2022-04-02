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

// nesuprantu salygos

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
    console.log(rezultatas)
}

console.log('-----8-----');

let colis = 0;
let centimetrai = 0;
let n = 10;

for (let i = 0; i < n; i++) {
    ++colis; 
    centimetrai = colis * 2.54; 
    console.log(`${colis} colis\\iai turi ${centimetrai} centimetra\\u`);
}

console.log('-----9-----');