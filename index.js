const resultBlock = document.querySelector(`#result`);
const clickMeButton = document.querySelector(`#click-me`);
const pageNumberEl = document.querySelector('#page-number');
clickMeButton.addEventListener("click", () => {
    getImages(pageNumberEl.value, onDateRecieved);
})

function onDateRecieved(data) {
    data.forEach((el) => {
        const img7 = document.createElement('img')
        img7.src = el.thumbnail;
        resultBlock.appendChild(img7)
    });
}
