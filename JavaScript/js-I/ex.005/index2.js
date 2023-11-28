/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

let money = parseFloat(prompt("Me diga quanto dinheiro tem em sua conta: "))
let option = ""
let adcionar = 0 
let remover = 0

do{
    option = prompt("Você têm : " + money + " em sua conta \n Você deseja fazer qual operação :"
     +"\n1 adicionar" 
     +"\n2 remover "
     +"\n3 sair")

     switch(option){
        case "1":
        adcionar = parseFloat(prompt("Quanto você deseja adcionar?"))
        money += adcionar
        alert("Você está com " + money + " em dinheiro")
        break
        
        case "2" :
        remover = parseFloat(prompt("Quanto você deseja remover?"))
        money -= remover
        alert("Você está com " + money + " em dinheiro")
        break
        
        case"3":
        alert("Você está saindo do sistema....")
        break 

        default:
        alert("entrada inválida")   
        break
    }
}while (option !== "3")