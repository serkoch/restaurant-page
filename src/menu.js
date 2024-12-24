function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const pizzaImage = document.createElement('img');
  pizzaImage.src = `img/pizza/${name.toLowerCase()}.png`;
  pizzaImage.alt = `Pizza ${name}`

  const pizzaName = document.createElement('h3');
  pizzaName.textContent = name;

  const pizzaDescription = document.createElement('p');
  pizzaDescription.textContent = description;

  menuItem.appendChild(pizzaImage);
  menuItem.appendChild(pizzaName);
  menuItem.appendChild(pizzaDescription);

  return menuItem;
}

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem('Pepperoni', 'Tomato sauce, mozzarella cheese, pepperoni slices, garnished with basil'));

  menu.appendChild(createMenuItem('Funghi', 'Tomato sauce, mozzarella cheese, sliced tomatoes, mushrooms, black olives, garnished with oregano'));
  menu.appendChild(createMenuItem('Margherita', 'Tomato sauce, mozzarella cheese, and fresh basil leaves'));
  menu.appendChild(createMenuItem('Caprese', 'Tomato sauce, mozzarella cheese, sliced tomatoes, red onion rings, black olives, and basil leaves'));
  menu.appendChild(createMenuItem('Disgusto', 'Tomato sauce, mozzarella cheese, pineapple chunks, and ham'));
  menu.appendChild(createMenuItem('Pancetta', 'Tomato sauce, mozzarella cheese, sliced tomatoes, olives, bacon strips, and herbs'));
  menu.appendChild(createMenuItem('Diavolo', 'Tomato sauce, mozzarella cheese, pepperoni, chili peppers, and bell peppers'));
  menu.appendChild(createMenuItem('Veggie', 'Tomato sauce, mozzarella cheese, tomatoes, black olives, broccoli, red onion, bell peppers, and basil'));

  return menu
}

export default function loadMenu() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createMenu());
}