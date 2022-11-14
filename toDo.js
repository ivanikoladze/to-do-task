let add = document.querySelector(".add");
let list = document.querySelector(".list");
let input = document.querySelector(".todo");

class todo{
    constructor(input, list){
        this.input = input;
        this.list = list;
        this.addToList();
        this.deleteList();
        this.editList();
        

    }
    addToList(){
        let newElement =  `<li class = listChild> <input type = "submit" class = "taskInput todo" value = "${this.input}" disabled </li><button class = "edit">edit</button><button class = "delete">delete</button>`; 
        this.list.innerHTML += newElement;
    }
    editList(){
        let editButton = document.querySelectorAll(".edit")
        editButton.forEach((element) =>{
            element.addEventListener("click", ()=>{
                console.log(element.parentNode.childNodes[1]);
                if(element.parentNode.childNodes[2].innerHTML == "edit"){
                        element.parentNode.childNodes[1].type = "text"
                        element.parentNode.childNodes[1].disabled = false;
                        element.parentNode.childNodes[2].innerHTML = "save";
                }else{
                        element.parentNode.childNodes[1].type = "submit"
                        element.parentNode.childNodes[1].disabled = true;
                        element.parentNode.childNodes[2].innerHTML = "edit"
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
    let inputvalue = input;
    console.log(inputvalue);
    if(inputvalue.value == ""){
        alert("არ არის შევსებული")

    }else{
        let todoTask = new todo(inputvalue.value, list)
    }
    inputvalue.value = "";
})






