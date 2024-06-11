// ### Escalação do Time
// Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:
// - Escalar um jogador
//     - Informar a posição do jogador a ser escalado para o time.
//     - Informar o nome do jogador.
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
//     - Após o jogador ser escalado os campos de texto devem ser limpos.
// - Remover um jogador
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
//     - Após o jogador ser removido o campo de texto deve ser limpo.
// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.


function addPlayer() {

    const position = document.getElementById('iposicao').value
    const name = document.getElementById('inome').value
    const number = document.getElementById('inumero').value
    
    const confirmation = confirm('Escalar ' + name + ' como ' + position + ' ?')

    if (confirmation) {
        const teamList = document.getElementById('time')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ' : ' + name + ' ('+ number + ')'
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }else {
        alert('Jogador não escalado')
    }

}

function removePlayer() {

    const number = document.getElementById('rumber')
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm('Remover jogador: ' + playerToRemove + ' ?')

    if(confirmation) {
        playerToRemove.remove()
        document.getElementById('rnumber').value = ''
    }

}