const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
const firstName = document.createElement('li')
firstName.textContent = ingredient;
firstName.classList.add('item');
list.append(firstName);
})

