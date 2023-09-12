import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
	const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = 0;//Util.getTwelveHour(floorHour);
    const ingameMinute = 0;//Math.floor((inGameTimeDecimal % 1) * 60);
    const hours = floorHour % 24;
    const hourDegrees = (360 / 24) * hours + (360 / 24) * (ingameMinute / 60);
    const hourElement = document.getElementById('hour');
    if (floorHour > 6 && floorHour < 18) {
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innersun.png')";
	} else {
		document.getElementById('clock-container').style.backgroundImage = "url('/img/innermoon.png')";
	}
    

	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
    hourElement.style.transform = `rotate(${hourDegrees}deg)`;
    
    document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();
}