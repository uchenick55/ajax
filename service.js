function getImages (pageNumber, successCallBack) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((responce)=>{
        return (responce.data);
    })
}


function createTask (title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 12345,
        title : title,
    });
    return promise.then((responce)=>{
        return (responce.data);
    })
}

function getTask () {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=12345&count=30`);
    return promise.then((responce)=>{
        return (responce.data);
    })
}

function deleteTask (id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=12345&taskId=${id}`);
    return promise.then((responce)=>{
        return (responce.data);
    })
}

function updateTask (id_update, title_update) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 12345,
        taskId: id_update,
        title : title_update,
    });
    return promise.then((responce)=>{
        return (responce.data);
    })
}




















