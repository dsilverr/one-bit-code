// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let cards = ""
const arr = ["3 verde" , "2 azul" , "9 vermelho" , "7 azul" , "+4" , "trocar de cor" ]



do{
    escolha = prompt("O baralho contém :" + arr.length  + " Cartas \n" + 
    "Adcionar carta [1] \n" + 
    "Remover carta [2] \n" +
    "Sair [3]" )

    switch (escolha) {
        case "1" :
            let add = prompt("Fale a carta que vai adcionar: ")
            arr.unshift(add)
            break;
        case "2" :
            let remov = arr.pop()
            alert(remov)
            break
        case "3" :
            alert("Saindo do sistema....")
            break
        default:
            alert("Escolha uma opção válida")
            break;
    }

}while (escolha !== "3")