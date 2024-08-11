const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value === '' ? 'olá, mundo' : ''

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = input.placeholder === 'digite algo' ? 'Escreva algo' : 'digite algo'
})

document.getElementById('disabled').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log('o Valdor do atributo data-something-else é: ' + data)
    input.dataset.somethingElse = 'algum outro valor'
    console.log('o valor do atributo data-something-else agora é: ' + input.dataset.somethingElse)
})