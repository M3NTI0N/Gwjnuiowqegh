import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
    let hourDeg;
	const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = Util.getTwelveHour(floorHour);
    if (Util.getMeridiemText(floorHour) === 'PM'){
        hourDeg = (360 / 24) * (ingameHour + 12 + ingameMinute / 60);
    } else {
        hourDeg = (360 / 24) * (ingameHour + ingameMinute / 60);
    }
	const ingameMinute = Math.floor((inGameTimeDecimal % 1) * 60);

	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();
}