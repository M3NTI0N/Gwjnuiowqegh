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
    const prefixedmorningGradient = [
        'linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)',
        '-webkit-linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)',
        '-moz-linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)',
        '-o-linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)'
    ].join(',');

    const prefixedafternoonGradient = 'linear-gradient(to bottom, #40405c 0%, #6f71aa 80%, #8a76ab 100%)';

    const prefixedeveningGradient = [
        'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)',
        '-webkit-linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)',
        '-moz-linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)',
        '-o-linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)'
    ].join(',');
    const prefixednightGradient = [
        'linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)',
        '-webkit-linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)',
        '-moz-linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)',
        '-o-linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)'
    ].join(',');
    
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