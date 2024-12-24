function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const imageCook = document.createElement('img');
  imageCook.src = 'img/pizzacut.jpg'
  imageCook.alt = 'Cutting Pizza';

  home.appendChild(createPara('Fresh ingredients make the best pizza'));
  home.appendChild(createPara('People choose us since 1984'));
  home.appendChild(imageCook);
  home.appendChild(createPara('Pizza means love'));

  return home;
}

function createPara(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}

export default function loadHome() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createHome());
}