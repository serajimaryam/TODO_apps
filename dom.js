import { todo_list } from "./store.js";
import { toggleStatus, remove } from "./functionality.js";

const list = document.querySelector(".list");
export const title_input = document.querySelector("#title");

//work with DOM
export function renderItem(todo_item) {
    //create element div with class item
    const item = document.createElement("div");
    item.classList.add("todo");
  
    //add checkbox to item class
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo_item.status;
  
    //add spam to item class
    const span = document.createElement("span");
    span.textContent = todo_item.title;
  
    //<button class="delete-btn">delete</button>
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "delete";
  
    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(deleteBtn);
  
    list.appendChild(item);
    checkbox.addEventListener("click", () => {
      toggleStatus(todo_item.title);
      // console.log("list", todo_list)
    });
  
    deleteBtn.addEventListener("click", () => {
      //console.log("salam");
      remove(todo_item.title);
    });
  }
  
  export function renderList() {
    //Remove old items
    list.innerHTML = "";
  
    //Render items
    for (let i = 0; i < todo_list.length; i++) {
      const item = todo_list[i];
      renderItem(item);
    }
  }
  
  export function clearInput() {
    title_input.value = "";
  }
  