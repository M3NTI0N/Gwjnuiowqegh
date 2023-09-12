import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateClockHands(inGameTimeDecimal) {
	const now = Math.floor(inGameTimeDecimal);
	const hours = Util.getTwelveHour(now) % 12;
	const minutes = Math.floor((inGameTimeDecimal % 1) * 60);

    // Calculate rotation angles for the clock hands
    const hourDeg = (360 / 12) * (hours + minutes / 60);
    const minuteDeg = (360 / 60) * minutes;

    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;

	TabManager.updateTitle();
}


// Call the updateClockHands function every second to keep the clock updated
setInterval(updateClockHands, 1000);

// Initial call to set the clock hands at the current time
updateClockHands();

        // Your JavaScript code here

        // Function to update the clock hands based on the in-game time
        function updateClockHands(ingameHour, ingameMinute) {
            // Calculate rotation angles for the clock hands
            const hourDeg = (360 / 12) * (ingameHour + ingameMinute / 60);
            const minuteDeg = (360 / 60) * ingameMinute;

            // Update the CSS transforms for the clock hands
            document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
            document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
            // Uncomment the following line if you want to add a second hand
            // document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
        }

        // Call the updateClockHands function with in-game time values
        const ingameHour = 12; // Replace with your in-game hour
        const ingameMinute = 30; // Replace with your in-game minute
        updateClockHands(ingameHour, ingameMinute);