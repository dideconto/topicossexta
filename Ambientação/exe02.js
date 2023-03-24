console.clear();
const real = Math.floor(Math.random() * 100);

const dolar = real / 5.17;
const euro = real / 6.14;
const peso = real / 0.05;

//Concatenação de strings
console.log("Valor em real: " + real);

//Interpolação de strings
console.log(`Valor em dólar: ${dolar}`);
console.log(`Valor em euro: ${euro}`);
console.log(`Valor em peso: ${peso}`);