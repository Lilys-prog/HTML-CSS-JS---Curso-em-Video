let agora = new Date();
let diaSem = agora.getDay();
/* 
o js vai contar os dias como conta um array, a partir do 0, e vai dar como resposta o número e não o dia.
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

switch(diaSem) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Segunda');
    break;
  case 2:
    console.log('Terça');
    break;
  case 3:
    console.log('Quarta');
    break;
  case 4:
    console.log('Quinta');
    break;
  case 5:
    console.log('Sexta');
    break;
  case 6:
    console.log('Sábado');
    break;
}
// o break encerra o código quando encontrar o caso certo e manda para fora da condicional. Sem o 'break;' ele vai continuar o código e executar o código de todos os casos que vierem após o correto. Vira uma cagada múltipla.