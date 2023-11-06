//work with Storage
import {todo_list, reset} from "./store.js";
export const storage_key = "todos"
export const draft_char = "draft";

export function syncStorage() {
    const next_list = JSON.stringify(todo_list);
    //console.log(todo_list, next_list);
    localStorage.setItem(storage_key, next_list);
  }
  
export function loadFromStorage() {
    const listFromStorage = JSON.parse(localStorage.getItem(storage_key)) || [];
    
    reset(listFromStorage);
  }

export function updateDraft(char) {
      const old_string = localStorage.getItem(draft_char) || [];
     // if char !="BAckspace" and 
      const new_string = old_string + char;

      localStorage.setItem(draft_char, new_string);
}