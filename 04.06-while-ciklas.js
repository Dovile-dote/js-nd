console.log('-----1-----');

let suma = 0;

while (suma < 100) {
let randomSkaicius = Math.floor(Math.random() * 11);
suma = suma + randomSkaicius;
// console.log(randomSkaicius)
// console.log(suma);
} 
console.log(suma);

console.log('-----2-----');

suma = Math.floor(Math.random() * 11);

while (!(suma % 7 === 0)) {
    suma += Math.floor(Math.random() * 11);
}
console.log(suma);

console.log('-----3-----');

let m = 17;
let s = 0;
let d = 0;
while(s < m) {
    d++;
    s += d;
}
console.log(`Tadas visa knyga perskaitys per ${d} dienas(-u).`);
let vid = m / d;
console.log(`Tadas vidutiniskai per diena perskaite ${vid.toFixed(2)} skyrius(-u).`);

console.log('-----5-----');

let skaicius = 0;
let kiekCiklu = 0;
while (!(skaicius === 5) && !(skaicius === 7)) {
    skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    kiekCiklu++;
}
console.log(`Viso prasisuko ${kiekCiklu} ciklai (-u).`);