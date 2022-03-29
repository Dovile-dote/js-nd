// Kintamuju inicijavimas

// 1
const pirmasSkaicius = 32;
console.log(pirmasSkaicius);

const antrasSkaicius = 74;
console.log(antrasSkaicius);

const treciasSkaicius = 6;
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

const pirmasTekstuMasyvas = ['suo', ' karve', ' kate', ' vista', ' kiaule'];
console.log(pirmasTekstuMasyvas);

const antrasTekstuMasyvas = ['kiausinis', ' duona', ' sviestas', ' suris', ' desra'];
console.log(antrasTekstuMasyvas);

const treciasTekstuMasyvas = ['akmuo', ' vanduo', ' vejas', ' ugnis', ' medis'];
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
console.log('Trecio skaiciu masyvo matematiniu veiksmu rexultatas: ', trecioSkaiciuMasyvoSuma);

const tekstiniaiMasyvai = pirmasTekstuMasyvas + ', ' + antrasTekstuMasyvas + ', ' + treciasTekstuMasyvas;
console.log(tekstiniaiMasyvai);