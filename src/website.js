const timeModeForm = document.getElementById("timemode");
const timeDiv = document.getElementById("time");
const selectedRadio = timeModeForm.querySelector('input[name="timemode"]:checked');
let mode = timeModeForm.value;
let IntervalID = window.setInterval(() => { timeDiv.innerHTML = getCurrentTime("standard"); }, 315.36);
timeModeForm.addEventListener("input", () => {
    mode = selectedRadio.value;
    console.log(mode);
    clearInterval(IntervalID);
    switch (mode) {
        case "standard":
            IntervalID = window.setInterval(() => { timeDiv.innerHTML = getCurrentTime("standard"); }, 315.36);
            break;
        case "tropical":
            IntervalID = window.setInterval(() => { timeDiv.innerHTML = getCurrentTime("tropical"); }, 315.569);
            break;
        default:
            IntervalID = window.setInterval(() => { timeDiv.innerHTML = getCurrentTime("standard"); }, 315.36);
            break;
    }
});
const Main = () => {
    window.setInterval(() => { timeDiv.innerHTML = getCurrentTime("standard"); }, 315.36);
};
Main();
