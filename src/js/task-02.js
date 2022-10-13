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
  elementNames.forEach(name => {
    const liRef = document.createElement("li");
    liRef.textContent = name;
    liRef.classList.add('item');
    ulRef.append(liRef);
    return ulRef;
  });
}

createListItems(ingredients);