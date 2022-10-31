let add = document.querySelector(".add");
let list = document.querySelector(".list");
let ulElem = document.createElement("ul");
list.append(ulElem);


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
        return this.list.innerHTML += `<li> ${this.input} </li>`;
    }
}


add.addEventListener("click", () => {
    let input = document.querySelector(".todo");
    if(input.value == ""){
        alert("არ არის შევსებული")
    }else{
        let todoTask = new todo(input.value, ulElem)
        todoTask.addToList()
    }
    input.value = "";

})




