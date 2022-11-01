/*
- solicitar o input de um número de 1 a 100 e um botão na mesma linha escrito 'Adicionar'
- adicionar um input select para receber os números adicionados
- adicionar um botão que vai realizar operações com os números adicionados
- 'capturar' os elementos do html no js
- mensagem de alerta se nenhum número for selecionado
- montar a função que cria o child do select (option)
- formatar as options do select
- criar a função finalizar no botão, para fazer as contas solicitadas
- adicionar as variáveis pra cada função
*/

let num = document.getElementById('txtnum'); // seleção de número
let btnAdd = document.getElementById('btnA'); // botão para adicionar na área de select (option)
let sel = document.getElementById('txtadd'); // caixa do select
let btnFin = document.getElementById('btnF'); // botão para calcular as operações
let comp = document.getElementById('comp');
let maior = document.getElementById('maior');
let menor = document.getElementById('menor');
let soma = document.getElementById('soma');
let media = document.getElementById('media');
let item;
let vetor = [];



function adicionar() {
  let n = Number(num.value);  
  vetor.push(n);
  if (num.value.length === 0) {
    window.alert('Adicione um número!');
  } else if (n < 1 || n > 100) {
    window.alert('Número inválido!');
  } else {    
    for (let i = 0; i < vetor.length; i += 1) {
      item = document.createElement('option');      
      item.text += `Valor ${vetor[i]} adicionado`;
      sel.appendChild(item);      
    }
  }    
}
btnAdd.addEventListener('click', adicionar);



function finalizar() {
  let opt = sel.childElementCount;
  let n = Number(num.value);
  vetor.push(n);
  for (let i = 0; i < vetor.length; i += 1) {    
    if (num.value.length !== 0) {
      console.log(vetor[i]);
    }
  }
  comp.innerHTML = `Ao todo temos ${opt} números cadastrados.`;
}
btnFin.addEventListener('click', finalizar);