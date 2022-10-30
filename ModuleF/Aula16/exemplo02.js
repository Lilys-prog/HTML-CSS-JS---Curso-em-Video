function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 5));
// fazendo a chamada já dentro do console

// se a função pede algum parâmetro ou mais de um e ele não é fornecido, fica com o valor 'undefined' e dá erro na execução

//para resolver isso pode-se atribuir um valor inicial aos parâmetros; desta forma se eles não forem fornecidos, atribuídos novos valores, a função vai usar o que já tem.

// a primeira linha da função poderia ser

//                 function soma(n1 = 0, n2 = 0) {}
// desta forma, se n1 ou n2 não forem fornecidos, a função usará 0 no lugar e não dará o erro de 'undefined'