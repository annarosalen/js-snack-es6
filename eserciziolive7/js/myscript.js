// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var arraybici = [
  {
    'nome': "gialla",
    'peso': 20
  },
  {
    'nome': "verde",
    'peso': 30
  },
  {
    'nome': "rossa",
    'peso': 15
  },
  {
    'nome': "blue",
    'peso': 11
  },
  {
    'nome': "rosa",
    'peso': 50
  }
];

// modifico da var a let nomi di variabili che penso di riutilizzare in futuro
let piuLeggera = arraybici[0];

for (let i = 0; i < arraybici.length; i++) {
  if(piuLeggera.peso > arraybici[i].peso){
    piuLeggera = arraybici[i];
  }
}

console.log(piuLeggera);

// oppure metti sort
