function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('imagem');
  let data = new Date();
  let hora = data.getHours();   
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = 'imagens/manha.png';
    document.body.style.background = '#3e58d3';
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'imagens/tarde.png';
    document.body.style.background = '#e8bd39';
  } else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#101c37';
  }
}