const result = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me")
const pageNumber = document.querySelector("#page-number")

clickMeButton.addEventListener('click', () => {
    getImages(pageNumber)
        .then(successCallback)
});

function successCallback(data) {
    data.forEach((d) => {
        console.log(d.thumbnail)
        img6 = document.createElement('img');
        img6.src = d.thumbnail;
        result.appendChild(img6)
    })
}

//+++/+&

//--------------------------------------------POST (Add)-----------------------

const addTasksButton = document.querySelector("#create-task")
const taskTitle = document.querySelector("#task-input")

addTasksButton.addEventListener('click', () => {
    createTask(taskTitle.value)
        .then(createTaskCallback)
});

function createTaskCallback(data) {
    console.log("task create status: " + data.status)
    taskTitle.value=""
    getTasks()
        .then(getTasksCallback)
}

//--------------------------------------------GET-----------------------
getTasks()
    .then(getTasksCallback)

const getTasksButton = document.querySelector("#get-tasks")


getTasksButton.addEventListener('click', () => {
    getTasks()
        .then(getTasksCallback)
});

function getTasksCallback(data) {
    const result = document.querySelector("#tasks-result");
    result.innerHTML = "";
    console.clear();
    data.forEach((d) => {
        const li7 = document.createElement('li');
        li7.innerHTML = d.id;
        console.log(d.done ,d.id, d.title)
        result.appendChild(li7)
    })
}

//--------------------------------------------DELETE-----------------------
const deleteTasksButton = document.querySelector("#delete-task");
const deleteTaskId = document.querySelector("#delete-task-id");

deleteTasksButton.addEventListener('click', () => {
    deleteTask(deleteTaskId.value).then((data) => {
        console.log("delete status: " + data.status)
        deleteTaskId.value="";
        getTasks()
            .then(getTasksCallback)

    });
});


//--------------------------------------------Edit (PUT)-----------------------

const editTaskButton = document.querySelector("#edit-task");
const editTaskId = document.querySelector("#edit-task-id");
const editTaskInput = document.querySelector("#edit-task-input");
editTaskButton.addEventListener('click', () => {
    editTask(editTaskId.value, editTaskInput.value).then((data) => {
        console.log("task changed status: " + data.status);
        editTaskId.value = "";
        editTaskInput.value = "";
        getTasks()
            .then(getTasksCallback)
        }
    );
});






