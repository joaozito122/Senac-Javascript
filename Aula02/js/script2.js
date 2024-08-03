// Vamos criar as variaveis para saber a nota final do aluno
var nome = prompt("digite o nome do aluno")
var nota1 = prompt("digite a primeira nota")
var nota2 = prompt("digite a segunda nota")
var nota3 = prompt("digite a terceira nota")
var nota4 = prompt("digite a quarta nota")
// converter as variaveis das notas para valores numericos(int)
nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)
nota4 = parseInt(nota4)

var media = (nota1+nota2+nota3+nota4) / 4

document.getElementsByTagName("h2")[0].innerHTML=nome
document.getElementsByTagName("p")[0].innerHTML= "Primeira nota:" + nota1
document.getElementsByTagName("p")[1].innerHTML="Segunda nota:" + nota2
document.getElementsByTagName("p")[2].innerHTML="Terceira nota:" + nota3
document.getElementsByTagName("p")[3].innerHTML="Quarta nota:" + nota4
document.getElementsByTagName("p")[4].innerHTML="Media do aluno:" + media

if (media >= 6) {
    document.getElementsByTagName("p")[5].innerHTML = "Aprovado";
}
else {
    document.getElementsByTagName("p")[5].innerHTML = "Reprovado";
}