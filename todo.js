import { renderList } from "./dom.js";
import { onAddItem, onDeleteAll, onFilterState, onSearchItem ,onType} from "./events.js";
import { get_todos_list } from "./api/todos.js";
import { reset } from "./store.js";


//const save_button = document.querySelector("#save-btn");
const delete_button = document.querySelector("#delete");

const item_filter = document.querySelector(".item-filter");
const search_button = document.querySelector("#search-btn");
const todo_form = document.querySelector("#todo-form");
const todo_input = document.querySelector("#title");



function events() {
  //save_button.addEventListener("click", onAddItem);
  delete_button.addEventListener("click", onDeleteAll);
  item_filter.addEventListener("change",onFilterState);
  search_button.addEventListener("click", onSearchItem);
  todo_form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    onAddItem();
  });
  todo_input.addEventListener("keyup" ,onType);
}

function init() {
  const result = get_todos_list().then((list) => {
    //console.log("out",list);
    reset(list);
    //syncStorage();
    renderList();
  })
  //console.log(result);
  // loadFromStorage();  
  // renderList();
  events();
}

init();
