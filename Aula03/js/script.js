function calcular(){
    let preco = document.getElementById("preco")
    let forma = document.getElementById("forma_pagamento")
    let valor_pagar = document.getElementById("valor_pagar")
/*
Se a forma de pagamento for pix o desconto sobre o preço do produto será de 10%. 
Caso seja dinheiro a forma de pagamento, então o desconto será de 5%, 
caso seja pagamento em cartão, será a acrescentado 5% ao preço; 
Caso não selecione nenhuma das alternativas será apresentado uma mensagem ao usuário.
*/
    let resultado = 0
    if(forma.value=="pix"){
        resultado = preco.value * 0.9
    }
    else if(forma.value=="dinheiro"){
        resultado = preco.value * 0.95
    }
    else if (forma.value=="cartão"){
        resultado = preco.value * 1.05
    }
    else {
        alert("Selecione uma forma de pagamento")
    }
    valor_pagar.value = "R$" + resultado
}