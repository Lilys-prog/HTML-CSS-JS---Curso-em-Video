// uma função pode ser recursiva - quando chama a si própria
// 5! tambémm pode ser representado por (5 x 4!)
// as únicas excessões no caso de fatoriais são 0! e 1! => 1

function fatorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1); // dentro da função ela mesma é chamada
  }
}
console.log(fatorial(5));