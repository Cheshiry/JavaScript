function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("ano");
    var res = document.getElementById("mensagem");

    if (fano.ariaValueMax.length == 0 || (fano.value) > ano) {
        window.alert("[E R R O] Verifique os dados!!");
    } else {

        var fsex = document.getElementsByName("radsex");
        var idade = (ano - Number(fano.value));
        res.innerHTML = (`Idade calculada: ${idade}`);
    }

}
