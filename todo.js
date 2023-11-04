import { syncStorage, loadFromStorage } from "./storage.js";
import { renderItem, renderList } from "./dom.js";
import { onAddItem, onDeleteAll, onFilterState, onSearchItem } from "./events.js";

const save_button = document.querySelector("#save-btn");
const delete_button = document.querySelector("#delete");

const item_filter = document.querySelector(".item-filter");
const search_button = document.querySelector("#search-btn");
const todo_form = document.querySelector("#todo-form");


// function onSearchItem(event) {
//   event.preventDefault();
//   console.log(event);
// }

function events() {
  //save_button.addEventListener("click", onAddItem);
  delete_button.addEventListener("click", onDeleteAll);
  item_filter.addEventListener("change",onFilterState);
  search_button.addEventListener("click", onSearchItem);
  todo_form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    onAddItem();
  });
}

function init() {
  loadFromStorage();
  renderList();
  events();
}

init();
