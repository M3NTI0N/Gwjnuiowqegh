import * as Util from './util.js';
import * as TabManager from './tab-manager.js';

export function updateInGameTime(inGameTimeDecimal) {
    // other 
    const floorHour = Math.floor(inGameTimeDecimal);
	const ingameHour = Util.getTwelveHour(floorHour);
    const ingameMinute = Math.floor((inGameTimeDecimal % 1) * 60);
    const hours = floorHour % 24;
    const hourDegrees = (360 / 24) * hours + (360 / 24) * (ingameMinute / 60);
    const hourElement = document.getElementById('hour');



    // Gradients
    const morninggradient = 'linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)';
    const prefixedmorningGradient = [
        '-webkit-' + morninggradient,
        '-moz-' + morninggradient,
        '-o-' + morninggradient,
        morninggradient
    ].join(';');
    const afternoongradient = 'linear-gradient(to bottom, #2d91c2 0%,#1e528e 100%)';
    const prefixedafternoonGradient = [
        '-webkit-' + afternoongradient,
        '-moz-' + afternoongradient,
        '-o-' + afternoongradient,
        afternoongradient
    ].join(';');
    const eveninggradient = 'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)';
    const prefixedeveningGradient = [
        '-webkit-' + eveninggradient,
        '-moz-' + eveninggradient,
        '-o-' + eveninggradient,
        eveninggradient
    ].join(';');
    const nightgradient = 'linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)';
    const prefixednightGradient = [
        '-webkit-' + nightgradient,
        '-moz-' + nightgradient,
        '-o-' + nightgradient,
        nightgradient
    ].join(';');
    
    // Change Background at times.
    if (floorHour > 6 && floorHour < 12) {
        document.body.style.backgroundImage = prefixedmorningGradient;
    } else if (floorHour > 12 && floorHour < 18) {
        document.body.style.backgroundImage = prefixedafternoonGradient;
    } else if (floorHour > 18 && floorHour < 21) {
        document.body.style.backgroundImage = prefixedeveningGradient;
    } else {
        document.body.style.backgroundImage = prefixednightGradient;
    }

    // Time counters/clock
    if (floorHour > 5 && floorHour < 18) {
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innersun.png')";
	} else {
		document.getElementById('clock-container').style.backgroundImage = "url('/img/innermoon.png')";
	}
    

	window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
    hourElement.style.transform = `rotate(${hourDegrees}deg)`;
    
    document.getElementById('ingame-time').innerText = ingameTimeDisplay;
	TabManager.updateTitle();


}