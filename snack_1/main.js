//alert ('snack_1 funge!')

/* 
SSNACK_1

Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */

//creare array con lista delle zucchine
const zucchine = [
    {
        varieta: 'nera',
        peso: 117,
        lunghezza: '10',
    },

    {
        varieta: 'romanesco',
        peso: 83,
        lunghezza: '13',
    },

    {
        varieta: 'napoletana',
        peso: 115,
        lunghezza: '8',
    },

    {
        varieta: 'fiorentino',
        peso: 75,
        lunghezza: '19',
    },

    {
        varieta: 'tonda',
        peso: 200,
        lunghezza: '17',
    },

    {
        varieta: 'trombetta',
        peso: 135,
        lunghezza: '20',
    },

    {
        varieta: 'giallo',
        peso: 145,
        lunghezza: '23',
    },

    {
        varieta: 'siciliano',
        peso: 167,
        lunghezza: '19',
    },

    {
        varieta: 'striata',
        peso: 120,
        lunghezza: '15',
    },

    {
        varieta: 'Crookneck',
        peso: 280,
        lunghezza: '25',
    },

]

console.log(zucchine);

let somma = 0

zucchine.forEach((element) => {
    console.log(element.peso + ' grammi');
    somma += element.peso;
})
console.log('il peso totale è ' + somma + ' grammi');




