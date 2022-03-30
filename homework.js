// Kintamuju inicijavimas

// 1
const pirmasSkaicius = 16;
console.log(pirmasSkaicius);

const antrasSkaicius = 74;
console.log(antrasSkaicius);

const treciasSkaicius = 9;
console.log(treciasSkaicius);

// 2
const pirmasTekstas = 'pirmas';
console.log(pirmasTekstas);

const antrasTekstas = 'antras';
console.log(antrasTekstas);

const treciasTekstas = 'trecias';
console.log(treciasTekstas);

// 3
const pirmasSkaiciuMasyvas = [2, 18, 7, 43, 61];
console.log(pirmasSkaiciuMasyvas);

const antrasSkaiciuMasyvas = [53, 8, 14, 25, 1];
console.log(antrasSkaiciuMasyvas);

const treciasSkaiciuMasyvas = [-25, 73, 4, -20, 37];
console.log(treciasSkaiciuMasyvas);

// 4

const pirmasTekstuMasyvas = ['suo', 'karve', 'kate', 'vista', 'kiaule'];
console.log(pirmasTekstuMasyvas);

const antrasTekstuMasyvas = ['kiausinis', 'duona', 'sviestas', 'suris', 'desra'];
console.log(antrasTekstuMasyvas);

const treciasTekstuMasyvas = ['akmuo', 'vanduo', 'vejas', 'ugnis', 'medis'];
console.log(treciasTekstuMasyvas);

// Veiksmai su Kintamaisiais

// 1
const kintamujuSuma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log('Kintamuju suma: ' + kintamujuSuma);

// 2

const  tekstiniuKintamujuSuma = pirmasTekstas + ' ' + antrasTekstas + ' ' + treciasTekstas;
console.log(tekstiniuKintamujuSuma);

// 3
const pirmoSkaiciuMasyvoSuma = pirmasSkaiciuMasyvas[0] - pirmasSkaiciuMasyvas[1] + pirmasSkaiciuMasyvas[2] - pirmasSkaiciuMasyvas[3] + pirmasSkaiciuMasyvas[4];
console.log('Pirmo skaiciu masyvo matematiniu veiksmu rezultatas: ', pirmoSkaiciuMasyvoSuma);

const antroSkaiciuMasyvoSuma = antrasSkaiciuMasyvas[0] - antrasSkaiciuMasyvas[1] + antrasSkaiciuMasyvas[2] - antrasSkaiciuMasyvas[3] + antrasSkaiciuMasyvas[4];
console.log('Antro skaiciu masyvo matematiniu veiksmu rezultatas: ', antroSkaiciuMasyvoSuma);

const trecioSkaiciuMasyvoSuma = treciasSkaiciuMasyvas[0] - treciasSkaiciuMasyvas[1] +
treciasSkaiciuMasyvas[2] - treciasSkaiciuMasyvas[3] + treciasSkaiciuMasyvas[4];
console.log('Trecio skaiciu masyvo matematiniu veiksmu rezultatas: ', trecioSkaiciuMasyvoSuma);

// 4

const tekstiniaiMasyvai = pirmasTekstuMasyvas + ', ' + antrasTekstuMasyvas + ', ' + treciasTekstuMasyvas;
console.log(tekstiniaiMasyvai);

// Kintamuju palyginimas
// 1 a

if (pirmasSkaicius > antrasSkaicius) {
    console.log('pirmas skaicius didesnis uz antra');
} else {
    console.log('antras skaicius didesnis uz pirma');
}

if (antrasSkaicius > treciasSkaicius) {
    console.log('antras skaicius didesnis uz trecia');
} else {
    console.log('trecias skaicius didesnis uz antra')
}

if (pirmasSkaicius > treciasSkaicius) {
    console.log('pirmas skaicius didesnis uz trecia');
} else {
    console.log('trecias skaicius didesnis uz pirma');
}

// 1 a
if (pirmasSkaicius > antrasSkaicius && pirmasSkaicius > treciasSkaicius) {
    console.log('pirmas skaicius didziausias');
} else if (antrasSkaicius > pirmasSkaicius && antrasSkaicius > treciasSkaicius) {
    console.log('antras skaicius didziausias')
} else if (treciasSkaicius > pirmasSkaicius && treciasSkaicius > antrasSkaicius) {
    console.log('trecias skaicius didziausias');
} else {
    console.log('pasitikrinkite ar visi skaiciai skirtingi')
}

// 1 b 
if (pirmasSkaicius < antrasSkaicius) {
    console.log('pirmas skaicius mazesnis uz antra');
} else {
    console.log('antras skaicius mazesnis uz pirma');
}

if (antrasSkaicius < treciasSkaicius) {
    console.log('antras skaicius mazesnis uz trecia');
} else {
    console.log('trecias skaicius mazesesnis uz antra')
}

if (pirmasSkaicius < treciasSkaicius) {
    console.log('pirmas skaicius mazesnis uz trecia');
} else {
    console.log('trecias skaicius mazesnis uz pirma');
}

// 1 c
if (pirmasSkaicius == antrasSkaicius) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (antrasSkaicius == treciasSkaicius) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmasSkaicius == treciasSkaicius) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// 1 d
if (pirmasSkaicius != antrasSkaicius) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (antrasSkaicius != treciasSkaicius) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmasSkaicius != treciasSkaicius) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// 1 e
if (pirmasSkaicius >= antrasSkaicius) {
    console.log('Pirmas skaicius didesnis arba lygus');
} else {
    console.log('Antras skaicius didesnis');
}

if (antrasSkaicius >= treciasSkaicius) {
    console.log('Antras skaicius didesnis arba lygus treciam');
} else {
    console.log('Trecias skaicius didesnis');
}

if (treciasSkaicius >= pirmasSkaicius) {
    console.log('Trecias skaicius didesnis arba lygus pirmam');
} else {
    console.log('Pirmas skaicius didesnis')
}

// 1 e
if (pirmasSkaicius >= antrasSkaicius && pirmasSkaicius >= treciasSkaicius) {
    console.log('pirmas skaicius didziausias arba lygus');
} else if (antrasSkaicius >= pirmasSkaicius && antrasSkaicius >= treciasSkaicius) {
    console.log('antras skaicius didziausias arba lygus');
} else if (treciasSkaicius >= pirmasSkaicius && treciasSkaicius >= antrasSkaicius) {
    console.log('trecias skaicius didziausias arba lygus');
} else {
    console.log('ar tikrai ivedete skaicius?');
}

// 1 f

if (pirmasSkaicius <= antrasSkaicius) {
    console.log('Pirmas skaicius mazesnis arba lygus');
} else {
    console.log('Antras skaicius mazesnis');
}

if (antrasSkaicius <= treciasSkaicius) {
    console.log('Antras skaicius mazesnis arba lygus treciam');
} else {
    console.log('Trecias skaicius mazesis');
}

if (treciasSkaicius <= pirmasSkaicius) {
    console.log('Trecias skaicius mazesnis arba lygus pirmam');
} else {
    console.log('Pirmas skaicius mazesnis')
}

// 2
const pirmoTekstoIlgis = pirmasTekstas.length;
const antroTekstoIlgis = antrasTekstas.length;
const trecioTekstoIlgid = treciasTekstas.length;

// 3 a

if (pirmoTekstoIlgis > antroTekstoIlgis) {
    console.log('pirmas zodis ilgesnis');
} else {
    console.log('zodziu ilgis vienodas arba antras ilgesnis');
}

// 3 b

if (pirmoTekstoIlgis < antroTekstoIlgis) {
    console.log('pirmas zodis trumpesnis');
} else {
    console.log('zodziu ilgis vienodas arba antras trumpesnis')
}

// 3 c

if (pirmoTekstoIlgis == antroTekstoIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// 3 d 

if (pirmoTekstoIlgis != antroTekstoIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

// 4

console.log(pirmasTekstuMasyvas[0].length, pirmasTekstuMasyvas[1].length, pirmasTekstuMasyvas[2].length, pirmasTekstuMasyvas[3].length, pirmasTekstuMasyvas[4].length);

// 5 a

if (pirmasTekstuMasyvas[0].length > pirmasTekstuMasyvas[1].length) {
    console.log('Pomidoras');
} else {
    console.log('bandykite kita karta');
};
 
// 5 a

const length = pirmasTekstuMasyvas.length;
let ilgiausias = pirmasTekstuMasyvas[0].length;
let ilgiausiasZodis = ''; 

for (var i = 0; i < length; i++) {
    if (ilgiausias < pirmasTekstuMasyvas[i].length)
    ilgiausias = pirmasTekstuMasyvas[i].length;
    ilgiausiasZodis = pirmasTekstuMasyvas[i];
}
console.log(ilgiausiasZodis);

// 5 b

if (antrasTekstuMasyvas[4].length < antrasTekstuMasyvas[0].length) {
    console.log('pomidoras');
} else {
    console.log('bandyk is naujo');
}

// 5 c

if (treciasTekstuMasyvas[0].length == treciasTekstuMasyvas[4].length) {
    console.log('ilgis vienodas');
} else {
    console.log('skirtingas ilgis');
}

// 5 d 

if (treciasTekstuMasyvas[0].length != treciasTekstuMasyvas[4].length) {
    console.log('skirtingas ilgis. pomidoras');
} else {
    console.log('ilgis vienodas. Bandyk dar karta.')
}

// 5 e

if (treciasTekstuMasyvas[0].length >= treciasTekstuMasyvas[4].length) {
    console.log('pomidoras');
} else {
    console.log('bandyk kita karta');
}

// 5 f

if (treciasTekstuMasyvas[0].length <= treciasTekstuMasyvas[4].length) {
    console.log('pomidoras');
} else {
    console.log('bandyk kita karta');
}
