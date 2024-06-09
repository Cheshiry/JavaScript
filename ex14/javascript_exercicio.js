

function carregar() {
var msg = document.getElementById("mensagem");
var img = window.document.getElementById("foto");
var data = new Date();
const hora = data.getHours();

msg.innerHTML = (`Agora são ${hora}`);

/*if (hora >= 0 && hora < 12) {
    
} else if() {
    
}

}*/
