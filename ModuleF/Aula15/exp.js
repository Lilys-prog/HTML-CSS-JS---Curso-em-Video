
let num = [4, 5, 6, 7, 8];
console.log(num);
for (let i = 0; i < num.length; i += 1) {
  console.log(`A posição ${i} do vetor tem o valor ${num[i]}`);
}
// mostrar o vetor de forma simplificada, pois o 'for' percorre todos os índices. Menos linhas para mostrar. Essa forma é tradicional, mas pode ser ainda mais simplificada, que é o for/in:

for (let pos in num) {
  console.log(num[pos]);
}

// na verdade o (for/in) é um método de objetos, mas todo array É um objeto

