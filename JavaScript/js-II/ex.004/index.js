// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:
// Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair
// Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga , indice) {
    textoFinal += indice + "."
    textoFinal += vaga.nome 
    textoFinal += " (" + vaga.candidatos.length + "candidatos)\n"
    return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("informe uma descrição para a vaga:")
    const datalimite = prompt("informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmação = confirm("Deseja criar uma nova vaga com essas informações:" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData Limite: "+ datalimite)

    if(confirmação){
        const novaVaga = {nome, descricao, datalimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")

    if (indice >= vagas.length || indice < 0){
        alert("Indice Inválido")
        return
    }
    const vaga = vagas[indice]

    const candidatosEmtexto = vaga.candidatos.reduce(function (textoFinal, candidato){
        return textoFinal + "\n -" + candidato
    }, "")

    alert(
        "vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.datalimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos incritos: " + candidatosEmtexto

    )
}

function inscreverCandidato(){
    const candidato = prompt("Informne o nome do candidato : ")
    const indice = prompt("Informe o indice da vaga para qual o cadidato deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmação = confirm("Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" + 
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.datalimite)

    if (confirmação){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
} 

function excluirVaga(){
    const indice = prompt("informe o indice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmação = confirm(
        "Tem certeza que deseja excluir a vaga" + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.datalimite
    ) 

    if (confirmação){
        vagas.splice(indice, 1)
        alert("Vaga Excluida.")
    }
}

function exibirMenu(){
    const opçao = prompt("Cadastro de Vagas De Emprego" +
    "\n\n Escolha uma das opções:" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um candidato" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
    )

    return opçao
}

function executar(){
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break;
            case "2":
                novaVaga()
                break;
            case "3":
                exibirVaga()
                break;
            case "4":
                inscreverCandidato()
                break;
            case "5":
                excluirVaga()
                break;
            case "6":   
                alert("Saindo")
                break;
            default:
                alert("Opção Inválida.")
                break;
        }
        
    } while (opcao !== "¨6");

}

executar()