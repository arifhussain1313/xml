const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const amPmElem = document.getElementById("amPm");

// setInterval(function() {
//     const date = new Date()
//     let hours = date.getHours();
//     let amPm = "AM";
//     if(hours > 11){
//         amPm = "PM";
//         if(hours > 12){
//             hours -= 12;
//     }
// }
// hoursElem.innerText = hours;
// minutesElem.innerText = date.getMinutes();
// secondsElem.innerText = date.getSeconds();
// amPmElem.innerText = amPm;
// }, 1000)
function updateTime(){
    
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amPm = hours < 12? "AM" : "PM";
    hours = hours % 12;
    hours = hours === 0? 12 : hours;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    let timeString = hours + ":" + minutes + ":" + seconds + " " + amPm;
    document.getElementById("time").innerText = timeString;
}
setInterval(updateTime, 1000)
updateTime();
