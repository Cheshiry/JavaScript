

function carregar() {
var msg = document.getElementById("mensagem");
var img = document.getElementById("img");
var data = new Date();
const hora = 15;
//data.getHours();


msg.innerHTML = (`Agora são ${hora}`);

if (hora >= 0 && hora < 12){

    img.src ="morning02.png";
    window.alert("manha");
    document.body.style.backgroundColor = "#fcf59c";

}else if (hora >= 12 && hora <= 18) {

    img.src = "afternoon.png";
    window.alert("tarde");
    document.body.style.backgroundColor = "#fd6b00";

} else {

    img.src = "night.png";
    window.alert("noite");
    document.body.style.backgroundColor = "#100e24";
}
}
