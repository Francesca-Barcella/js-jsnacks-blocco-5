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

//stampo tutti i pesi

let sum = 0;

zucchine.forEach((element) => {
    console.log(element.peso + ' gr');
    //fare la somma di tutti i pesi
    sum += element.peso;
    console.log(sum + 'GR');
});





