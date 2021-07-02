const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');
// console.log(listRef);

const createList = item => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  return itemRef;
};
// console.log(createList(ingredients));

const ingredientsList = ingredients.map(item => createList(item));
// console.log(ingredientsList);

listRef.append(...ingredientsList);
