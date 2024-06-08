

function carregar(){
var msg = window.document.getElementById("");
var img = window.document.getElementById("");
var data = new aDate();
var hora =data.getHours();

msg.innerHtml = "Agora são ${hora} "
  if(hora >= 0 && hora < 12){
    img.src = "";
    document.body.style.background = "";

}else if(hora >= 12 && hora <= 18){
img.src = "";
    document.body.style.background = "";

}else{
img.src = "";
    document.body.style.background = "";
}
}
