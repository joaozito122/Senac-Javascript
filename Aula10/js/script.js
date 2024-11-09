//function horario(){
//    //Vamos fazer a instância da classe Date onde iremos encontrar as funções de data e hora
  //  let tempo = new Date()
    //let hora = tempo.getHours()
   // let minuto = tempo.getMinutes()
//    let segundo = tempo.getSeconds()
//    document.querySelector("#relogio").innerHTML = `${hora} : ${minuto} : ${segundo}`
//}


//let p =0
//function movimentaDiv(){
//    if(p >= 1200){
 //       p =1200
  //  }
  //  else{
   //     p+= 10
//    }
//    document.querySelector("#imagem").style.left = p + "px"
//    p+=10
//}
//
//window.setInterval(movimentaDiv, 100)
function apagarSombra(){
    document.querySelector("#sombra").style.display="none"
}
window.setTimeout(apagarSombra, 3000)