'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  let numDecimal = 0;
  for(let i = num.length - 1; i >= 0 ; i--){
    numDecimal += (num[i] * 2 ** (num.length -1 -i));
    
  }   
  
 return numDecimal;

}


function DecimalABinario(num) {
  // tu codigo aca
let binario = "";
let result = 0;
for(let i = num; i >=0; i--){
  if(num != 0){
    binario = (num % 2) + binario;
    result = Math.floor (num / 2);
    num = result;
    i = num;
  }
}
return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}