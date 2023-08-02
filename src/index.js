const msInTropicalYear = 3.156e10;
const msInStandardYear = 3.154e10;
let tropicalYearMS = new Date().valueOf() - ((new Date().getFullYear() - 1970) * msInTropicalYear);
let standardYearMS = new Date().valueOf() - new Date(new Date().getFullYear(), 0, 1).valueOf();
function refresh(yearType) {
    switch (yearType) {
        case "tropical":
            tropicalYearMS = new Date().valueOf() - ((new Date().getFullYear() - 1970) * msInTropicalYear);
            break;
        case "standard":
            standardYearMS = new Date().valueOf() - new Date(new Date().getFullYear(), 0, 1).valueOf();
            break;
        default:
            tropicalYearMS = new Date().valueOf() - ((new Date().getFullYear() - 1970) * msInTropicalYear);
            standardYearMS = new Date().valueOf() - new Date(new Date().getFullYear(), 0, 1).valueOf();
            break;
    }
}
function pad(number) {
    return number < 10 ? `0${number}` : number;
}
/**
 * Generates the current time based on the given year type.
 *
 * @param {string} yearType - The type of year to use for generating the current time.
 *                           Valid values are "tropical" and "standard".
 * @return {string} The current time as a string.
 * @throws {Error} If an invalid year type is provided.
 */
function getCurrentTime(yearType) {
    refresh();
    let myriara, centura, ra, centira, millira;
    switch (yearType) {
        case "tropical":
            myriara = Math.floor(1970 + (new Date().valueOf() / msInTropicalYear));
            centura = Math.floor(tropicalYearMS / (msInTropicalYear / 100));
            ra = Math.floor(tropicalYearMS / (msInTropicalYear / 10000)) - centura * 100;
            centira = Math.floor(tropicalYearMS / (msInTropicalYear / 1000000)) - centura * 10000 - ra * 100;
            millira = Math.floor(tropicalYearMS / (msInTropicalYear / 100000000)) - centura * 1000000 - ra * 10000 - centira * 100;
            return `(${pad(myriara)}) ${pad(centura)}|${pad(ra)}:${pad(centira)}:${pad(millira)}`;
        case "standard":
            myriara = Math.floor(1970 + (new Date().valueOf() / msInStandardYear));
            centura = Math.floor(standardYearMS / (msInStandardYear / 100));
            ra = Math.floor(standardYearMS / (msInStandardYear / 10000)) - centura * 100;
            centira = Math.floor(standardYearMS / (msInStandardYear / 1000000)) - centura * 10000 - ra * 100;
            millira = Math.floor(standardYearMS / (msInStandardYear / 100000000)) - centura * 1000000 - ra * 10000 - centira * 100;
            return `(${pad(myriara)}) ${pad(centura)}|${pad(ra)}:${pad(centira)}:${pad(millira)}`;
        default:
            throw new Error("Invalid year type");
    }
}
async function tickStandard() {
    setInterval(() => { console.log(getCurrentTime("standard")); }, 315.36);
    return getCurrentTime("standard");
}
async function tickTropical() {
    setInterval(() => { console.log(getCurrentTime("tropical")); }, 315.569);
    return getCurrentTime("tropical");
}
const timeModeForm = document.getElementById("timemode");
const timeDiv = document.getElementById("time");
let mode = timeModeForm.value;
let IntervalID = window.setInterval(() => { timeDiv.innerHTML = getCurrentTime("standard"); }, 315.36);
timeModeForm.addEventListener("input", () => {
    const selectedRadio = timeModeForm.querySelector('input[name="timemode"]:checked');
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
