import { loadFromStorage } from "./storage.js";
import { renderList } from "./dom.js";
import { onAddItem, onDeleteAll, onFilterState, onSearchItem } from "./events.js";
import { get_todos_list } from "./api/todos.js";
import { reset } from "./store.js";


const save_button = document.querySelector("#save-btn");
const delete_button = document.querySelector("#delete");

const item_filter = document.querySelector(".item-filter");
const search_button = document.querySelector("#search-btn");
const todo_form = document.querySelector("#todo-form");


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
  const result = get_todos_list().then((list) => {
    console.log("out",list);
    reset(list);
    renderList();
  })
  //console.log(result);
  // loadFromStorage();  
  // renderList();
  events();
}

init();
