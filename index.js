// Variable Declaration

const startStopBtn = document.querySelector('#start-stop-btn')
const resetBtn = document.querySelector('#reset-btn')

let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for the leading zeros 
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval and timer status to be used for the start/stop button
let timerInterval = null;
let timerStatus = "stopped"

//Stopwatch function definition

function stopWatch() {
    seconds++
    if (seconds/60 === 1) {
        seconds = 0
        minutes ++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours ++
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds  //No need for the toString() method
    } else {
        leadingSeconds = seconds
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes
    } else {
        leadingMinutes = minutes
    }

    if (hours < 10) {
        leadingHours = "0" + hours
    } else {
        leadingHours = hours
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

//window.setInterval(stopWatch, 1000) This basically calls a function to activate at a specified interval of time. It takes two parmeters. First it takes the parameter of the function NAME and the interval on which to call that function (in milliseconds). //Remenber that this setInterval method can only be used on the window itself and not any node below it.

startStopBtn.addEventListener('click', function() {

    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('start-stop-btn').innerHTML = `<i class="fa-solid fa-pause" id="pause">pause</i>` //Take note of the use of back ticks.
        timerStatus = "started"
    } else {
        window.clearInterval(timerInterval); //This is the function that clears the set interval method and we passed timeInterval into it to stop it because timerInterval is equal to out interval function.
        document.getElementById('start-stop-btn').innerHTML = `<i class="fa-solid fa-play" id="play">start</i>`
        timerStatus = "stopped"
    }
})

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0
    minutes = 0
    hours = 0

    document.getElementById('timer').innerHTML = "00:00:00"

    document.getElementById('start-stop-btn').innerHTML = `<i class="fa-solid fa-play" id="play">start</i>`
})