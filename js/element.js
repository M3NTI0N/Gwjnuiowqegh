import * as Settings from './settings.js';
import * as Util from './util.js';

export function createTimers() {
  const timesContainer = document.getElementById("palia-times-container");

  for (let i = 0; i < 48; i += 1) {
    timesContainer.appendChild(_createEachTimer(i));
  }
}

function _createEachTimer(i) {
  const timeContainer = document.createElement("div");
  const thatHour = (Math.floor(i / 2)) % 24;
  const thirtyString = 0 === i % 2 ? "00" : "30";
  const timeId = `${thatHour
    .toString()
    .padStart(2, "0")}:${thirtyString.padStart(2, "0")}`;
	timeContainer.id = timeId;

  const checkBoxId = `checked-${timeId}`;
	
	const isChecked = Settings.isChecked(
		checkBoxId
	);

	timeContainer.setAttribute('data-is-checked', isChecked);

  const textBoxId = `text-${timeId}`;

  timeContainer.innerHTML = `<div>
					<label>
					<input type="checkbox" id="${checkBoxId}" onchange="onTimeChecked('${checkBoxId}')"${isChecked ? ' checked' : ''} />
					<span>${Util.getTwelveHour(thatHour)}:${
    0 === i % 2 ? "00" : "30"
  } ${thatHour < 12 ? "AM" : "PM"}</span>
					</label>
					</div>
					<div class="custom-message">
						<input type="text" id="${textBoxId}" onkeyup="onTextChange('${textBoxId}')" value="${Settings.getTextValue(textBoxId)}"
							placeholder="It is now ${Util.getTwelveHour(thatHour)}:${thirtyString} ${Util.getMeridiemText(thatHour)}"/>
					</div>
					`;

  return timeContainer;
}
