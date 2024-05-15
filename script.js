// stores info about inputBox
const inputBox = document.getElementById("inp-box"); 
const listContainer = document.getElementById("list"); 

function addTask(){
    if(inputBox.value===''){
        alert("Please enter some task");
    }
    else{
        //created new elemtent in htlm using js
        let li = document.createElement("li");
        // added val to it
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputBox.value='';
    saveData()

}

listContainer.addEventListener("click" , function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }

  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
} , false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML  = localStorage.getItem("data");
}
showTask();