const listRef = document.querySelector('ul#categories');
const itemRef = listRef.querySelectorAll('li.item');

console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach(item => {
  console.log(`Категория: ${item.children[0].textContent}`);
  console.log(`Количество элементов:  ${item.children[1].children.length}`);
});
