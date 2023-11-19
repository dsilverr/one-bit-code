const car1 = prompt("Me diga o nome do seu carro :")
const vel1 = parseFloat(prompt("Qual a velocidade máxima dele ? "))

const car2 = prompt("Me diga o nome do carro do seu vizinho:")
const vel2 = prompt("Qual a velocidade máxima dele ? ")

if (vel1 == vel2){alert("Os 2 tem a mesma velocidade.")}    
else if(vel1 > vel2){alert("O " + car1 + " é mais rápido que o " + car2  )}
else if(vel1 < vel2){alert("O " + car2 + " é mais rápido que o " + car1  )}