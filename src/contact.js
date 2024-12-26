function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNum = document.createElement('p');
  phoneNum.textContent = '📞123 456 7890';

  const address = document.createElement('p');
  address.textContent = '🏠 3 4th Street, Manhattan, NY'

  const restaurantMap = document.createElement('img');
  restaurantMap.src = 'assets/map.jpg';
  restaurantMap.alt = 'Pizzeria Mangione location';

  contact.appendChild(phoneNum);
  contact.appendChild(address);
  contact.appendChild(restaurantMap);

  return contact
}

export default function loadContact() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createContact());
}