'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  if (array.length < 1) {
      return []
    }
    let arrayizq = [];
    let arrayder = [];
    let max = array.length-1;
    console.log(max);
    var x = Math.floor(Math.random() * max);
    var pivot = array[x];
    console.log(array);
    console.log(x)
    console.log(pivot);
    for (let i = 0; i < array.length; i++) {
      if (array[i] <= pivot && i !== x) {
        arrayizq.push(array[i]);
      };
      if (array[i] > pivot && i !== x) {
        arrayder.push(array[i]);
      }; 
    };
  let arrayIzqQuick = quickSort(arrayizq);
  let arrayDerQuick = quickSort(arrayder);
  let arrayPivot = [pivot];
  let arrayFinal = arrayIzqQuick.concat(arrayPivot.concat(arrayDerQuick));
    return arrayFinal
  }
  
quickSort([5, 1, 4, 2, 8])

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

if(array.length === 1) {
  return array;
}
let division = split(array);

    let left = division[0];//[left]
    let right = division[1];//[right]

    return paste(mergeSort(left), mergeSort(right));
}

// funcion que divide el arreglo
function split(array){
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return [left, right]; //[left], [right]
}
//funcion que una los array
function paste(left, right){
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex <left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    } else {array.push(right[rightIndex]);
    rightIndex++};
  }

  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
