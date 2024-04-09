/*Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.  Usar: do while, while e switch*/

let escolha = ""

do{    

     escolha = prompt("Escolha qual função você deseja acessar:" 
    +"\n1 Extrato"+ 
    "\n2 Saldo" + 
    "\n3 Saque" + 
    "\n4 Poupança" + 
    "\n5 Encerrar")  

    switch (escolha){
        case "1":
        alert("Seu extrato é X")
        break
        case "2":
        alert("Seu Saldo é X")
        break
        case "3":
        alert("Seu limite de saque é X")
        break
        case "4":
        alert("Você têm X na poupança")
        break
        case "5":
        alert("Encerrando...")
        break  
        default:
        alert("Escolha uma opção válida")
        break
    }
 
}while(escolha !== "5")
