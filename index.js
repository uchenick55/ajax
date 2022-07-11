const pageNumberEl = document.querySelector("#page-number")
const clickMeButton = document.querySelector("#click-me")
clickMeButton.addEventListener('click', makeRequest)

function makeRequest() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`, {
        success: function (data) {
            data.forEach((d) => {
                const img6 = document.createElement('img')
                img6.src = d.thumbnail
                document.querySelector('#result').appendChild(img6)
            })
        }
    });
}




