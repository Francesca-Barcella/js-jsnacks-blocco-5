//alert ('snack_3 funge!')

/* 
SNACK_3

Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)
 */

// creo un array con 3 parole
const parole = ['ciao', 'arrivederci', 'addio'];
console.log(parole);


parole.forEach((element)=>{
    console.log(element);

    const parolaDivisa = element.split('');
    console.log(parolaDivisa);

    const lettereGirate = parolaDivisa.reverse('');
    console.log(lettereGirate);

    const parolaGirata = lettereGirate.join('');
    console.log(parolaGirata);
});



// recuperare come si scrive la parola al contrario

/* const userWord = 'ciao'

const splitWord = userWord.split('');
console.log(splitWord);

const reverseLetters = splitWord.reverse('');
console.log(reverseLetters);

const reverseUserWord = reverseLetters.join('');
console.log(reverseUserWord); */





