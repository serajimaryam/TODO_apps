import { syncStorage, loadFromStorage } from "./storage.js";
import {todo_list } from "./store.js";
import { renderItem, renderList, clearInput, title_input } from "./dom.js";
import { addItem } from "./functionality.js";

const save_button = document.querySelector("#save-btn");
const delete_button = document.querySelector("#delete");

const item_filter = document.querySelector(".item-filter");
const search_input = document.querySelector("#search");
const search_button = document.querySelector("#search-btn");
const todo_form = document.querySelector("#todo-form");



//Run your App

function onAddItem() {
  const val = title_input.value;
  if (val === "") {
    alert("You should write a text");
  } else {
    const item = {
      title: val,
      status: false,
    };
    addItem(item);
    syncStorage();
    renderItem(item);
    clearInput();
  }
}

function onDeleteAll() {
  const new_items = todo_list.filter((item) => {
    if (item.status === true) {
      return false;
    } else {
      return true;
    }
  });
  todo_list = new_items;
  syncStorage();
  renderList();
}
function onFilterState(e) {
  let state = e.target.value;
  let new_todo = todo_list;

  switch (state) {
    case "done":
      loadFromStorage();
      new_todo = todo_list.filter((item) => {
        if (item.status === true) {
          return true;
        } else {
          return false;
        }
      });
      console.log(new_todo);
      todo_list = new_todo;
      break;
    case "todo":
      loadFromStorage();
      new_todo = todo_list.filter((item) => {
        if (item.status === true) {
          return false;
        } else {
          return true;
        }
      });

      console.log(new_todo);
      todo_list = new_todo;
      break;

    case "all":
      loadFromStorage();
      console.log(todo_list);
      break;
  }
  renderList();
}

// function onSearchItem(event) {
//   event.preventDefault();
//   console.log(event);
// }

function events() {
  //save_button.addEventListener("click", onAddItem);
  delete_button.addEventListener("click", onDeleteAll);
  item_filter.addEventListener("change",onFilterState);
  // search_button.addEventListener("submit", onSearchItem);
  todo_form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    onAddItem();
  });
}
function onSearchItem(event) {
  event.preventDefault();
  console.log(event , "mary event");
}

function init() {
  loadFromStorage();
  renderList();
  events();
}

init();
