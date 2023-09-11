export function onTimeChecked(checkBoxId) {
	const checkBoxElement = document.getElementById(checkBoxId);
  window.localStorage.setItem(
    checkBoxId,
    checkBoxElement.checked
	);

	checkBoxElement.closest('div[id]').setAttribute('data-is-checked', checkBoxElement.checked);
};

export function onTextChange(textBoxId) {
  window.localStorage.setItem(textBoxId, document.getElementById(textBoxId).value);
};

export function isChecked(checkBoxId) {
	return "true" === window.localStorage.getItem(checkBoxId);
};

export function getTextValue(textBoxId) {
	let textValue = window.localStorage.getItem(textBoxId);

  if (null === textValue) {
    return "";
	}
	
	return textValue;
};

export function onToggleShowAll() {
	const showAllBooleanValue = document.getElementById("checkbox-show-all").checked;

	window.localStorage.setItem('show-all', showAllBooleanValue);

	document.getElementById("palia-times-container").setAttribute('data-show-all', showAllBooleanValue);
}

export function initializeShowAll() {
	const showAllSavedStringValue = window.localStorage.getItem('show-all');
	const showAllBooleanValue = 'string' === typeof showAllSavedStringValue ? ("true" === showAllSavedStringValue) : true;
	
	document.getElementById("checkbox-show-all").checked = showAllBooleanValue;
	window.localStorage.setItem('show-all', showAllBooleanValue);
	document.getElementById("palia-times-container").setAttribute('data-show-all', showAllBooleanValue);
}

export function initializeNotifications() {
	const notificationEnabledStringValue = window.localStorage.getItem('enable-notifications');
	const notificationsEnabledBooleanValue = 'string' === typeof notificationEnabledStringValue ? ("true" === notificationEnabledStringValue) : false;
	window.localStorage.setItem('enable-notifications', notificationsEnabledBooleanValue);
	document.getElementById("enable-notifications").checked = notificationsEnabledBooleanValue
};

export function setEnableNotifications(booleanValue) {
	window.localStorage.setItem('enable-notifications', booleanValue);
}