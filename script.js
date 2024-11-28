// Function to handle the countdown timer and INCOMING animation
function startTimers() {
    const arrivals = [
      { element: document.querySelector('.arrival .time'), time: 81 }, // 1:21 in seconds
      { element: document.querySelector('.remaining-time .time'), time: 240 } // 4:00 in seconds
    ];
  
    // Function to format time as MM:SS
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      return `${minutes}:${secs}`;
    }
  
    // Function to update each timer
    function updateTimer() {
      arrivals.forEach((arrival) => {
        if (arrival.time > 0) {
          arrival.time--;
  
          // Update the displayed time
          arrival.element.textContent = formatTime(arrival.time);
  
          // Trigger INCOMING animation at 0:10
          if (arrival.time === 10 && !arrival.element.classList.contains('incoming')) {
            arrival.element.classList.add('incoming'); // Start incoming animation
            
            // After the animation ends, remove the class to stop it
            arrival.element.addEventListener('animationend', () => {
              arrival.element.classList.remove('incoming');
            });
          }
        }
      });
    }
  
    // Run the update every second
    setInterval(updateTimer, 1000);
  }
  
  // Run the timer on page load
  document.addEventListener('DOMContentLoaded', startTimers);
  