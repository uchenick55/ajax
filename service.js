function getImages (pageNumber, successCallBack) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
        success: function(data){
            successCallBack(data);
        }
    });
}
