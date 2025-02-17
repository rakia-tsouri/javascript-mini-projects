
  setTimeout(function () {
      alert("Le jeu a démarré !");
      jouer();
  }, 100); // 100 ms pour laisser le temps au navigateur d'afficher la page



function jouer(){
var x=confirm("voulez vous jouer")
var i=0;
if( x==true){

 var luck=parseInt(Math.random()*10)
 console.log(luck)
  var c= prompt("choisi la difficulte");
  if (c==1) {
     alert("tu as chosii facile vous avez 10 tentatives");
     i=10;}
  else if (c==2) {alert("tu as chosii intermedaire vous avez 5 tentatives");
    i=5;}
  else if (c==3){alert("tu as chosii difficile vous avez 3 tentatives");
    i=3;}
    else{alert("choix invalide rejouer")}
    for(var k=0;k<i;k++){
        var h=prompt("donner chiffre")
        if(h==luck){
            alert("vous avez gagnez!!!")
            play();
            
             break
        }
    }
    if(k==i){ alert("game over!");
      play()

    }}
    else{play();}
  }


function play(){
var neww=document.createElement("button")
var getter=document.getElementById("buttonn")
if(!getter.firstElementChild){//si on pas creer le bouton rejouer sinon on va creer un a chaque fois qu on joue
console.log(getter)
neww.style.color="red"
neww.textContent="rejouer"
getter.appendChild(neww)
neww.onclick=jouer}//pourquoi quand j ai fait =jouer() sans cliquer sur le bouton jouer() s execute?
}


