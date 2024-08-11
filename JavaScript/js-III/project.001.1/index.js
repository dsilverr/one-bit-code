const main = document.querySelector('main')
const input = document.getElementById('input')
const root = document.querySelector(':root')
const resultInput = document.getElementById('result')

const allowedKeys = ['(',')','%','9','8','7','6','5','4','3','2','1','0','/','*','-','.','+',' ']

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener(function(){
    input.value = ''
    input.focus()
})