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
    const prefixedmorningGradient = 'linear-gradient(to bottom, #fddb92, #d1fdff)';
    const prefixedafternoonGradient = 'linear-gradient(to bottom, #44bfc3, #9eb8f0)';
    const prefixedeveningGradient = 'linear-gradient(to bottom, #56374B 0%, #875A6F 40%, #AB7682 100%)';
    const prefixednightGradient = 'linear-gradient(to bottom, #191e3a, #2a3f5d, #0f2f61)';
    
    // Change Background at times.
    if (floorHour >= 5 && floorHour < 12) {
        document.getElementById('ingame-time-label').innerText = 'Morning';
        document.body.style.backgroundImage = prefixedmorningGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innersun.png')";
    } else if (floorHour >= 12 && floorHour < 18) {
        document.getElementById('ingame-time-label').innerText = 'Afternoon';
        document.body.style.backgroundImage = prefixedafternoonGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innersun.png')";
    } else if (floorHour >= 18 && floorHour <= 21) {
        document.getElementById('ingame-time-label').innerText = 'Evening';
        document.body.style.backgroundImage = prefixedeveningGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innermoon.png')";
    } else {
        document.getElementById('ingame-time-label').innerText = 'Night';
        document.body.style.backgroundImage = prefixednightGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innermoon.png')";
    }
    
    window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
    hourElement.style.transform = `rotate(${hourDegrees}deg)`;

    document.getElementById('ingame-time').innerText = ingameTimeDisplay;
    TabManager.updateTitle();
}