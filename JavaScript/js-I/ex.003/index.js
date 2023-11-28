const number = parseFloat(prompt("Me diga um valor em M para convertermos :")) 

alert("Otimo, agora vamos escolher para o que vamos converter...")

const conversor = prompt("Você quer converter para que ?\n mm) \n cm) \n dm) \n dam) \n hm) \n km) ")

switch (conversor) {
    case "mm":
        alert("O resultado é :" + (number * 1000)  + ("MM"))
        break
    case "cm":
        alert("O resultado é :" + (number * 100 ) + ("CM"))
        break
    case "dm":
        alert("O resultado é :" + (number * 10 ) + ("DM"))
        break
    case "dam":
        alert("O resultado é :" + (number / 10 ) + ("DAM"))
        break
    case "hm":
        alert("O resultado é :" + (number / 100 ) + ("HM"))
        break
    case "km":
        alert("O resultado é :" + (number / 1000) + ("KM"))
        break
    default : 
        alert("escolha uma opção válida")
        break
    }
