const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createListItems(elementNames = []){
  const ulRef = document.querySelector('ul#ingredients');
  const items = [];
  elementNames.forEach(name => {
    const liRef = document.createElement("li");
    liRef.textContent = name;
    liRef.classList.add('item');
    items.push(liRef)
  });
  ulRef.append(...items);
}

createListItems(ingredients);