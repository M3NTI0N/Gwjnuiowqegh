import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
    const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = Util.getTwelveHour(floorHour);
	const ingameMinute = Math.floor((inGameTimeDecimal % 1) * 60);
	if (floorHour > '11') {
		document.getElementById().style.backgroundImage = "url('/img/innersun.png')";
	} else {
		document.getElementById().style.backgroundImage = "url('/img/innermoon.png')";
	}
	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
	document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();
}