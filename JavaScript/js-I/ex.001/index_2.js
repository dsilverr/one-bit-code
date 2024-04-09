alert('Vamos calcular as opreções básicas!! \n\nMe diga 2 números')

const num1 = parseFloat(prompt('Número 1: '))
const num2 = parseFloat(prompt('Número 2: '))

const adicao = num1 + num2
const subtracao = num1 - num2
const divisao = num1 / num2
const multiplicacao = num1 * num2

alert('Aqui está o resulado: \n\n' + 
'Multiplicacao: ' + multiplicacao + '\n' +
'Divisão: ' + divisao + '\n' +
'Adição: ' + adicao + '\n'+
'Subtração: ' + subtracao )