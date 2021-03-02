var form=document.getElementById("addForm");

var itemList=document.getElementById("items");
var filter=document.getElementById("filter");

form.addEventListener('submit',additems);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterup);
function additems(e){
    e.preventDefault();
    var newitem=document.getElementById("item").value;
    var li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newitem));
    var deltn=document.createElement("button");
    deltn.className="btn btn-danger btn-sm  delete";
    deltn.style.float="right";
    deltn.appendChild(document.createTextNode("X"));
    li.appendChild(deltn);
    itemList.appendChild(li);

}


function removeItem(e){
    if(e.target.classList.contains("delete")){
        itemList.removeChild(e.target.parentElement);

    }
}

function filterup(e){
    var tar=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(i){
        console.log(i.childNodes[1].textContent);
        var t=i.firstChild.textContent;
        if(t.toLowerCase().indexOf(tar)!=-1){
            i.style.display="block";
        }
        else{
            i.style.display="none";
        }
    });
}