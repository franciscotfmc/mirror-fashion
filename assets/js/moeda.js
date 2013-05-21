var numero = 9.9;
var formatado = numero.toFixed(2);
formatado = "R$ " + formatado;
formatado = formatado.replace(".", ",");
console.log(formatado);

var extraido = "R$ 120,00";
var compativelComParseFloat = extraido.replace("R$ ", "");
compativelComParseFloat = compativelComParseFloat.replace(",", ".");
var valor = parseFloat(compativelComParseFloat);
console.log(valor);