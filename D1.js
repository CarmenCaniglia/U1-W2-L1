/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "In JavaScript ci sono diversi valori che possono essere assegnati a delle 'VARIABILI'. La variabile può essere immaginata come una 'scatola' che può avere un contenuto, ovvero i nostri 'valori'. I valori da assegnare possono essere di tipo STRINGA (sequenza di caratteri scritta tra apici singoli o doppi), NUMERO o BOOLEANI. "
);
console.log(
  "I valori booleani indicano una condizione della variabile che può essere vera o falsa e, assieme ai valori numerici, vanno scritti senza apici"
);
console.log(
  "E' importante non assegnare un valore diverso ad una variabile già dichiarata. Ovvero se ho una variabile di tipo 'STRINGA', non posso farla diventare di tipo 'NUMERICO'"
);
console.log(
  "Altri valori delle variabili possono anche essere NULL o UNDEFINED. Il primo rende nullo il valore della scatola, ovvero la 'svuota'; il secondo invece indica che quel valore non è al momento definito, quindi potrebbe essere semplicemente una variabile già dichiarata, ma senza ancora un contenuto."
);
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Carmen";
console.log(name);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12 + 20);
// oppure
let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number12 = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Caniglia";
console.log(name);

const lastname = "Caniglia";
// se ora scrivessi --> lastname = 'Carmen', avrei un errore nella console perchè la KEYWORD 'CONST' ha valore univoco e non si può modificare
console.log(lastname);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - number12);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
// EXTRA
console.log(name1.toLowerCase === name2.toLowerCase);
