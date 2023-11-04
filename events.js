import { syncStorage, loadFromStorage, updateDraft } from "./storage.js";
import { renderList, renderItem, clearInput, title_input } from "./dom.js";
import { addItem } from "./functionality.js";
import { reset, todo_list } from "./store.js";

const search_input = document.querySelector("#search");
//Run your App

export function onAddItem() {
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
  
export function onDeleteAll() {
    const new_items = todo_list.filter((item) => {
      if (item.status === true) {
        return false;
      } else {
        return true;
      }
    });
    reset(new_items);
    syncStorage();
    renderList();
  }
export function onFilterState(e) {
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
        reset(new_todo);
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
        reset(new_todo);
        break;
  
      case "all":
        loadFromStorage();
        console.log(todo_list);
        break;
    }
    renderList();
  }
  
export function onSearchItem(event) {
    event.preventDefault();
    // console.log("bbbb");
    loadFromStorage();
    const new_items = todo_list.filter((item) => {
        // console.log(item.title)
        if (item.title.includes(search_input.value)){
            //console.log(item.title,"yaftam")
          return true;

        } else {
          return false;
        }
      });
      
      reset(new_items);
      renderList();
  }
  export function onType(eve){  
     const char = eve.key;  
      updateDraft(char);
   

  }