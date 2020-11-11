// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10


var palla = {
  "nome" : "palla",
  "peso" : 10
}

console.log(palla);

// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var pesoUtente = prompt("inserisci peso palla");

palla.peso = pesoUtente;


console.log(palla);
