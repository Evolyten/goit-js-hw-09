const refs = {
    startBtnEl: document.querySelector('[data-start]'),
    stopBtnEl: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector("body")
}

refs.stopBtnEl.setAttribute('disabled',0)


let setIntervalId=null
refs.startBtnEl.addEventListener('click',startClick)
refs.stopBtnEl.addEventListener('click',stopCLick)
function startClick() {
    refs.startBtnEl.setAttribute('disabled', 0)
    refs.stopBtnEl.removeAttribute('disabled')
    setIntervalId =setInterval(() => {
    refs.bodyEl.style.backgroundColor=getRandomHexColor()
    },1000)
}

function stopCLick() {
    clearInterval(setIntervalId)
    refs.startBtnEl.removeAttribute('disabled')
    refs.stopBtnEl.setAttribute('disabled',0)

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



