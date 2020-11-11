// //Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


var primoNum = prompt("inserisci un numero tra 0 e 6");
var secondoNum = prompt("inserisci un altro numero tra 0 e 6");

var nuovoArray = myArray.slice(primoNum, secondoNum);
console.log(nuovoArray);
