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
        variety: 'nera',
        peso: 100,
        lunghezza: '10',
    },

    {
        variety: 'romanesco',
        peso: 80,
        lunghezza: '13',
    },

    {
        variety: 'napoletana',
        peso: 115,
        lunghezza: '8',
    },

    {
        variety: 'fiorentino',
        peso: 75,
        lunghezza: '19',
    },

    {
        variety: 'tonda',
        peso: 200,
        lunghezza: '17',
    },

    {
        variety: 'trombetta',
        peso: 135,
        lunghezza: '20',
    },

    {
        variety: 'giallo',
        peso: 145,
        lunghezza: '23',
    },

    {
        variety: 'siciliano',
        peso: 167,
        lunghezza: '19',
    },

    {
        variety: 'striata',
        peso: 120,
        lunghezza: '15',
    },

    {
        variety: 'Crookneck',
        peso: 280,
        lunghezza: '25',
    },

]

console.log(zucchine);

//stampo tutti i pesi

const {peso} = zucchine;
console.log(peso);

function sum (...params){
    let sum = 0;
    params.forEach(numb => {
        sum += numb;
    })
    return sum
}

const peso_totale = sum (zucchine.peso);
console.log(peso_totale);


//NUOVA SOLUZIONE - FORSE FUNZIONANTE
let somma = 0

zucchine.forEach((element) => {
    console.log(element.peso + ' grammi');
    somma += element.peso;
})
console.log('il peso totale è ' + somma + ' grammi');




