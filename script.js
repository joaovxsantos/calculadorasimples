function calculadora(n1,n2){
    number1 = n1
    number2 = n2
    result = n1 + n2

}

alert("Calculadora de soma\nCaso vá utilizar números quebrados, coloque ponto.\nEx: 3.18")
var ap = parseFloat(prompt("Digite o primeiro número"))
var op = parseFloat(prompt("Digite o segundo número"))
calculadora(op,ap)
alert("O resultado da sua soma é: " + result)