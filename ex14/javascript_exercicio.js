

function carregar() {
var msg = document.getElementById("mensagem");
var img = window.document.getElementById("foto").src;
var data = new Date();
const hora = 13;
var corpo = document.getElementsByTagName("body");

msg.innerHTML = (`Agora são ${hora}`);




if(hora >= 0 && hora < 12){

    img ="\ex14\morning02.png"
    window.alert("manha");
    corpo.style.backgroundColor = "fcf59c";

}else if (hora >= 12 && hora < 18) {

    img = "\ex14\afternoon.png";
    window.alert("tarde");
    corpo.style.backgroundColor = "fd6b00";

} else {

    img = "\ex14\night.png";
    window.alert("noite");
    corpo.style.backgroundColor = "100e24";
}


/*

fcf59c manha
fd6b00 tarde
100e24 noite
*/





}
