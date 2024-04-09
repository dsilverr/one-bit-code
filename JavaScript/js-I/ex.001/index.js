// Cadastro de Recrutas
// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
// o primeiro nome
// o sobrenome
// o campo de estudo
// o ano de nascimento
// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
// Calculadora de 4 Operações
// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
// Após calcular os resultados o programa deve exibi-los na tela

alert('Olá! \n Seja bem vindo ao programa de recurtamento!Por favor me diga os seguintes dados');

const nome = prompt('Nome: \n')
const sobrenome = prompt('Sobrenome: \n')
const campoDeEstudo = prompt('Campo De Estudo: \n')
const nascimento = parseInt(prompt('Ano De Nascimento: \n'))

alert('Os dados docandidato : '+ nome + '\n\n Estão corretos? \n\n' +
 'Nome: ' + nome +' '+ sobrenome + '\n' +
 'Campo de estudo: ' + campoDeEstudo + '\n' +
 'Idade: ' + (2024 - nascimento) +'\n'
)
