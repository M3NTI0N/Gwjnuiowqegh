import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
    const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = Util.getTwelveHour(floorHour);
	const ingameMinute = Math.floor((inGameTimeDecimal % 1) * 60);
    const hourDeg = (360 / 24) * (ingameHour + ingameMinute / 60);
    const minuteDeg = (360 / 60) * ingameMinute;


	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
	document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();
}