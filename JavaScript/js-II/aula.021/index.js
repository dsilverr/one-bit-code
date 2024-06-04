function calcular(a,b,operacao){
    console.log('realizando uma operação')
    const resultado = operacao(a,b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando soma.")
    return x + y
}

console.log(somar(1, 1))

calcular(9, 2, function (x, y) {
    console.log("Realizando substração.")
    return x - y
  })

  function exibirElemento(elemento,indice,array){
    console.log({
        elemento,
        indice,
        array})
  }

  const lista = ['maça', 'banana', 'laranja' , 'limão']

  for (let i = 0;i < lista.length; i++) {
    exibirElemento(lista[i], i + 1 , lista)
  }

  lista.forEach(exibirElemento)