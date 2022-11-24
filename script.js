console.log("Hello world")
let form = document.querySelector("form");
let tasks = document.querySelector(".tasks");
let htmlTemplate = function(todo){
    let li = `
    <div class="task-item">
    <p id="task-text">${todo}</p>
    <i class="fa fa-solid fa-circle-xmark del"></i>
</div>
    `
    tasks.innerHTML += li;
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)
    let todo = form.task.value.trim();
    if(todo.length){
        htmlTemplate(todo)
        form.reset();
    }
    console.log(todo);
})

tasks.addEventListener("click", e =>{
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
        console.log("yes")
    }
})