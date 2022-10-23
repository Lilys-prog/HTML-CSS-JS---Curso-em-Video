let btn = document.getElementById('btn');
function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.getElementById('txtano');
  let res = document.getElementById('res');
  if (fAno.value.length === 0 || fAno > ano) {
    alert('ERRO: Verifique os dados e tente novamente!')
  } else {
    let sex = document.getElementsByName('radsex');
    let idade = ano - Number(fAno.value);    
    var genero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (sex[0].checked) {
      genero = 'homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'youngBoy.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'youngMan.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'man.png')
      } else {
        img.setAttribute('src', 'oldMan.png')
      }
    } else {
      genero = 'mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'babygirl.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'youngWoman.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'woman.png')
      } else {
        img.setAttribute('src', 'oldWoman.png')
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos.`
    res.appendChild(img); //filho do de cima
  }
}
btn.addEventListener('click', verificar);