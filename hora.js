var agora = new Date();
var hora = agora.getHours();

if (hora < 12 && hora > 6) {
  console.log('Vom dia');

} else if (hora > 12 && hora < 18) {
  console.log('Boa tarde');

} else if (hora <= 6){
  console.log('Boa Madru');

}else{
  console.log("Boa noite!");
  
}

