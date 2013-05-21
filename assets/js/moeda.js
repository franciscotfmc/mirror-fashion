function numberParaReal(numero) {
  return formatado = "R$ " + numero.toFixed(2).replace(".", ",");  
}

function realParaNumber(extraido) {
  return valor = parseFloat(extraido.replace("R$", "").replace(",", "."));
}

var formatado = numberParaReal(9.9);
var numero = realParaNumber("R$ 40,00");
console.log(formatado, numero);

