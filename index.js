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

//--------------------------------------------POST-----------------------

const addTasksButton = document.querySelector("#create-task")
const taskTitle = document.querySelector("#task-input")

addTasksButton.addEventListener('click', () => {
    createTask(taskTitle.value)
        .then(createTaskCallback)
});

function createTaskCallback(data) {
    console.log("task create status: " + data.status)
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
    data.forEach((d) => {
        const li7 = document.createElement('li');
        li7.innerHTML = d.id;
        console.log(d.title, d.id)
        result.appendChild(li7)
    })
}
//--------------------------------------------DELETE-----------------------
const deleteTasksButton = document.querySelector("#delete-task");
const deleteTaskId = document.querySelector("#delete-task-id");

deleteTasksButton.addEventListener('click', () => {
    deleteTask(deleteTaskId.value).then((data) => {
        console.log("delete status: " + data.status)
        getTasks()
            .then(getTasksCallback)

});
});




/*
deleteTask("53f02d0b-3b8d-4a2e-8e11-d75a969db302").then((data) => {
        console.log("delete status: " + data.status)
    }
);
*/


/*
changeTask("6fa5be19-cc04-4454-9510-259bc3563259", "ashdfkhadwhf").then((data) => {
        console.log("task changed status: " + data.status)
    }
);
*/