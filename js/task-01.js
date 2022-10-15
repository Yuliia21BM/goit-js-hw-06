// 1.
const ulRef = document.querySelector('ul#categories');
const allItems = ulRef.querySelectorAll('.item');
const totalItems = allItems.length;
console.log(`Number of categories: ${totalItems}`);

// 2.
allItems.forEach(element => { 
    const itemTitleRef = element.firstElementChild.textContent;
    console.log(`Category: ${itemTitleRef}`);
    const ulChildRef = element.lastElementChild.children.length;
    console.log(`Elements: ${ulChildRef}`);
});