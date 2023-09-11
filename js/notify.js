import * as Say from './say.js';
import * as Util from './util.js';
import * as NotificationManager from './notification.js';

window.lastNotified = undefined;

export function doNotify(timeId) {
  if (window.lastNotified === timeId) {
    return;
  }

  const thatTimeElement = document.getElementById(timeId);

  const thatCheckbox = thatTimeElement.querySelector('input[type="checkbox"]');

  if (!thatCheckbox.checked) {
    return;
  }

	const thatInput = thatTimeElement.querySelector('input[type="text"]');
	
	let textValue = thatInput.value;

  if (
    "string" !== typeof textValue ||
    0 === textValue.trim().length
  ) {
		const [_, hour, minute] = timeId.match(/^(\d+):(\d+)$/);

		textValue = `It is now ${Util.getTwelveHour(hour)} ${minute.replace('00', 'o’clock')} ${Util.getMeridiemText(hour)}.`;
	}

	window.lastNotified = timeId;

	Say.doSpeak(textValue);

	NotificationManager.createNotification(timeId, 'Palia Time Notification', textValue);
};