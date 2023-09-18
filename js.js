const addTaskBtn = document.querySelector(".add-task");
const inputTask = document.querySelector(".shopping-task");
const taskC = document.querySelector(".task-container");

addTaskBtn.addEventListener('click', function () {

    const mainC = document.createElement("div");
    mainC.classList.add('task');

    const listI = document.createElement("li");
    listI.innerText = inputTask.value;
    listI.classList.add('listItems');
    mainC.appendChild(listI);

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check">';
    checkBtn.classList.add('checkBtn');
    mainC.appendChild(checkBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('deleteBtn');
    mainC.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert('you have not entered any task');
    } else {
        taskC.appendChild(mainC);
    }

    inputTask.value = "";

    checkBtn.addEventListener('click', function () {

        checkBtn.parentElement.style.textDecoration = "line-through";
    
    })

    deleteBtn.addEventListener('click', function (e) {

        const target = e.target;

        target.parentElement.parentElement.remove();
    
    })



})

