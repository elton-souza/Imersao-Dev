var numberOne = parseInt(prompt("Digite o primeiro valor: "))
var numberTwo = parseInt(prompt("Digite o segundo valor: "))
var operacao = parseInt(prompt("Qual operação deseja realizar?\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"))
var resultado

switch(operacao){
	case 1:
		resultado = numberOne + numberTwo
		document.write(`<h1>${numberOne} + ${numberTwo} = ${resultado}</h1>`)
		break
	case 2:
		resultado = numberOne - numberTwo
		document.write(`<h1>${numberOne} - ${numberTwo} = ${resultado}</h1>`)
		break
	case 3:
		resultado = numberOne * numberTwo
		document.write(`<h1>${numberOne} x ${numberTwo} = ${resultado}</h1>`)
		break
	case 4:
		resultado = numberOne / numberTwo
		document.write(`<h1>${numberOne} / ${numberTwo} = ${resultado}</h1>`)
		break
	default:
		document.write("<h1>Opção Inválida</h1>")
}