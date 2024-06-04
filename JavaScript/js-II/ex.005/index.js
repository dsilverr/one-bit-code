// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function areaTriangulo() {
    const base = parseFloat(prompt('Me diga a base do triângulo: '))
    const altura = parseFloat(prompt('Me diga a altura do triângulo: '))
    
   return base * altura / 2
}

function areaRetangulo() {
    const base = parseFloat(prompt('Me diga a base do retângulo:' ))
    const altura = parseFloat(prompt('Me diga a altura do retângulo: '))
    
    return base * altura
}

function areaQuadrado() {
    const lado = parseFloat(prompt('Me diga quanto mede o lado do quadrado: '))

    return lado**2
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt('Me diga a base maior do trapézio:' ))
    const baseMenor = parseFloat(prompt('Me diga a base menor do trapézio:' ))
    const altura = parseFloat(prompt('Me diga a altura do trapézio:'))
    
    return (baseMaior + baseMenor) * altura / 2
} 

function areaCirculo() {
    let pi = 3.14
    const raio = parseFloat(prompt('Me diga o raio do circulo: '))

    return pi * raio**2
    
}

function menu() {
   return prompt(
    'Calculadora Geométrica\n'+
    '[1]Calcular área do triângulo\n'+
    '[2]Calcular área do retângulo\n'+
    '[3]Calcular área do quadrado\n'+
    '[4]Calcular área do trapézio\n'+
    '[5]Calcular área do circúlo\n'+
    '[6]Sair\n'
   )
}

function executar() {
    let opcao = ''

    do {
        opcao = menu()
        let resultado

        switch (opcao) {
            case "1":
            resultado = areaTriangulo()
                break;
            case "2":
            resultado = areaRetangulo()
                break;
            case "3":
            resultado = areaQuadrado()
                break;
            case "4":
            resultado = areaTrapezio()
                break;
            case "5":
            resultado = areaCirculo()
                break;
            case "6":
            alert("Saindo do sistema...")
                break;
            default:
            alert('Escolha uma opção válida')
                break;
        }

        if (resultado) {
            alert("Resultado: " + resultado)
          }
        
    } while (opcao !== "6");
}

executar()