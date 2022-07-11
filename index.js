$.ajax({
    url: 'https://repetitora.net/api/JS/Images',
    success: function(data){
        data.map((d)=>{
            console.log(d.thumbnail);
            let img4 = document.createElement('img')
            img4.src = d.thumbnail;
            document.body.appendChild(img4)
        })
    }
});





