var b=document.getElementById("buttoon")
var d=document.getElementById("ok")
b.onclick=ajouter
function ajouter(){
    var nom=document.getElementById("nom").value
    console.log(nom)
    var cn=document.getElementById("cn").value
    if(!nom || !cn){alert("il manque un champ (nom ou content ) veuillez verifier ")}
    else{
        var neww=document.createElement("div")
       var newtodo= document.createTextNode(nom+":"+cn)
       neww.style.backgroundColor="white"
       neww.style.margin="10px"
       neww.style.fontsize="50px"
       neww.style.width="100%"
       neww.style.height="100%"
       neww.style.display="block"
        neww.style.overflowWrap = "break-word"; 
        neww.style.whiteSpace = "normal";

       var image=document.createElement("img")
       image.src="trash.png"
       image.width="20"
       image.height="30"
       image.marginRight="5%"
       
       
       neww.appendChild(newtodo)
       neww.appendChild(image)
       image.addEventListener('click',function(){
        d.removeChild(neww)
       })
       
       
       d.appendChild(neww)
    }
}
