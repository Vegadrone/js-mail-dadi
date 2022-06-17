//! CONSEGNA

/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

// ? VERBALIZZAZIONE

//* 1 - Creiamo un array "\const nomeArray = ["nome elemento", "nome elemento", "nome elemento"];/" (<=== ATTENZIONE, 
//*      puoi usare elementi anche senza apici in base a cosa sono) in cui inserire gli indirizzi email. Done
//* 2 - Creiamo una const da abbinare al prompt in cui l'utente inserirà la mail da cercare. Done
//* 3 - Creiamo un ciclo for e attraversiamo l'array per la sua lungezza.
//* 4 - Creiamo una condizione per la quale SE la mail è presente nella lista ci da un messaggio positivo ALTRIMENTI uno
//*     negativo.

// TODO Come faccio a targettare un solo emailAddress senza che mi faccia tutto quanto il ciclo?


const emailAdresses = ["arnaldopiepolo@pinkopallo.it", "francesco.gozzari@pinkopallo.com", "gianpippo_ortoni@pinkopallo.it", 
"gennerofriariello@pinkopallo.it", "mariafazzoni@pinkopallo.it", "ornella-rotopempia@pinkopallo.it", "blackmambo_27@pinkopallo.it", 
"darkdemon9711@pinkopallo.it", "giannigommo@pinkopallo.it", "stefaniarambaldi@pinkopallo.it", "mordacithuan@pinkopallo.it", 
"ventrescagiuseppe@pinkopallo.it", "carlapiepoli@pinkopallo.it", "vanessanaddapinkopallo.it", "ottorisponi@pinkopallo.it"];
//  console.log (emailAdresses);
const mailUserChoice = prompt ('Inserisci qui una mail @pinkopallo e verifica se hai l\'accesso');

for (let i = 0; i < emailAdresses.length ; i++ ) {
    console.log (i + emailAdresses [i]);

    if(emailAdresses [i] === mailUserChoice) {
        alert ("Email corretta. Hai accesso!");
    } else {
        alert ("La email inserita non è in lista, prova un'altra email");
    }

}