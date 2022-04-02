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

console.log('-----3-----');

function skaitmenuKiekisSkaiciuje(n) {
    if (isNaN(n) || n === true || n === false){
        return `Pateikta netinkamo tipo reiksme`;
    } else {
        let string = n.toString()
        const skaitmenuKiekis = string.length;
        return `${n} skaiciuje yra ${skaitmenuKiekis} skaitmenu.`;
    }
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('-----4-----');

function didziausiaiSkaiciusSarase(x) {}
