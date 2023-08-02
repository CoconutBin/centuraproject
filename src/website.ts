const timeModeForm = document.getElementById("timemode") as HTMLFormElement
const timeDiv = document.getElementById("time")

let mode = timeModeForm.value
let IntervalID:number = window.setInterval(() => {timeDiv.innerHTML = getCurrentTime("standard");}, 315.36)

timeModeForm.addEventListener("input", () => {
    const selectedRadio = timeModeForm.querySelector('input[name="timemode"]:checked') as HTMLInputElement
    mode = selectedRadio.value

    console.log(mode)
    clearInterval(IntervalID)

    switch(mode){
        case "standard":
            IntervalID = window.setInterval(() => {timeDiv.innerHTML = getCurrentTime("standard");}, 315.36)
            break;
        case "tropical":
            IntervalID = window.setInterval(() => {timeDiv.innerHTML = getCurrentTime("tropical");}, 315.569)
            break;
        default:
            IntervalID = window.setInterval(() => {timeDiv.innerHTML = getCurrentTime("standard");}, 315.36)
            break;
    }
})