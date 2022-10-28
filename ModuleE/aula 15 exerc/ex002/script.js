let num = document.getElementById('num'); // número selecionado
let btn = document.getElementById('btn'); // botão pra ação ao clicar
let tabuada = document.getElementById('tabuada'); // caixa de texto

function tabuar() {  
  if (num.value.length === 0) {
    window.alert('Escolha um número!')
  } else {
    tabuada.innerHTML = '';
    let n = Number(num.value);    
    for (let i = 1; i <= 10; i += 1) {        
      tabuada.innerHTML += `${n} x ${i} = ${n * i}\n`;      
    }    
  }
}
btn.addEventListener('click', tabuar);