let num = [5, 8, 2, 9, 3];
console.log(num); // desta forma ele apresenta o vetor entre colchetes
console.log(`Nosso vetor é ${num}`); // aqui ele tira os colchetes e mostra só os elementos

// acrescentar valores sem perder os elementos que já estão no array
num[5] = 6;
console.log(num);
// uma das formas é, sabendo o último índice do array, atribuir um valor ao próximo índice

// outro método é o push, e neste vc não precisa saber o índice em que o valor vai ser colocado, pois este método sempre vai colocar o novo valor na última posição
num.push(0);
console.log(num);


// para saber o comprimento do array usa-se o atributo length
console.log(num.length);
// neste caso tem 7 elementos e os índices vão até 6

// para colocar o vetor em ordem crescente usa-se o sort()
console.log(num.sort());