const save_button = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

let todo_list = [];
//work with DOM
function renderItem(todo_item){
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
  
    item.appendChild(checkbox);
    item.appendChild(span);
    
    list.appendChild(item);
    checkbox.addEventListener("click",() => {
        toggleStatus(todo_item.title);
        console.log("list", todo_list)
       
    })

}
function clearInput(){
    title_input.value = "";  
}
// functionality
function toggleStatus(title){
    for (let i = 0; i < todo_list.length; i++ ){
        console.log(todo_list[i]);
        const list_item = todo_list[i];
        console.log(list_item);

          if (list_item.title === title) {
             list_item.status = list_item.status ? false :true;
             console.log("sss",list_item);
          }
        }
        syncStorage();

}
function addItem(item){
    const next_item = {
        title: item.title,
        status: item.status,
    };
    todo_list.push(next_item); 

    syncStorage();
}

function renderList(){

    for(let i=0; i < todo_list.length; i++){
        const item= todo_list[i];
        renderItem(item);
       }
}

//work with Storage
function syncStorage(){   
    const next_list = JSON.stringify(todo_list);
    console.log(todo_list, next_list)
    localStorage.setItem("my_list", next_list);
}


function loadFromStorage() {
  const listFromStorage= JSON.parse(localStorage.getItem("my_list")) || []
  todo_list = listFromStorage;
  } 

   
function onAddItem(){
    const val = title_input.value;
       //  console.log("clicked",value);
       if(val=== ""){
           alert("You should write a text");
       }else {
         const item = {
            title:val,
            status: true,
         }      
         addItem(item);
         renderItem(item);
         clearInput();
       }
}
function events(){
    save_button.addEventListener("click", onAddItem);
}

function init(){
     loadFromStorage();
     renderList();
     events();    
}

init();

