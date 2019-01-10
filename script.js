
var p1 = {nom: "J1", src: "./img/case_croix.png", symb: " x "};
var p2 = {nom: "J2", src: "./img/case_rond.png", symb: " o "};

var players = [p1, p2];
var current_player = p1;

var grille = [
  " - ", " - ", " - ",
  " - ", " - ", " - ",
  " - ", " - ", " - "
];


function aff(){
  str = grille[0] + grille[1] + grille[2] + "\n" +
        grille[3] + grille[4] + grille[5] + "\n" +
        grille[6] + grille[7] + grille[8];
  return str;
}


window.onload = function(){
   imgs = document.getElementsByTagName('img');
   for(var i = 0; i<9; i++){
      imgs[i].onclick = function(){
         if(this.src.slice(-8) == "case.png"){
            this.src = current_player.src;
            grille[parseInt(this.id, 10)] = current_player.symb;
            game();
         }
      }
   }
}

function game(){
   if(verif()){
      win();
      return;
   }
   else if(!grille.includes(" - ")){
      nulle();
      return;
   }

   if(current_player == p1){
      current_player = p2;
   }
   else{
      current_player = p1;
   }
         
}

function nulle(){
   console.log('Match nulle');
}

function verif(){
   return false;
}



