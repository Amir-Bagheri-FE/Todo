# my first application is Todo app
i designed simple Application for organizaion daily tasks 


### more features will be added over time through time
---
in input user can see at first Tasks can be add to a list simply with click on add ➕ or pressing Enter button 

![input](/pics/input.png)

after adding Tasks user can continue Editing them using buttons

🗑️ user can completly Delete the Task by clicking on trash

✔️ with check user can mark th Task as finished

### added with update 
Editing user Tasks was added by update 

📝with this one user can easily change Contents of task 

---
---
in JS i use Addtask for adding event and each time a div wil be add and created with AddTask event 
```javaScript
    let container = document.createElement("div");
    let sec1 = document.createElement("div");
    let sec2 = document.createElement("div");
    let Task = document.createElement("p");
    let Delete = document.createElement("li");
    let done = document.createElement("li");
    let Edit = document.createElement("li");
    let editor = document.createElement("input");
    const submit = document.createElement("button");
    ```

