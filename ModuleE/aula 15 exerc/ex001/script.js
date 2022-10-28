let inicio = document.getElementById('inicio');
let fim = document.getElementById('fim');
let salto = document.getElementById('salto');
let btn = document.getElementById('btn');
let cont = document.getElementById('cont');


function contador() {
  if (inicio.value.length === 0 || fim.value.length === 0 || salto.value.length === 0) {
    window.alert('ERRO! Faltam dados!')
  } else {
    cont.innerHTML = `Contagem: <br>`
    let ini = Number(inicio.value);
    let fin = Number(fim.value);
    let sal = Number(salto.value);
    if (sal === 0) {
      window.alert('Salto inv´alido, considerando valor 1: ');
      sal = 1;
    }
    if (ini < fin) {
      // contagem crescente
      for (let i = ini; i <= fin; i += sal) {
        cont.innerHTML += i + ` 👉  `;
      }
    } else {
      // contagem decrescente
      for (let i = ini; i >= fin; i -= sal) {
        cont.innerHTML += i + ` 👉  `;
      }      
    }
    cont.innerHTML += ` 🀄 `;
  }
}
btn.addEventListener('click', contador);