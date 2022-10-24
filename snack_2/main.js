//alert ('snack_2 funge!')

/* 
SNACK_2

Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

//creare array con lista delle zucchine
const zucchine = [
    {
        varieta: 'nera',
        peso: 100,
        lunghezza: 10,
    },

    {
        varieta: 'romanesco',
        peso: 80,
        lunghezza: 13,
    },

    {
        varieta: 'napoletana',
        peso: 115,
        lunghezza: 8,
    },

    {
        varieta: 'fiorentino',
        peso: 75,
        lunghezza: 19,
    },

    {
        varieta: 'tonda',
        peso: 200,
        lunghezza: 15,
    },

    {
        varieta: 'trombetta',
        peso: 135,
        lunghezza: 20,
    },

    {
        varieta: 'giallo',
        peso: 145,
        lunghezza: 23,
    },

    {
        varieta: 'siciliano',
        peso: 167,
        lunghezza: 9,
    },

    {
        varieta: 'striata',
        peso: 120,
        lunghezza: 8,
    },

    {
        varieta: 'Crookneck',
        peso: 280,
        lunghezza: 14,
    },

]

console.log(zucchine);


//Dividi in due array separati le zucchine che misurano meno o più di 15cm.


// ciclo per individuare zucchine maggiore di 15cm
const isLunga = zucchine.filter((element) => {

    if (element.lunghezza > 15) {
        return true;
    }
    return false
});

console.log(isLunga);

// ciclo per individuare zucchine maggiore di 15cm
const isCorta = zucchine.filter((element) => {

    if (element.lunghezza < 15) {
        return true;
    }
    return false
});

console.log(isCorta);

// creare due nuovi cicli divisi in lunghe e corte
//lunghe
const zucchineLunghe = []

isLunga.forEach((element) => {
    zucchineLunghe.push(element)
});

console.log(zucchineLunghe);

//corte
const zucchineCorte = []

isCorta.forEach((element) => {
    zucchineCorte.push(element)
});

console.log(zucchineCorte);