const work = prompt("Informe uma palvra :")
let invertedwork = ""

for (let i = work.length -1; i >= 0; i--){
    invertedwork += work[i]
}

if (work === invertedwork){
    alert(work + "É um palíndromo")
}
    else{
        alert(
            work + "Não é um palindromo \n \n" + work + "!==" + invertedwork
        )
    }