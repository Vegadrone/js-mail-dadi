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


const emailAdresses = ["arnaldopiepolo@pinkopallo.it", "francesco.gozzari@pinkopallo.com", "gianpippo_ortoni@pinkopallo.it", 
"gennerofriariello@pinkopallo.it", "mariafazzoni@pinkopallo.it", "ornella-rotopempia@pinkopallo.it", "blackmambo_27@pinkopallo.it", 
"darkdemon9711@pinkopallo.it", "giannigommo@pinkopallo.it", "stefaniarambaldi@pinkopallo.it", "mordacithuan@pinkopallo.it", 
"ventrescagiuseppe@pinkopallo.it", "carlapiepoli@pinkopallo.it", "vanessanaddapinkopallo.it", "ottorisponi@pinkopallo.it"];
//  console.log (emailAdresses);
const mailUserChoice = prompt ('Inserisci qui una mail @pinkopallo e verifica se hai l\'accesso')