var numeroSecreto = parseInt(Math.random()*10)
let tentativas = 1

while(tentativas <= 3){
    var chute = parseInt(prompt("Adivinhe um número de 0 a 10: "))
    if(chute == numeroSecreto){
        alert(`Acertou! em sua ${tentativas}° tentativa`)
        break
    }else if(chute > numeroSecreto){
      alert("O número secreto é menor")
      tentativas += 1  
    }else if(chute < numeroSecreto){
        alert("O número secreto é maior")
        tentativas += 1
    }
}
if(tentativas > 3){
  alert(`Você não conseguiu acertar :( \nO número secreto era: ${numeroSecreto}`)
}
