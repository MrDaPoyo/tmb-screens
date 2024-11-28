// Example: Timetable updates dynamically in the future
const times = [
    { line: "1", time: "01:21", arrival: "4 min" },
    { line: "2", time: "01:25", arrival: "8 min" },
];

function updateScreen() {
    const arrivalDiv = document.querySelector('.arrival');
    const remainingTimeDiv = document.querySelector('.remaining-time');

    const nextTrain = times[0];
    const nextNextTrain = times[1];

    // Update first train
    arrivalDiv.querySelector('.line-number').innerText = nextTrain.line;
    arrivalDiv.querySelector('.time').innerText = nextTrain.time;

    // Update second train
    remainingTimeDiv.querySelector('.line-number').innerText = nextNextTrain.line;
    remainingTimeDiv.querySelector('.time').innerText = nextNextTrain.arrival;
}

// Simulate updates (if you want a live system, hook it to real-time APIs)
document.addEventListener('DOMContentLoaded', updateScreen);
