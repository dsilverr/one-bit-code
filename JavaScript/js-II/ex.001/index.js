// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let arr = []
alert("Lista de pacientes:")
    for (let indice = 0; indice < arr.length; indice++) {
        const elemento = arr[indice]
        alert((indice+1) + "º " + elemento)
    }

do { 
     escolha = prompt("Menu: \n" + 
    "Consultar paciente (1)\n"
     + "Novo paciente (2)\n" + 
     "Sair (3)\n" )

     switch(escolha){
        case "1":
        arr.shift()
        break
        case "2":
        const  newpacient = prompt("Me diga o nome do novo paciente: ")
        arr.push(newpacient)
        break
        case "3":
        alert("Encerrando")
        break
        default:
        alert("Escolha uma opção válida")
        break
     }
    
}while(escolha !== "3")