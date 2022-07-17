
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

createTask("learn JS1")
    .then((data)=>{
        console.log(data)
    })

//-----------------------

const getTasksButton = document.querySelector(`#get-tasks`);

getTasksButton.addEventListener("click", () => {
    const promise = getTask();
    promise.then(onTaskRecieved);
})

function onTaskRecieved(array) {
    array.forEach((task) => {
        const li7 = document.createElement('li')
        li7.innerHTML = task;
        document.querySelector(`#tasks-result`).appendChild(li7)
    });
}

