let userPlan = document.querySelector(".planText");
let AddButton = document.querySelector(".addBtn");
const Holder = document.querySelector(".added");

AddButton.addEventListener("click",  AddTask)
 function AddTask(){
  if (userPlan.value === "") {
    alert("please add a task");
  } else {
    let container = document.createElement("div");
    let sec1 = document.createElement("div");
    let sec2 = document.createElement("div");
    let Task = document.createElement("p");
    let Delete = document.createElement("li");
    let done = document.createElement("li");
    container.append(sec1, sec2);
    sec1.append(Task);
    sec1.classList.add("addedTask");
    sec2.append(Delete, done);
    Holder.append(container);
    container.classList.add("mainTask");
    Task.textContent =userPlan.value ;
    Delete.classList.add("fas", "fa-trash-alt");
    done.classList.add("fas", "fa-check");
    sec2.classList.add("buttons");
    userPlan.value=''
    
    Delete.addEventListener('click',(e)=>{
    let target=e.target
    target.parentElement.parentElement.remove()
    })
    done.addEventListener('click', ()=>{
   Task.classList.add('removed')
    })
  }
}

window.addEventListener('keypress',function(event){
  if(event.code==='Enter'){
    AddTask()
  }
  
})
