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

// creo una copia dell'array con map
arrayCopia=[];

var arrayCopia = arrayObj.map(obj =>{
   var copiaOggetti = {};
   copiaOggetti["name"] = obj.name;
   copiaOggetti["type"] = obj.type;
   copiaOggetti["color"] = obj.color;
   return copiaOggetti;
});

// ALTERNATIVA:
// var arrayCopia = arrayObj.map((element) => ({...element}) );

// funzione per  lettera random da inserire in position
// sostituisco con arrow function e la sposto sopra
let randomLetter = (num) => {
   var risultato = '';
   var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   for ( var i = 0; i < num; i++ ) {
      risultato = letters.charAt(Math.floor(Math.random() * letters.length));
   }
   return risultato;
}

// pusho la nuova proprietà sul secondo array
for (var i = 0; i < arrayCopia.length; i++) {
  var position = randomLetter(1);
  arrayCopia[i].position = position;
}

// stampo in html per verificare che non esca la proprietà di position nel primo array
document.getElementById('primoArray').innerHTML = arrayObj[0].position;

console.log(arrayCopia);
document.getElementById('secondoArray').innerHTML = arrayCopia[0].position;
