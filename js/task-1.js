console.log('------------- Задание 1 -------------');

const listRef = document.querySelector('ul#categories');
const itemRef = listRef.querySelectorAll('li.item');

console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach(element => {
  console.log(`Категория: ${element.children[0].textContent}`);
  console.log(`Количество элементов: ${element.children[1].children.length}`);
});
