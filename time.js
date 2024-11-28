// Function to display and animate the current time
function animateColumnTime() {
    const columnTime = document.getElementById('column-time');
  
    // Ensure the element exists before applying animations
    if (!columnTime) return;
  
    // Function to get the current visitor's time
    function getVisitorTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    // Function to update the displayed time with animation
    function updateTime() {
      // Wait for the fade-out effect to complete
      setTimeout(() => {
        // Update the time
        columnTime.textContent = getVisitorTime();
      }, 500); // Match fade-out duration
    }
  
    // Update the time every second
    setInterval(updateTime, 1000);
  }
  
  // Run the animation on page load
  document.addEventListener('DOMContentLoaded', animateColumnTime);
  