var j1 ={nom: "J1", symb: "x"};
var j2 ={nom: "J2", symb: "y"};
var joueurs = [j1, j2];
var grille = [
  [" - ", " - ", " - "],
  [" - ", " - ", " - "],
  [" - ", " - ", " - "]
]


function aff(){
  str = grille[0][0] + grille[0][1] + grille[0][2] + "\n" +
        grille[1][0] + grille[1][1] + grille[1][2] + "\n" +
        grille[2][0] + grille[2][1] + grille[2][2];
  return str;
}

function initListener(){
  console.log(document.getElementsByTagName('img').id);
}



initListener();

// while(true){
//   for(j in joueurs){
//   }
// }
