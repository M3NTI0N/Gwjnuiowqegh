export function onToggleShowStatus() {
	const showAllBooleanValue = document.getElementById("toggle-headerstatus").checked;

	window.localStorage.setItem('show-all', showAllBooleanValue);

	document.getElementById("header-status").setAttribute('data-show-all', showAllBooleanValue);
}
