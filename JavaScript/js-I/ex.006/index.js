const num = prompt(" Olá, eu sou o Robô da tabuada \n Informe o número que você deseja calcular :")

let resultado = ""

for(let count = 1;count <= 20;count++){
    resultado += " ->" + num + "*" + count + "=" + (num + count) +"\n"
}

alert("Resultado da tabuada de " + num  + ": \n \n" + resultado)