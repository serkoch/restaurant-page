import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'MangiOne';

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('nav-btn');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActive(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-btn');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActive(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-btn');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActive(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActive(button) {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const createdBy = document.createElement('p');
  const gitLink = document.createElement('a');
  gitLink.textContent = 'SerKoch';
  gitLink.href = 'https://github.com/serkoch/restaurant-page';
  createdBy.textContent = `Created by ${gitLink}`;

  return footer;
}

export default function initWebsite() {
  const body = document.querySelector('body');

  body.appendChild(createHeader());
  body.appendChild(createMain());
  body.appendChild(createFooter());

  setActive(document.querySelector('.nav-btn'));
  loadHome();
}
