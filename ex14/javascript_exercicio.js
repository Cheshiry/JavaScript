

function carregar() {
var msg = document.getElementById("mensagem");
var img = window.document.getElementById("foto");
var data = new Date();
const hora = data.getHours();

msg.innerHtml = "Agora são ${hora} "
  if(hora >= 0 && hora < 12){
    img.src = "";
    document.body.style.background = "#515154";

}else if(hora >= 12 && hora <= 18){
img.src = "";
    document.body.style.background = "#e2cd9f";

}else{
img.src = "";
    document.body.style.background = "#b9846f";

}
