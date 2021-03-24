var valorDolar = parseFloat(prompt("Qual valor em dólar a ser convertido para real?"))
var valorReal = valorDolar * 5.54
valorReal = valorReal.toFixed(2)
document.write(`<h2>O valor convertido em real foi: ${valorReal}</h2>`)
//alert(`O valor convertido em real foi: ${valorReal}`)
