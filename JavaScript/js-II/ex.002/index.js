// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis 
 
const imoveis = []
let opcao = ""

do{

    opcao = prompt(
        "Imoveis : " + imoveis.length + 
        "\nEscolha uma opção: \n\n" +
        "Cadastrar um imóvel [1]\n" +
        "Lista de imóveis [2]\n" +
        "Sair [3] \n"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
            imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
      
            const confirma = confirm(
              "Salvar este imóvel?\n" +
              "\nProprietário: " + imovel.proprietario +
              "\nQuartos: " + imovel.quartos +
              "\nBanheiros: " + imovel.banheiros +
              "\nPossui Garagem? " + imovel.garagem
            )
                
            if (confirma) {
                imoveis.push(imovel)
              }
                
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + imoveis[i].proprietario +
                  "\nQuartos: " + imoveis[i].quartos +
                  "\nBanheiros: " + imoveis[i].banheiros +
                  "\nPossui Garagem? " + imoveis[i].garagem
                )
              }
            break
        case "3":
            alert("Você está saindo do sistema....")
            break
        default:
            alert("Escolha uma opção válida")
            break;
    }




}while(opcao !== "3")