function showTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var currentTime = new Date().toUTCString();
    currentTimeElement.innerHTML = currentTime;
    
    // Apply slide-in animation
    currentTimeElement.classList.add('slide-in');
    
    // Apply scale-up animation after a short delay
    setTimeout(function() {
        currentTimeElement.classList.add('scale-up');
    }, 500); // Adjust the delay as needed
    
    // Apply rotation animation
    currentTimeElement.classList.add('rotate');
}

showTime(); // Display initial time

// Update time every second
setInterval(function() {
    showTime();
}, 1000);
