// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10

// creo variabili let e le inserisco nell'oggetto senza il nome della chiave

let name = "palla";
let peso = "10";

var palla = {
  name,
  peso
}

console.log(palla);

// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var pesoUtente = prompt("inserisci peso palla");

palla.peso = pesoUtente;


console.log(palla);
