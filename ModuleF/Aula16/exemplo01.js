function parImp(n) {
  if (n % 2 === 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
}
// uma função pode ter 2 returns, mas só um será o retorno

let res = parImp(11); // chamada sendo colocada em uma variável para poder mostrar o retorno
console.log(res);
// também poderia colocar a chamada direto dentro do console.log pra mostrar, dá na mesma