let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerText = input.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    list.appendChild(delBtn);
    ul.appendChild(list);
    input.value = "";
});
//event bubbling
//to access the new delete buttons we use its parent element so the functionality performed
//on the parent element is also performed on its specific child.
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
});

