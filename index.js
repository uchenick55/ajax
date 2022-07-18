
//-----------------------

const resultBlock = document.querySelector(`#result`);
const clickMeButton = document.querySelector(`#click-me`);
const pageNumberEl = document.querySelector('#page-number');
clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesRecieved);
})

function onImagesRecieved(data) {
    data.forEach((el) => {
        const img7 = document.createElement('img')
        img7.src = el.thumbnail;
        resultBlock.appendChild(img7)
    });
}

//-----------------------


/*createTask("learn JS3")
    .then((data)=>{
        console.log(data)
    })*/

//-----------------------

/*
deleteTask("51c2e92b-d0d7-4607-a03a-404fea84e08e")
    .then((data)=>{
        console.log(data.status + " removed")
    })*/

//-----------------------

updateTask("e0b6c36e-9fd0-465e-98f1-788643e4005e", "title updated")
    .then((data)=>{
        debugger
        console.log(data)
    })

//-----------------------


const getTasksButton = document.querySelector(`#get-tasks`);

getTasksButton.addEventListener("click", () => {
    const promise = getTask();
    promise.then(onTaskRecieved);
})

function onTaskRecieved(array) {
    const result = document.querySelector(`#tasks-result`)
    result.innerHTML = "";
    array.forEach((task) => {
        const li7 = document.createElement('li')
        li7.id = task.id;
        li7.innerHTML = task.title;
        result.appendChild(li7);
    });
}




















