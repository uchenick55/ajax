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

function deleteTask () {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=12345`);
    return promise.then((responce)=>{
        return (responce.data);
    })
}



















