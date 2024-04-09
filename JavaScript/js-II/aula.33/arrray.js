const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]   


//push() adciona elementos no final do array    
arr.push("Boromir")
console.log(arr)
//unshift()    adciona elemtos no começo do array     
arr.unshift("Boromir")
console.log(arr)
//pop()   remove o ultimo elemento do array
const lastelement = arr.pop()
console.log(arr)
console.log(lastelement)
//shift()   remove o primeiro elemento do array
const  firstelement = arr.shift()
console.log(arr)
console.log(firstelement)
//includes()   verifica se o elemento entre parenteses está no array
const includ = arr.includes("Boromir")
console.log(includ)
//indexof()    verifica  se o elemento entre parenteses está no array e retorna seu indíce
const indice = arr.indexOf("Boromir")
console.log(indice)
//slice()  copia e corta um elemento de acordo com o indice 
const cut = arr.slice(0, 4)
const cut2 = arr.slice(-4, -1)
console.log(arr)
console.log(cut)
console.log(cut2)
//concat()  serve para concatenar os arrays
const sociedade = cut.concat(cut2 , "Boromir")
console.log(sociedade)
// splice() serve para substituir elementos   
const removedelement = sociedade.splice(indice, 1,"Gandal, o Cinzento")
console.log(sociedade)
console.log(removedelement)
// iterar sobre os elementos 
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + "se encontra na posição" + indice)
}