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
        variety: 'nera',
        peso: 100,
        lunghezza: 10,
    },

    {
        variety: 'romanesco',
        peso: 80,
        lunghezza: 13,
    },

    {
        variety: 'napoletana',
        peso: 115,
        lunghezza: 8,
    },

    {
        variety: 'fiorentino',
        peso: 75,
        lunghezza: 19,
    },

    {
        variety: 'tonda',
        peso: 200,
        lunghezza: 17,
    },

    {
        variety: 'trombetta',
        peso: 135,
        lunghezza: 20,
    },

    {
        variety: 'giallo',
        peso: 145,
        lunghezza: 23,
    },

    {
        variety: 'siciliano',
        peso: 167,
        lunghezza: 9,
    },

    {
        variety: 'striata',
        peso: 120,
        lunghezza: 8,
    },

    {
        variety: 'Crookneck',
        peso: 280,
        lunghezza: 17,
    },

]

console.log(zucchine);


//Dividi in due array separati le zucchine che misurano meno o più di 15cm.



const isLonger = zucchine.peso.filter ((numb)=>{
    console.log(isLonger);
    if (numb > 15){
        return true;
    }
    return false
});



console.log(isLonger);


