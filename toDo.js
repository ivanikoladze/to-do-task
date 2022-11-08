let add = document.querySelector(".add");
let list = document.querySelector(".list");


// add.addEventListener("click", () => {
//     let input = document.querySelector(".todo").value;
//     let liElem = document.createElement("li");
//     liElem.innerHTML = (input);
//     ulElem.append(liElem);
//     document.querySelector(".todo").value="";
// });


class todo{
    constructor(input, list){
        this.input = input;
        this.list = list; 
    }
    addToList(){
        return this.list.innerHTML += `<li class = listChild> <input type = "text" class = "taskInput todo" value = "${this.input}" disabled </li><button class = "edit">edit</button><button class = "delete">delete</button>`;   
    }
    editList(){
        let editButton = document.querySelectorAll(".edit")
        let taskInput = document.querySelectorAll(".taskInput")
        editButton.forEach((element, index) =>{
            element.addEventListener("click", ()=>{
            if(editButton.item(index).innerHTML == "save"){
                taskInput.item(index).disabled = true;
                editButton.item(index).innerHTML = "edit";
                
            }else if (editButton.item(index).innerHTML == "edit"){
                taskInput.item(index).disabled = false; 
                editButton.item(index).innerHTML = "save";  
            }
            })
        }
        )}

    deleteList(){
        let deleteButton = document.querySelectorAll(".delete")
        deleteButton.forEach((element) =>{
            element.addEventListener("click", () =>{
                element.parentElement.remove();
            })
        })
    }
}

add.addEventListener("click", () => {
    let input = document.querySelector(".todo");
    if(input.value == ""){
        alert("არ არის შევსებული")

    }else{
        let todoTask = new todo(input.value, list)
        todoTask.addToList()
        todoTask.deleteList()
        todoTask.editList()
    }
    input.value = "";
})


