import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
    const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = Util.getTwelveHour(floorHour);
	const ingameMinute = Math.floor((inGameTimeDecimal % 1) * 60);

	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
	document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();
}
// Function to update the clock hands based on the in-game time
function updateClockHands(ingameHour, ingameMinute) {
    // Calculate rotation angles for the clock hands
    const hourDeg = (360 / 12) * (ingameHour + ingameMinute / 60);
    const minuteDeg = (360 / 60) * ingameMinute;
    // Update the CSS transforms for the clock hands
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
}

// Call the updateClockHands function with in-game time values
const ingameHours = ingameHour; // Replace with your in-game hour
const ingameMinutes = ingameMinute; // Replace with your in-game minute
updateClockHands(ingameHours, ingameMinutes);