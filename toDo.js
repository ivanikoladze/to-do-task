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


add.addEventListener("click", () => {
    let input = document.querySelector(".todo").value;
    let newElem = `<li> ${input} </li>`
    ulElem.innerHTML+=newElem;
    document.querySelector(".todo").value = "";
})




