const mainDisplay = document.getElementById("mainDisplay")
const eventKey = document.getElementById("eventKey")
const eventCode = document.getElementById("eventCode")
const keyCode = document.getElementById("keyCode")

//Returns main code
document.addEventListener("keydown", () => {
    mainDisplay.textContent = event.keyCode;
    eventKey.textContent = event.key;
    eventCode.textContent = `Key - ${event.key}`
    keyCode.textContent = event.keyCode;
})

