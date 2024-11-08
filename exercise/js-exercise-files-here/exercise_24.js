/*
Exercise 24: Optimizing DOM Manipulations
Description: Add 100 new list items to item-list efficiently by using a DocumentFragment.
*/

// Exercise 24
const fragment = document.createDocumentFragment();

for (let i = 4; i <= 103; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  fragment.appendChild(li);
}

itemList.appendChild(fragment);
