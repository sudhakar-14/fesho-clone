let tens = 0
let seconds = 59
let minutes = 33
let hours = 8
let days = 35
let interval
const displayMinutes = document.getElementById('minutes-con')
const displaySeconds = document.getElementById('seconds-con')
const displayHours = document.getElementById("hours-con")
const displayDays = document.getElementById("days-con")
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')

const timer = () => {
    tens++
    if (Number(tens) > 100) {
        console.log('seconds')
        seconds--
        displaySeconds.innerHTML = `0${seconds}`
        tens = 0
    }
    if (Number(seconds) > 9){
        displaySeconds.innerHTML = seconds
    }
    if (Number(seconds) < 0){
        minutes--
        seconds = 59
        displaySeconds.innerHTML = `${seconds}`
    }
    if (Number(minutes) <= 9){
        displayMinutes.innerHTML = `0${minutes}`
    }
    if (Number(minutes) > 9) {
        displayMinutes.innerHTML = minutes
    }
    if (Number(hours) <= 9){
        displayHours.innerHTML = `0${hours}`
    }
    if (Number(hours) > 9) {
        displayHours.innerHTML = hours
    }
    if (Number(minutes) < 0){
        hours--
        minutes = 59
        displayMinutes.innerHTML = `${minutes}`
    }
    if (Number(days) <= 9){
        displayDays.innerHTML = `0${days}`
    }
    if (Number(days) > 9){
        displayDays.innerHTML = days
    }
    if (Number(hours) < 0){
        days--
        hours = 24
        displayHours.innerHTML = hours
    }
}

function mydealstimer()  {
    clearInterval(interval)
    interval = setInterval(timer,10)
}

