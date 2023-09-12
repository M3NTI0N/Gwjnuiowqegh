export function getTwelveHour(numberValue) {
	return numberValue === 0 || numberValue === 12 ? 12 : numberValue % 12;
};

export function getMeridiemText(twentyFourHour) {
	return twentyFourHour > 11 ? 'PM' : 'AM'
};

function toggleFoldable() {
	var content = document.getElementById('foldable-content');
	if (content.style.display === 'none' || content.style.display === '') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
}