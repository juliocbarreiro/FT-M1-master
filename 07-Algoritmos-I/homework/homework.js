'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let arr = [1];

for (let i = 2; i < num + 1; i++) {
  
  if (num % i === 0) {
   arr.push(i);
    num = num / i;
    i-=1;
  }
  }
  return arr;
  }
  
  


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while (swap){
  swap = false;
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        let temp =  array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
    }
   }
  }
  return array;
}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

for(let i = 1; i < array.length; i++){
  let prev = i - 1;
  let temp = array[i];
  while(prev >= 0 && temp < array[prev]){
    array[prev + 1] = array[prev];
    prev--;
  }
  array [prev + 1] =  temp;
 }
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

   for(let i = 0; i < array.length; i++){
    let min = i;
    for(let x = i + 1; x < array.length; x++){
      if(array[min] > array[x])
        min = x;
     }
     if(i !== min){
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
     }
    }
    return array;
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
