import * as CONSTANTS from './constants.js';
import * as Notify from './notify.js';
import * as InGameTime from './ingame-time.js';

export function run() {
	const [_, currentMinute, currentSeconds] = new Date()
	.toUTCString()
	.match(/(\d+):(\d+) GMT$/);
	
	const minuteNumber = Number.parseInt(currentMinute, 10);
	
	const minutesFromDailyMinute = minuteNumber - CONSTANTS.STEADY_DAILY_MINUTE;
	
	const inGameTimeDecimal =
	CONSTANTS.DISPLAY_START_INGAME_HOUR +
	(minutesFromDailyMinute + currentSeconds / 60) / 2.5;
	
	InGameTime.updateInGameTime(inGameTimeDecimal);
	
	const flooredHour = Number.parseFloat(
	(Math.floor(inGameTimeDecimal * 2) / 2).toFixed(1)
	);
	
	const flooredMinute = 0.5 === flooredHour % 1 ? 30 : 0;
	
	const timeId = `${Math.floor(flooredHour)
	.toString()
		.padStart(2, "0")}:${flooredMinute.toString().padStart(2, "0")}`;
	
	Notify.doNotify(timeId);
}