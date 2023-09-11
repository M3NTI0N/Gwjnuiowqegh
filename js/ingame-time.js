import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
	const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = Util.getTwelveHour(floorHour);
	const ingameMinute = Math.floor((inGameTimeDecimal % 1) * 60);

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');

    const now = new Date();
    const hours = `${ingameHour} % 12`;
    const minutes = `${ingameMinute.toString().padStart(2, '0')}`;

    const hourDegrees = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDegrees = (360 / 60) * minutes + (360 / 60) * (seconds / 60);

    hourElement.style.transform = `rotate(${hourDegrees}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegrees}deg)`;

	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
	document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();
}