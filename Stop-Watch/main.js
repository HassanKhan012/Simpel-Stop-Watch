

let hawer = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let gethawer = document.getElementById('hour')
let getmin = document.getElementById('min')
let getsec = document.getElementById('sec')
let getmsec = document.getElementById('msec')

var interval;


function start() {
    function addLeadingZero(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }


    interval = setInterval(function () {
        miliseconds++
        getmsec.innerHTML = addLeadingZero(miliseconds)

        if (miliseconds >= 100) {
            seconds++
            getsec.innerHTML = addLeadingZero(seconds)
            miliseconds = 0;
        }
        else if (seconds >= 60) {
            minutes++
            getmin.innerHTML = addLeadingZero(minutes)
            seconds = 0;
        }

        else if (minutes >= 60) {
            hawer++;
            gethawer.innerHTML = addLeadingZero(hawer)
            minutes = 0;
        }
    }, 10)
    document.getElementById('start-timer').disabled = true;
}


function stop() {

    clearInterval(interval)
    document.getElementById('start-timer').disabled = false;
}


function reset() {
    function addLeadingZero(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    hawer = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    gethawer.innerHTML = addLeadingZero(hawer)
    getmin.innerHTML = addLeadingZero(minutes)
    getsec.innerHTML = addLeadingZero(seconds)
    getmsec.innerHTML = addLeadingZero(miliseconds)
}