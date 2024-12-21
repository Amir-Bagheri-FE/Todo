let userPlan = document.querySelector(".planText");
let AddButton = document.querySelector(".addBtn");
const Holder = document.querySelector(".added");
let desc = document.querySelector(".description");
let Time = document.getElementById("time");
let counter = 1;
AddButton.addEventListener("click", () => {
  AddTask(userPlan.value);
});

function AddTask(M) {
  if (M === "") {
    alert("please add a task");
  } else {
    let container = document.createElement("div");
    let sec1 = document.createElement("div");
    let sec2 = document.createElement("div");
    let Task = document.createElement("p");
    let Delete = document.createElement("li");
    let done = document.createElement("li");
    let Edit = document.createElement("li");
    let editor = document.createElement("input");
    const submit = document.createElement("button");
    submit.textContent = "✅";
    container.append(sec1, sec2);
    sec1.append(Task, editor, submit);
    sec1.classList.add("addedTask");
    editor.setAttribute("type", "text");
    editor.style.display = "none";
    //sec 2
    sec2.append(Delete, done, Edit);
    Holder.append(container);
    container.classList.add("mainTask");
    Task.textContent = `${M} until ${Time.value}`;
    Delete.classList.add("fas", "fa-trash-alt");
    done.classList.add("fas", "fa-check");
    Edit.classList.add("fas", "fa-edit");
    sec2.classList.add("buttons");
    submit.classList.add("subButton");
    //saving data
    localStorage.setItem(`task${counter}`, M);
    localStorage.setItem(`counterSaved`, counter);
    counter++;
    //events
    userPlan.value = "";
    Delete.addEventListener("click", (e) => {
      let target = e.target;
      target.parentElement.parentElement.remove();
    });
    done.addEventListener("click", () => {
      Task.classList.add("removed");
    });
    Edit.addEventListener("click", function () {
      editor.style.display = "block";
      editor.classList.add("editor");
      editor.value = Task.textContent;
      editor.focus();
    });
    editor.addEventListener("focus", () => {
      Task.style.display = "none";
      submit.style.display = "block";
    });
    submit.addEventListener("click", () => {
      submit.style.display = "none";
    });
    editor.addEventListener("focusout", function () {
      Task.style.display = "block";
      editor.style.display = "none";
      Task.textContent = editor.value;
      submit.style.display = "none";
    });
  }
}

window.addEventListener("keypress", function (event) {
  if (event.code === "Enter") {
    AddTask(userPlan.value);
  }
});

window.addEventListener("DOMContentLoaded", function () {
  let c = this.localStorage.getItem("counterSaved");
  console.log(c);
  
  for (let i = 1; i <= c; i++) {
    let result = localStorage.getItem(`task${i}`);
    AddTask(result);
  }
  
});