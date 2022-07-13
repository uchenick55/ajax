function getImages (pageNumber, successCallBack) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((responce)=>{
        return (responce.data);
    })
}