
function ver() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById("ano");
    var res = document.getElementById("mensagem");


    if (Number(formAno.value) < 1900 || Number(formAno.value) >= ano) {
        window.alert("[ERRO] Digite um ano valido!!")
    } else {

        var fsex = document.getElementsByName("radsex");
        var idade = (ano - Number(formAno.value));
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "Homem";

            if (idade >= 0 && idade < 10) {
                //criança 

                img.setAttribute('src', 'morning02.png');

            } else if (idade < 21) {

                //adolescente jovem
                img.setAttribute("src", "morning02.png")

            } else if (idade < 50) {
                //adulto 
                img.setAttribute("src", "afternoon.png")


            } else {
                //idoso 
                img.setAttribute("src", "night.png")
            }

        } else {
            genero = "Mulher"

            if (idade >= 0 && idade < 10) {
                //criança 

                img.setAttribute('src', 'morning02.png');

            } else if (idade < 21) {

                //adolescente jovem
                img.setAttribute("src", "morning02.png")

            } else if (idade < 50) {
                //adulto 
                img.setAttribute("src", "afternoon.png")


            } else {
                //idoso 
                img.setAttribute("src", "night.png")
            }
        }

    }
    res.innerHTML = (`Você tem ${idade} anos e é ${genero}`);
    res.style.textAlign = "center";
    res.appendChild(img)

}
