function updateClockHands() {
    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate rotation angles for the clock hands
    const hourDeg = (360 / 12) * (hours + minutes / 60);
    const minuteDeg = (360 / 60) * minutes;
    const secondDeg = (360 / 60) * seconds;

    // Update the CSS transforms for the clock hands
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    // Uncomment the following line if you want to add a second hand
    // document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Call the updateClockHands function every second to keep the clock updated
setInterval(updateClockHands, 1000);

// Initial call to set the clock hands at the current time
updateClockHands();