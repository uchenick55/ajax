function getImages(pageNumber) {
    return axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`)
        .then((response)=>{
            return response.data
        })
}

//+++/+&

function createTask(title) {
    return axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 12345,
        title: title
    })
        .then((response)=>{
            return response.data
        })
}

function getTasks() {
    return axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=12345&count=30`)
        .then((response)=>{
            return response.data
        })
}

function editTask(taskId, title_update) {
    return axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 12345,
        taskId: taskId,
        title: title_update,
/*        done: task_status*/
    })
        .then((response)=>{
            return response.data
        })
}

function deleteTask(task_id) {
    return axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=12345&taskId=${task_id}`)
        .then((response)=>{
            return response.data
        })
}




