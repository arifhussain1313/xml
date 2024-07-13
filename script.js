const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const amPmElem = document.getElementById("amPm");

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let amPm = hours < 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  let timeString = hours + ":" + minutes + ":" + seconds + " " + amPm;
  document.getElementById("time").innerText = timeString;
  
  // Call updateTime again after 1 second using setTimeout
  setTimeout(updateTime, 1000);
}

// Call updateTime initially after 1 second using setTimeout
setTimeout(updateTime, 1000);

// Call updateTime every 1 second using setInterval
setInterval(updateTime, 1000);