//! CONSEGNA

/*Gioco dei dadi (separatemente)
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//? VERBALIZZAZIONE

//* 1 - Creo due dadi con Math.random (userDice iaDice)
//* 2 - Creo una condizione per il quale se useDice è > di iaDice vince user
//* 3 - Creo una condizione per il quale se useDice è < di iaDice vince iaDice
//* 4 - Creo una condizione per il quale se useDice è === di iaDice è patta




const iaDice = Math.floor (Math.random ()*6 + 1);
const userDice = Math.floor(Math.random() * 6 + 1);
console.log(userDice, iaDice);

let message;

if (userDice > iaDice) {
    alert (`User: ${userDice} IA:  ${iaDice} Hai vinto!`);
   
} else if (userDice < iaDice) {
    alert(`User: ${userDice}  IA: ${iaDice}  "Hai perso!"`);
   
} else if (userDice === iaDice ){
    alert(`User: ${userDice}  IA: ${iaDice}  "Pareggio!"`);
}

