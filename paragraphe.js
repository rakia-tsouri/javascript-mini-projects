var para=document.getElementById("para")
document.getElementById('couleur').addEventListener('input', function() {
   
    const couleur = this.value;


    console.log('Couleur sélectionnée :', couleur);
    para.style.color=couleur
})
document.getElementById("num").addEventListener('input',function(){
    const nume=this.value;
    console.log(nume)
    
    para.style.fontSize = nume + "px"; 
    
})
document.getElementById("selec").addEventListener('input',function(){
    const famille=this.value;
    para.style.fontFamily=famille
})
