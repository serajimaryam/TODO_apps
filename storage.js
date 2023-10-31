//work with Storage
import {todo_list, reset} from "./store.js";

export function syncStorage() {
    const next_list = JSON.stringify(todo_list);
    console.log(todo_list, next_list);
    localStorage.setItem("my_list", next_list);
  }
  
export function loadFromStorage() {
    const listFromStorage = JSON.parse(localStorage.getItem("my_list")) || [];
    
    reset(listFromStorage);
  }