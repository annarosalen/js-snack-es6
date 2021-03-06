// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var arraySquadre = [
  {
    'nome': "barcellona",
    'punti': 0,
    'falli': 0
  },
  {
    'nome': "udinese",
    'punti': 0,
    'falli': 0
  },
  {
    'nome': "roma",
    'punti': 0,
    'falli': 0
  },
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti


// for (let i = 0; i < arraySquadre.length; i++) {
//
//   var puntiRandom = Math.floor(Math.random()*5) + 1;
//   var falliRandom = Math.floor(Math.random()*3) + 1;
//   arraySquadre[i].punti = puntiRandom;
//   arraySquadre[i].falli = falliRandom;
//
//   console.log(arraySquadre[i]);
// }

// alternativa con for each

arraySquadre.forEach((item) => {

  item.punti = Math.floor(Math.random()*10) + 1;
  item.falli = Math.floor(Math.random()*50) + 1;

  console.log(item);
});
