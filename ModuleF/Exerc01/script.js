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

// let num = document.getElementById('txtnum'); // seleção de número
// let btnAdd = document.getElementById('btnA'); // botão para adicionar na área de select (option)
// let sel = document.getElementById('txtadd'); // caixa do select
// let btnFin = document.getElementById('btnF'); // botão para calcular as operações
// let comp = document.getElementById('comp');
// let maior = document.getElementById('maior');
// let menor = document.getElementById('menor');
// let soma = document.getElementById('soma');
// let media = document.getElementById('media');
// let item;
// let vetor = [];



// function adicionar() {
//   let n = Number(num.value);  
//   vetor.push(n);
//   if (num.value.length === 0) {
//     window.alert('Adicione um número!');
//   } else if (n < 1 || n > 100) {
//     window.alert('Número inválido!');
//   } else {    
//     for (let i = 0; i < vetor.length; i += 1) {
//       item = document.createElement('option');      
//       item.text += `Valor ${vetor[i]} adicionado`;
//       sel.appendChild(item);      
//     }
//   }    
// }
// btnAdd.addEventListener('click', adicionar);



// function finalizar() {
//   let opt = sel.childElementCount;
//   let n = Number(num.value);
//   vetor.push(n);
//   for (let i = 0; i < vetor.length; i += 1) {    
//     if (num.value.length !== 0) {
//       console.log(vetor[i]);
//     }
//   }
//   comp.innerHTML = `Ao todo temos ${opt} números cadastrados.`;
// }
// btnFin.addEventListener('click', finalizar);

// =======================================
// =======================================
// =======================================
// =======================================
// =======================================

// SOLUÇÃO DO GUANABARA, COMPARAR DEPOIS
let num = document.getElementById('txtnum');
let sel = document.getElementById('txtadd');
let res = document.getElementById('res');
let btnAdd = document.getElementById('btnA');
let valores = [];

// criou então duas funções, uma para verificar se o que está sendo digitado é um número e se esse número está entre 1 e 100; e outra para verificar se o valor não está sendo repetido

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

// l seria um elemento qualquer que se está checando se faz ou não parte do vetor que se está construindo ao adicionar valores (ou o vetor 'valores')
function inVetor (n, l) {
  if (l.indexOf(Number(n)) !== -1) {
    return true;
  } else {
    return false;
  }
}

// função que será ligada ao botão adicionar e colocará elementos dentro do 'select'
function adicionar() {
  if (isNumero(num.value) && !inVetor(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado.`;
    sel.appendChild(item);
    res.innerHTML = '';
  } else {
    window.alert('Número inválido ou repetido!')
  }
  num.value = ''; // apaga o valor que foi introduzido
  num.focus();    // volta automaticamente para o ponto de inserção do número, sem precisar clicar outra vez
}
btnAdd.addEventListener('click', adicionar);
// preciso botar o botão aqui porque ele (o Guanabara) está usando o 'onclick' dentro do html




// agora os comandos que serãom ligados ao botão finalizar e os resultados
// primeira coisa será garantir que se o vetor estiver vazio ele dê uma mensagem para avisar que não tem o qq finalizar
let btnFin = document.getElementById('btnF');

function finalizar() {
  if (valores.length === 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {

    // o tamanho do vetor vai dizer quantos valores foram adicionados
    let tot = valores.length;

    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    // o laço abaixo, sozinho, serve para calcular o que resta. Lembrar que ele é um laço for/in e que serve para 'percorrer' os elementos no array em suas posições. E é de repetição, então ele vai e volta tantas vezes quanto elementos o array tiver
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / tot; 
    // não esquecer de tirar a média de dentro do bloco de repetição, mas ainda está na função e dentro do else, que é onde as variáveis soma e tot foram definidas (escopo)

    // bloco das análises:
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
  }
}
btnFin.addEventListener('click', finalizar);

// usa-se o 'res.innerHTML += ' para concatenar as sentenças e a crase para TB poder usar os elementos <p> de html e fazer cada frase em uma linha (além do uso normal)