let vel = 60.5;
console.log(`A velocidade do seu carro é ${vel}km/h`);
console.log('Você ultrapassou a velocidade permitida. MULTADO');
console.log('Dirija sempre usando cinto de segurança');
// aqui os comandos são sequenciais, todos serão multados mesmo que estejam dentro da velocidade permitida


// ===============================


let vel1 = 80;
console.log(`A velocidade do seu carro é ${vel1}km/h`);
if (vel1 > 60) {
  console.log('Você ultrapassou a velocidade permitida. MULTADO!');
}
console.log('Dirija sempre usando cinto de segurança!');
// esta é uma condição simples,, pois não usa 'else'


// ===============================


let pais = 'EUA';
if (pais === 'Brasil') {
  console.log('Brasileiro');
} else {
  console.log('Estrangeiro');
}
// esta é uma condição composta por usar o 'else' também


// ===============================


