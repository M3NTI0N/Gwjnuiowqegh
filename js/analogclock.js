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