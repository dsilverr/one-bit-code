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
// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice) {
        textoFinal += indice + '.' 
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + 'Candidatos)\n'
        return textoFinal
        }, '')
        
    alert(vagasEmTexto)
    
}

function criarVaga() {
    const nome = prompt('Informe um nome para a vaga: ')
    const dataLimite = prompt('Informe a data limite para se inscrever na vaga: ')
    const descricao = prompt('Informe a descrição da vaga: ')

    const confirmacao = confirm('Deseja adcionar a seguinte vaga:' + 
    '\n\nNome:' + nome + '\nData Limite:' + dataLimite + '\nDescrição: ' + descricao + ' ?')

    if (confirmacao) {
        const novaVaga = {nome, dataLimite, descricao, candidatos: []}
        vagas.push(novaVaga)
        alert('Nova vaga criada ')
    }
}

function vizualizarVaga() {
    const indice = prompt('Informe o indice da vaga que deseja ver: ')
    const vaga = vagas[indice]

    if (indice >= vagas.length || indice < 0) {
        alert('Indice inválido...')
        return
    }

    const candidatosEmTexto = vagas.candidatos.reduce( function(textoFinal, candidato){
        return textoFinal + "\n -" + candidato
    }, '')

    alert(
        'Vaga nº: '+  indice +
        '\nNome:' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData limite: ' + vaga.dataLimite +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length +
        '\nCandidatos inscritos: ' + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt('Qual o nome do candidato? ')
    const indice = prompt('Informe o indice da vaga que deseja se inscrever: ')
    const vaga =  vagas[indice]

    const confirmacao = confirm('Deseja inscrever o candidato '+ candidato + 'na vaga:' +
    '\nNome: ' + vaga.nome +
    '\nDescrição: '+ vaga.descricao +
    '\nData Limite: ' + vaga.dataLimite + '?'
    )

    if (confirmacao){
        vagas.candidatos.push(candidato)
        alert('Candidato adcionado')
    }

}

function excluirVaga() {
    const indice = prompt('Informe o indice da vaga que deseja excluir: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        'Tem certeza que deseja excluir a vaga: ' + indice + '?\n'+
        'Nome: ' + vaga.nome + 
        'Descrição: ' + vaga.descricao +
        'Data limite: ' + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluida')
    }
}

function exibirMenu() {
    const opcao = prompt(
        'VAGAS BRASIL\n\n' +
        'Escolha uma das opções:' +
        '\n[1]Listar Vagas' +
        '\n[2]Criar Vagas' +
        '\n[3]Vizualizar vagas' + 
        '\n[4]Inscrever candidato' + 
        '\n[5]Excluir vaga' +
        '\n[6]Sair'
    )

    return opcao

}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                listarVagas()
                break;
            case '2':
               criarVaga()
                break;
            case '3':
                vizualizarVaga()
                break;
            case '4':
                inscreverCandidato()
                break;
            case '5':
                excluirVaga()
                break;
            case '6':
                alert('Saindo do sistema...')
                break;
            default:
                alert('Escolha uma opção válida')
                break;
        }
        
    } while (exibirMenu() !== 6);

}

executar()