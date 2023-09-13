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
    const chasehours = 24 - floorHour;
    const chasemins = 60 - ingameMinute;
    const timeuntilchase = `'&#11088;' ${chasehours}:${chasemins}`;

    // Gradients
    const prefixedmorningGradient = 'linear-gradient(170deg, #82addb 0%,#ebb2b1 100%)';
    const prefixedafternoonGradient = 'linear-gradient(170deg, #90dffe 0%,#38a3d1 100%)';
    const prefixedeveningGradient = 'linear-gradient(170deg, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)';
    const prefixednightGradient = 'linear-gradient(170deg, #4a4969 0%,#7072ab 50%,#cd82a0 100%)';
    

    // Change Background at times.
    if (floorHour >= 5 && floorHour < 12) {
        document.body.style.backgroundImage = prefixedmorningGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innersun.png')";
    } else if (floorHour >= 12 && floorHour < 18) {
        document.body.style.backgroundImage = prefixedafternoonGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innersun.png')";
    } else if (floorHour >= 18 && floorHour <= 20) {
        document.body.style.backgroundImage = prefixedeveningGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innermoon.png')";
    } else {
        document.body.style.backgroundImage = prefixednightGradient;
        document.getElementById('clock-container').style.backgroundImage = "url('/img/innermoon.png')";
    }
    
    window.ingameTimeDisplay = `${ingameHour}:${ingameMinute.toString().padStart(2, '0')} ${Util.getMeridiemText(floorHour)}`;
    hourElement.style.transform = `rotate(${hourDegrees}deg)`;

    document.getElementById('ingame-time').innerText = ingameTimeDisplay;
    document.getElementById('chase-time').innerText = timeuntilchase;
    TabManager.updateTitle();
}