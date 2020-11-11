// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

console.log(arrayObj);

// creo una copia dell'array
var arrayCopia = [];

for (var i = 0; i < arrayObj.length; i++) {
  arrayCopia.push(arrayObj[i]);
}

// pusho la nuova proprietà sul secondo array
for (var i = 0; i < arrayCopia.length; i++) {
  var position = randomLetter(1);
  arrayCopia[i].position = position;
}


console.log(arrayCopia);


// funzione per  lettera random da inserire in position
function randomLetter(num) {
   var risultato = '';
   var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   for ( var i = 0; i < num; i++ ) {
      risultato = letters.charAt(Math.floor(Math.random() * letters.length));
   }
   return risultato;
}
