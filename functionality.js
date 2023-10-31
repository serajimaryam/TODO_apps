import {syncStorage} from "./storage.js"
import {renderList} from "./dom.js"
import { todo_list } from "./store.js";

// functionality
export function toggleStatus(title) {
    for (let i = 0; i < todo_list.length; i++) {
      console.log(todo_list[i]);
      const list_item = todo_list[i];
      console.log(list_item);
  
      if (list_item.title === title) {
        list_item.status = list_item.status ? false : true;
        console.log("sss", list_item);
      }
    }
    syncStorage();
  }

export function addItem(item) {
    const next_item = {
      title: item.title,
      status: item.status,
    };
    todo_list.push(next_item);
  }
  
  export function remove(val) {
    for (let i = 0; i < todo_list.length; i++) {
      if (val === todo_list[i].title) {
        todo_list.splice(i, 1);
      }
    }
    console.log(todo_list);
    syncStorage();
    renderList();
  }