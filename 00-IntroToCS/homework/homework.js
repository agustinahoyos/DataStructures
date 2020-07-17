function BinarioADecimal(num) {
  // tu codigo aca num = ["010101"]
var array = num.split("");
var decimal = 0;
for(var i=0; i< array.length; i++){
  decimal = decimal + parseInt(array[i]) * Math.pow(2, array.length-1 -i);
}return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
var binario = [];

while (num >= 1){
  var resto = num % 2;
  binario.unshift(resto);
  num = (num - resto) /2;
}
return binario.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
