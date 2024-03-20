function showTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var currentTime = new Date().toUTCString();
    
    // Remove the fade-in class to reset the animation
    currentTimeElement.classList.remove('fade-in');
    
    // Update the content with the new time
    currentTimeElement.innerHTML = currentTime;
    
    // Re-add the fade-in class after a short delay to trigger the animation
    setTimeout(function() {
        currentTimeElement.classList.add('fade-in');
    }, 50); // Adjust the delay as needed
}

showTime(); // Display initial time

// Update time every second
setInterval(function() {
    showTime();
}, 1000);
